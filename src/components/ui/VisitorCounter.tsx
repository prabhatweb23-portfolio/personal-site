'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visitors', {
          method: 'POST',
        });
        const data = await response.json();
        if (typeof data.count === 'number') {
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  if (!hasMounted) {
    return (
      <div className="flex flex-col gap-2 mt-4 pt-6 border-t border-white/10 opacity-50">
        <div className="h-3 w-24 bg-white/10 rounded animate-pulse" />
        <div className="h-10 w-32 bg-white/10 rounded animate-pulse" />
      </div>
    );
  }

  const formattedString = count !== null ? count.toString().padStart(5, '0') : '00000';
  const digits = formattedString.split('');

  return (
    <div className="flex flex-col mt-4 pt-6 border-t border-white/10 group">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors duration-500" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">
          Unique Visitors
        </span>
      </div>
      
      <div className="flex overflow-hidden relative">
        <AnimatePresence mode="popLayout">
          {count === null ? (
            <div className="flex">
              {['0','0','0','0','0'].map((d, i) => (
                <span key={i} className="font-space-mono text-4xl text-white/20 font-light tracking-widest">{d}</span>
              ))}
            </div>
          ) : (
            <div className="flex">
              {digits.map((digit, index) => {
                // Dim leading zeros for a more sophisticated look
                const isLeadingZero = digit === '0' && count < Math.pow(10, 4 - index);
                
                return (
                  <motion.span
                    key={`${index}-${digit}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.08, 
                      duration: 0.7, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className={`font-space-mono text-4xl font-light tracking-[0.1em] transition-colors duration-500 ${
                      isLeadingZero ? 'text-white/20' : 'text-white'
                    }`}
                  >
                    {digit}
                  </motion.span>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
