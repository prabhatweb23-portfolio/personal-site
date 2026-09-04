import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { cookies } from 'next/headers';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const count = await redis.get('visitor_count');
    return NextResponse.json({ count: count || 0 });
  } catch (error) {
    console.error('Failed to get visitor count:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    const cookieStore = await cookies();
    const hasVisited = cookieStore.get('visitor_session');

    if (hasVisited) {
      // Return the current count without incrementing if already visited in this session
      const currentCount = await redis.get('visitor_count');
      return NextResponse.json({ count: currentCount || 0 });
    }

    // Increment and set cookie for new visitors
    const newCount = await redis.incr('visitor_count');
    
    // Set a session cookie (expires in 30 minutes)
    cookieStore.set('visitor_session', 'true', {
      maxAge: 30 * 60, // 30 minutes in seconds
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Failed to increment visitor count:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
