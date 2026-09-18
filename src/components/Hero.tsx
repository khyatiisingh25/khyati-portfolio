
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { setCursorState } from './Cursor';

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const nameX = useTransform(sx, [-0.5, 0.5], [20, -20]);
  const nameY = useTransform(sy, [-0.5, 0.5], [10, -10]);

  const subX = useTransform(sx, [-0.5, 0.5], [-15, 15]);

  const bgX = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const bgY = useTransform(sy, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', onMove);

    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24"
    >
      {/* Parallax background text */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[20vw] font-bold text-white/[0.015] tracking-tighter select-none whitespace-nowrap">
          {profile.firstName}
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Top metadata row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400" />
            </span>

            <span className="text-label font-mono uppercase text-ink-300">
              {profile.location}
            </span>
          </div>

          <span className="text-label font-mono uppercase text-ink-400 hidden sm:block">
            Available for opportunities
          </span>
        </motion.div>

        {/* Huge name */}
        <motion.div
          style={{ x: nameX, y: nameY }}
          className="relative"
        >
          <motion.h1
            initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-hero font-extrabold tracking-tighter leading-none text-gradient"
          >
            KHYATI
          </motion.h1>

          <motion.h1
            initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-hero font-extrabold tracking-tighter leading-none text-gradient-rose pl-8 md:pl-20"
          >
            SINGH
          </motion.h1>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          style={{ x: subX }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.4,
            ease: 'easeOut',
          }}
          className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          {/* Left: role label */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-rose-400/60" />

              <span className="text-label font-mono uppercase text-rose-400">
                {profile.role}
              </span>
            </div>

            <p className="text-lg text-ink-200 leading-relaxed text-balance">
              Software development and practical AI applications — RAG,
              computer vision, and full-stack.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-label font-mono uppercase tracking-wider text-ink-400">
              Let's Connect
            </span>

            <div className="flex flex-wrap gap-2">
              <CTAButton
                onClick={() => scrollTo('projects')}
                primary
              >
                Explore Work
              </CTAButton>

              <CTAButton
                href={`mailto:${profile.email}`}
                label="Email"
                title="khyatiisingh25@gmail.com"
              >
                <Mail size={15} />
              </CTAButton>

              <CTAButton
                href={profile.github}
                label="GitHub"
              >
                <Github size={15} />
              </CTAButton>

              <CTAButton
                href={profile.linkedin}
                label="LinkedIn"
              >
                <Linkedin size={15} />
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.3,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-400">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown
            size={14}
            className="text-rose-400/60"
          />
        </motion.div>
      </motion.div>

      {/* Corner annotations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.55,
          duration: 0.3,
        }}
        className="absolute bottom-8 right-6 hidden md:block"
      >
        <span className="text-[10px] font-mono text-ink-500 tracking-wider">
          N26.85° E80.95°
        </span>
      </motion.div>
    </section>
  );
}

function CTAButton({
  children,
  href,
  onClick,
  primary,
  label,
  title,
}: {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  label?: string;
  title?: string;
}) {
  const className = primary
    ? 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-400 text-ink-950 font-semibold text-sm hover:bg-rose-300 transition-colors duration-300'
    : 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-ink-100 font-medium text-sm hover:border-rose-400/30 transition-all duration-300';

  const content = label ? (
    <>
      {children}
      <span>{label}</span>
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <a
        href={href}
        title={title}
        onMouseEnter={() => setCursorState('hover')}
        onMouseLeave={() => setCursorState('default')}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setCursorState('hover')}
      onMouseLeave={() => setCursorState('default')}
      className={className}
    >
      {content}
    </button>
  );
}