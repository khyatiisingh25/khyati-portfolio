import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { SectionLabel } from './About';
import { education } from '@/data/portfolio';
import { setCursorState } from './Cursor';

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="05" label="Education" />

        <div className="mt-12 md:mt-20 space-y-4">
          {education.map((edu, i) => {
            const isPrimary = i === 0;
            const Icon = isPrimary ? GraduationCap : School;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
                className="group relative p-6 md:p-10 rounded-2xl glass overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.02] border-hairline group-hover:border-rose-400/30 transition-colors duration-300">
                    <Icon size={22} className="text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-rose-400">{edu.period}</span>
                      <span className="h-px w-8 bg-rose-400/20" />
                      {edu.location && (
                        <span className="text-xs font-mono text-ink-400">{edu.location}</span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gradient">
                      {edu.fullDegree}
                    </h3>
                    <p className="mt-2 text-sm text-ink-300">{edu.degree}</p>
                    <p className="mt-1 text-sm text-ink-400">{edu.institution}</p>
                    {isPrimary && edu.cgpa && (
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-ink-400">CGPA</span>
                        <span className="text-lg font-bold text-rose-300">{edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
