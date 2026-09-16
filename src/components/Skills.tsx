import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Layers, Server, Database, type LucideIcon } from 'lucide-react';
import { SectionLabel } from './About';
import { skillCategories } from '@/data/portfolio';
import { setCursorState } from './Cursor';

const iconMap: Record<string, LucideIcon> = { Code2, Brain, Layers, Server, Database };

const catColors: Record<string, string> = {
  languages: '#d27ea0',
  aiml: '#bf5c84',
  frontend: '#a94470',
  backend: '#8c3660',
  databases: '#7a2e54',
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="03" label="Skills" />

        <div className="mt-12 md:mt-20">
          <h2 className="text-section font-bold text-gradient mb-4">
            Technical Map
          </h2>
          <p className="text-sm text-ink-300 leading-relaxed max-w-md mb-12">
            Technologies and tools I work with across software development and AI applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat, ci) => {
              const Icon = iconMap[cat.icon] ?? Code2;
              const color = catColors[cat.id];
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-6 rounded-2xl glass overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: `${color}10` }}
                  />

                  <div className="relative">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border-hairline">
                        <Icon size={18} className="text-rose-400" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-ink-400">{cat.num}</span>
                        <h3 className="text-sm font-semibold text-ink-100">{cat.label}</h3>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, si) => {
                        const isHovered = hoveredSkill === skill.name;
                        return (
                          <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.08 + si * 0.03, duration: 0.3 }}
                            onMouseEnter={() => {
                              setHoveredSkill(skill.name);
                              setCursorState('hover');
                            }}
                            onMouseLeave={() => {
                              setHoveredSkill(null);
                              setCursorState('default');
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300"
                            style={{
                              borderColor: isHovered ? color : 'rgba(255,255,255,0.06)',
                              backgroundColor: isHovered ? `${color}12` : 'rgba(255,255,255,0.02)',
                              color: isHovered ? '#f2eff3' : '#b0a9b5',
                            }}
                          >
                            {skill.name}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
