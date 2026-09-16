import { motion } from 'framer-motion';
import { X, ArrowUpRight, Check, Github } from 'lucide-react';
import PipelineFlow from './PipelineFlow';
import { setCursorState } from './Cursor';

interface ProjectData {
  id: string;
  num: string;
  name: string;
  category: string;
  short: string;
  tags: string[];
  event: string | null;
  github: string | null;
  overview: string;
  built: string[];
  pipeline: { label: string; icon: string; desc: string }[];
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectData;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        initial={{ clipPath: 'inset(50% 50% 50% 50%)', opacity: 0, scale: 0.9 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
        exit={{ clipPath: 'inset(50% 50% 50% 50%)', opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-strong rounded-3xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 px-6 md:px-10 py-6 glass-strong border-b border-white/5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-rose-400">{project.num}</span>
              <span className="h-px w-8 bg-rose-400/40" />
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient">{project.name}</h2>
          </div>
          <button
            onClick={onClose}
            onMouseEnter={() => setCursorState('hover')}
            onMouseLeave={() => setCursorState('default')}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl border-hairline text-ink-300 hover:text-rose-300 hover:border-rose-400/20 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 md:px-10 py-8 space-y-10">
          {project.event && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/8 border border-rose-400/15">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="text-sm font-medium text-rose-300">{project.event}</span>
            </div>
          )}

          {/* Overview */}
          <Section title="Overview">
            <p className="text-ink-100 leading-relaxed">{project.overview}</p>
          </Section>

          {/* Technologies */}
          <Section title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-ink-200 bg-white/[0.03] border-hairline"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Section>

          {/* What was built */}
          <Section title="What was built">
            <ul className="space-y-2">
              {project.built.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-3 text-ink-200"
                >
                  <Check size={16} className="text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Pipeline */}
          <Section title="Pipeline">
            <div className="p-6 rounded-2xl bg-ink-900/50 border-hairline">
              <PipelineFlow steps={project.pipeline} delay={0.2} />
            </div>
          </Section>

          {/* Footer */}
          {project.github && (
            <div className="pt-4 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-rose-300 transition-colors"
              >
                <Github size={15} />
                View on GitHub
                <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-4">{title}</h3>
      {children}
    </div>
  );
}
