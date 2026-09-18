
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { setCursorState } from './Cursor';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-label font-mono text-rose-400">
              06
            </span>

            <span className="h-px w-10 bg-rose-400/50" />

            <span className="text-label font-mono uppercase text-ink-400">
              Contact
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-gradient">
            LET'S CONNECT
          </h2>

          <p className="mt-6 max-w-xl text-ink-300 text-lg leading-relaxed">
            Have an opportunity, idea, or project in mind?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onMouseEnter={() => setCursorState('hover')}
          onMouseLeave={() => setCursorState('default')}
          className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 transition-all duration-300 hover:border-rose-400/40 hover:bg-rose-400/[0.04]"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-400/10 text-rose-400">
              <Mail size={22} />
            </div>

            <div>
              <span className="block text-label font-mono uppercase text-ink-400 mb-1">
                Get in touch
              </span>

              <span className="block text-xl md:text-2xl font-medium text-ink-100 break-all">
                {profile.email}
              </span>
            </div>
          </div>

          <ArrowUpRight
            size={24}
            className="shrink-0 text-ink-400 transition-all duration-300 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-white/10 pt-6"
        >
          <span className="text-label font-mono uppercase text-ink-500">
            Khyati Singh
          </span>

          <span className="text-label font-mono uppercase text-ink-500">
            Building with curiosity
          </span>
        </motion.div>

      </div>
    </section>
  );
}