
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function IntroLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 0.65,
        duration: 0.25,
        ease: 'easeInOut',
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-px w-16 origin-center bg-rose-400"
        />

        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.25em' }}
          animate={{ opacity: 1, letterSpacing: '0.08em' }}
          transition={{
            duration: 0.55,
            ease: 'easeOut',
          }}
          className="text-3xl md:text-5xl font-bold text-gradient whitespace-nowrap"
        >
          KHYATI SINGH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.35,
          }}
          className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400"
        >
          Software Developer
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.45,
            ease: 'easeOut',
          }}
          className="h-px w-16 origin-center bg-rose-400"
        />
      </motion.div>
    </motion.div>
  );
}