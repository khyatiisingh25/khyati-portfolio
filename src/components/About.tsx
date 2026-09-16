import { motion } from 'framer-motion';
import { aboutMeta, aboutParagraphs } from '@/data/portfolio';
import { setCursorState } from './Cursor';

const revealWords = ['I', 'BUILD', 'SOFTWARE', 'AI', 'APPLICATIONS'];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <SectionLabel num="01" label="About" />

        {/* Large editorial text */}
        <div className="mt-12 md:mt-20">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            {revealWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`text-display font-bold tracking-tighter ${
                  word === 'AI' || word === 'APPLICATIONS'
                    ? 'text-gradient-rose'
                    : 'text-gradient'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Metadata + paragraphs */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Metadata column */}
          <div className="md:col-span-4 space-y-4">
            {aboutMeta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-baseline gap-3 border-b border-white/5 pb-3"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-400 w-20 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-ink-100 font-medium">{item.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Paragraphs column */}
          <div className="md:col-span-7 md:col-start-6 space-y-6">
            {aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`leading-relaxed ${
                  i === 0 ? 'text-xl text-ink-100 font-medium' : 'text-ink-300'
                }`}
              >
                {para}
              </motion.p>
            ))}

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {['Software Development', 'Practical AI', 'Full-Stack', 'RAG', 'Computer Vision', 'Backend APIs'].map((tag) => (
                <span
                  key={tag}
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-ink-300 bg-white/[0.02] border-hairline hover:border-rose-400/20 hover:text-rose-300 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span className="text-sm font-mono text-rose-400">{num}</span>
      <span className="h-px w-12 bg-rose-400/40" />
      <span className="text-label font-mono uppercase tracking-[0.2em] text-ink-300">
        {label}
      </span>
    </motion.div>
  );
}
