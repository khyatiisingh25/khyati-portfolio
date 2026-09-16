import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, profile } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { setCursorState, setCursorLabel } from './Cursor';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(navItems.map((n) => n.id));
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-rose-400 to-rose-600 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className={`flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/30' : 'glass'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            onMouseEnter={() => setCursorState('hover')}
            onMouseLeave={() => setCursorState('default')}
            className="flex items-center gap-2 px-3 py-1.5 group"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-rose-400 to-rose-600 text-ink-950 font-bold text-xs">
              K
            </span>
          </button>

          <span className="h-5 w-px bg-white/10" />

          {/* Section links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
                className="relative px-3 py-1.5 text-xs font-mono transition-colors duration-300"
              >
                <span className={active === item.id ? 'text-rose-300' : 'text-ink-400 hover:text-ink-100'}>
                  {item.num}
                </span>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-rose-500/10 border border-rose-400/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-ink-200"
          >
            <span className="text-rose-300">{navItems.find((n) => n.id === active)?.num ?? '00'}</span>
            <span className="text-ink-400">/</span>
            <span className="text-ink-100">{navItems.find((n) => n.id === active)?.label ?? 'Home'}</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(92%,360px)] glass-strong rounded-2xl p-3"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                    active === item.id
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-400/20'
                      : 'text-ink-200 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-400">{item.num}</span>
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
