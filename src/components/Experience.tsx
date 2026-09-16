import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './About';
import { experiences } from '@/data/portfolio';
import { setCursorState } from './Cursor';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-24 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="04" label="Experience" />

        <div ref={containerRef} className="mt-12 md:mt-20 relative">
          {/* Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />
          {/* Progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-rose-400 to-rose-600 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-850 border border-rose-400/30"
                  >
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <span className="text-sm font-mono text-rose-400">{exp.year}</span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gradient">
                    {exp.org}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-rose-300">{exp.role}</p>
                  <p className="mt-3 text-sm text-ink-300 leading-relaxed max-w-sm">
                    {exp.description}
                  </p>
                  {exp.secondDescription && (
                    <p className="mt-2 text-sm text-ink-400 leading-relaxed max-w-sm">
                      {exp.secondDescription}
                    </p>
                  )}
                  {exp.fullOrg && (
                    <p className="mt-1 text-xs text-ink-400">{exp.fullOrg}</p>
                  )}
                  <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 1 ? '' : 'md:justify-end'}`}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        onMouseEnter={() => setCursorState('hover')}
                        onMouseLeave={() => setCursorState('default')}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-ink-300 bg-white/[0.03] border-hairline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setCursorState('hover')}
                      onMouseLeave={() => setCursorState('default')}
                      className={`mt-3 inline-flex items-center gap-1.5 text-xs text-ink-400 hover:text-rose-300 transition-colors ${i % 2 === 1 ? '' : 'md:flex-row-reverse'}`}
                    >
                      View on GitHub
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
