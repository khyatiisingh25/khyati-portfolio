
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      onComplete();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase(1), 100));
    timers.push(setTimeout(() => setPhase(2), 400));
    timers.push(setTimeout(() => setPhase(3), 650));
    timers.push(setTimeout(() => onComplete(), 850));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 3 ? 0 : 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-950"
    >
      <div className="relative flex flex-col items-center">
        {/* Phase 0: K / S */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: phase === 0 ? 1 : 0,
            scale: phase === 0 ? 1 : 0.8,
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gradient-rose"
        >
          K / S
        </motion.div>

        {/* Phase 1-2: Full name reveal */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{
              y: phase >= 1 && phase < 3 ? 0 : 60,
              opacity: phase >= 1 && phase < 3 ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gradient whitespace-nowrap"
          >
            KHYATI SINGH
          </motion.div>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-12 h-px w-32 origin-left bg-gradient-to-r from-rose-400 to-rose-600"
        />
      </div>
    </motion.div>
  );
}