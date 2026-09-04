'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Counter from '@/components/ui/Counter';
import TypingText from '@/components/ui/TypingText';
import OrganicInkEffect from '@/components/ui/OrganicInkEffect';
import ZoomableImage from '@/components/ui/ZoomableImage';

const hopeTags = [
  {
    label: 'Are you a School/University looking for workshops?',
    href: 'https://wa.me/919289830699?text=we%20are%20School/University%20looking%20for%20a%20workshops',
  },
  {
    label: 'Are you looking for regular workshops?',
    href: 'https://wa.me/919289830699?text=we%20are%20looking%20for%20regular%20workshops',
  },
  {
    label: 'Are you looking for weekend workshops?',
    href: 'https://wa.me/919289830699?text=we%20are%20looking%20for%20weekend%20workshops',
  },
  {
    label: 'Are you looking for a collaboration for space to perform, collaborate and connect with a growing community of artists?',
    href: 'https://wa.me/919289830699?text=we%20are%20looking%20for%20a%20collaboration%20for%20space',
  },
];

export default function HopeContent() {
  return (
    <div className="min-h-screen bg-blue-950">
      {/* 1. Cinematic Hero (Sticky Parallax) */}
      <section className="sticky top-0 h-[70vh] sm:h-[90vh] flex items-center justify-center overflow-hidden pt-20 z-0" data-theme="dark">
        <div className="absolute inset-0 bg-blue-950">
          <OrganicInkEffect theme="hope" autoPlay />
          <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-gradient-to-t from-blue-950 via-transparent to-transparent z-10 pointer-events-none" />
        </div>
        
        <div className="container-editorial relative z-10 text-center text-white mt-12 px-4">
          <ScrollReveal variant="fade-up">
            <span className="text-eyebrow !text-cyan-400 block mb-6 tracking-widest uppercase">
              Home of Passion Events
            </span>
          </ScrollReveal>
          <AnimatedText
            text={"HOPE"}
            className="text-[clamp(4rem,15vw,12rem)] font-display mb-4 md:mb-8 leading-[0.9] tracking-tight text-white drop-shadow-lg"
            variant="slide-up"
            tag="h1"
          />
          <ScrollReveal variant="fade-up" delay={0.4}>
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] font-light text-cyan-50/80 max-w-3xl mx-auto">
              A platform for passion-preneurs — people ready to turn what they love into what they do.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Wrapper for the rest of the page to scroll over the sticky hero */}
      <div className="relative z-10 bg-off-white rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] mt-[-3rem] md:mt-[-5rem]">

        {/* 2. Impact Statistics */}
        <section className="py-12 md:py-24 relative px-4">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center md:divide-x divide-blue-900/10">
              <div>
                <Counter end={500} suffix="+" label="Passion-Preneurs" duration={2} />
              </div>
              <div>
                <Counter end={100} suffix="+" label="Workshops" duration={2} />
              </div>
              <div>
                <Counter end={15} suffix="+" label="Cities" duration={2.5} />
              </div>
              <div>
                <Counter end={100} suffix="%" label="Commitment" duration={2} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Mission */}
        <section className="py-24 relative px-4">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
              <div>
                <ScrollReveal variant="fade-up">
                  <span className="text-blue-600 font-medium tracking-wider uppercase text-sm mb-4 block">
                    Our Philosophy
                  </span>
                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display text-blue-950 mb-8 leading-[1.1] text-balance">
                    Passion Deserves a <span className="text-cyan-500 italic">Professional Path</span>
                  </h2>
                  <p className="text-body-lg text-graphite mb-8 leading-relaxed max-w-3xl mx-auto">
                    Born from the belief that passion deserves a professional path, HOPE trains and empowers individuals from all walks of life to pursue their craft with purpose. 
                  </p>
                  <p className="text-body-lg text-graphite leading-relaxed">
                    Through workshops built with creativity and precision, we&apos;ve helped participants build the skills — and the confidence — to turn dreams into unforgettable, lasting work.
                  </p>
                </ScrollReveal>
              </div>
              <div className="relative">
                <ScrollReveal variant="scale">
                  <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-700 to-cyan-400 relative group">
                    <ZoomableImage
                      src="/images/prabhat-keynote-speaking.jpg"
                      alt="Prabhat Singh — Keynote & Stage Address"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollReveal>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-cyan-400/30 rounded-full blur-[60px] -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Immersive Quote */}
        <section className="py-16 md:py-32 relative bg-blue-950 overflow-hidden mt-10 md:mt-20" data-theme="dark">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="container-editorial relative z-10 text-center max-w-5xl mx-auto px-6">
            <ScrollReveal variant="fade-up">
              <span className="text-[clamp(5rem,15vw,12rem)] font-display text-cyan-400/30 leading-none block mb-4">
                &ldquo;
              </span>
              <TypingText
                text="Don't just chase your passion. Build it, refine it, and let it sustain you."
                className="text-[clamp(1.5rem,5vw,4rem)] font-display text-white leading-[1.2] italic mb-8 md:mb-12 -mt-6 md:-mt-16 relative z-10 text-balance"
                tag="h3"
                speed={40}
                delay={200}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* 5. Event Moments (Masonry / Grid) */}
        <section className="py-16 md:py-32 relative bg-off-white px-4 md:px-0">
          <div className="container-editorial">
            <ScrollReveal variant="fade-up">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display text-blue-950 mb-10 md:mb-16 text-center leading-none">
                Moments of <br/><span className="italic text-cyan-600">Transformation</span>
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <ScrollReveal variant="fade-up" delay={0.1}>
                <div className="aspect-square rounded-2xl bg-mist shadow-lg overflow-hidden group">
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                    <ZoomableImage
                      src="/images/masters-union.jpeg"
                      alt="Masters' Union Event"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.3}>
                <div className="aspect-[3/4] rounded-2xl bg-mist shadow-lg overflow-hidden group mt-0 md:mt-16">
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                    <ZoomableImage
                      src="/images/casting.jpeg"
                      alt="Netflix Mismatched On Set Experience"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={0.5}>
                <div className="aspect-square rounded-2xl bg-mist shadow-lg overflow-hidden group">
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                    <ZoomableImage
                      src="/images/audience-boy.jpg"
                      alt="Audience Event"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* HOPE Banner + Reach Out CTA Tags */}
        <section className="relative overflow-hidden w-full">
          {/* Banner Image */}
          <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-blue-950">
            <Image
              src="/images/hope-banner.jpg"
              alt="HOPE — Same Stage, Different Worlds"
              fill
              className="object-cover object-top"
              sizes="100vw"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>

          {/* CTA Tags (After Banner) */}
          <div className="relative bg-blue-950 py-12 md:py-20 px-4">
            <div className="container-editorial w-full">
              <ScrollReveal variant="fade-up">
                <span className="text-eyebrow !text-cyan-400 block mb-10 tracking-widest uppercase text-center drop-shadow-md">
                  How can HOPE help you?
                </span>
              </ScrollReveal>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                {hopeTags.map((tag, index) => (
                  <ScrollReveal key={index} variant="fade-up" delay={0.1 * (index + 1)}>
                    <a
                      href={tag.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full border border-cyan-400/30 bg-blue-900/50 text-cyan-50 text-sm md:text-lg font-medium backdrop-blur-xl hover:bg-cyan-400 hover:text-blue-950 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    >
                      <span className="text-center">{tag.label}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 shrink-0" />
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
