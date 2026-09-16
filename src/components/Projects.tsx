import { useState, useRef, type MouseEvent } from 'react';
import { motion, AnimatePresence, type MotionStyle } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { SectionLabel } from './About';
import ProjectModal from './ProjectModal';
import { projects } from '@/data/portfolio';
import { setCursorState, setCursorLabel } from './Cursor';

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="02" label="Selected Work" />

        <div className="mt-12 md:mt-20 space-y-4 md:space-y-6">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <ProjectModal
            project={projects[selected]}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  onClick,
}: {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -3, y: dx * 3 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
    setCursorState('default');
    setCursorLabel(null);
  };

  const motionStyle: MotionStyle = {
    transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: 'transform 0.2s ease-out',
  };

  const isEven = index % 2 === 0;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => {
        setHovered(true);
        setCursorState('view');
        setCursorLabel('VIEW');
      }}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={motionStyle}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full text-left overflow-hidden rounded-3xl glass"
    >
      {/* Hover background glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent pointer-events-none"
      />
      <div className="absolute top-0 right-0 w-60 h-60 bg-rose-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
        {/* Visual side */}
        <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden border-b md:border-b-0 border-white/5">
          <ProjectVisual id={project.id} hovered={hovered} />
        </div>

        {/* Content side */}
        <div className="relative md:w-3/5 p-6 md:p-10 flex flex-col justify-between gap-6">
          {/* Top row */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-mono text-rose-400">{project.num}</span>
              <span className="h-px w-12 bg-rose-400/30" />
              <span className="text-xs font-mono uppercase tracking-wider text-ink-400">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-3 group-hover:text-gradient-rose transition-all duration-500">
              {project.name}
            </h3>
            <p className="text-ink-300 leading-relaxed max-w-md">{project.short}</p>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-ink-300 bg-white/[0.03] border-hairline"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border-hairline text-ink-300 hover:bg-rose-400 hover:text-ink-950 hover:border-rose-400 transition-all duration-300"
                >
                  <Github size={16} />
                </a>
              )}
              <motion.div
                animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border-hairline text-ink-300 group-hover:bg-rose-400 group-hover:text-ink-950 group-hover:border-rose-400 transition-all duration-300"
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </div>
          </div>

          {/* Event */}
          {project.event && (
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <span className="text-[10px] font-mono text-ink-400 tracking-wider">
                {project.event}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
}

function ProjectVisual({ id, hovered }: { id: string; hovered: boolean }) {
  if (id === 'warehouse') {
    return (
      <div className="relative w-full h-full bg-ink-900/50 dot-bg flex items-center justify-center overflow-hidden">
        {/* Shelf grid */}
        <div className="relative w-[80%] h-[70%] flex flex-col gap-1.5">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="flex-1 flex gap-1.5">
              {[0, 1, 2, 3, 4].map((col) => {
                const filled = (row + col) % 3 !== 0;
                return (
                  <motion.div
                    key={col}
                    animate={{
                      opacity: hovered
                        ? filled
                          ? [0.4, 0.7, 0.4]
                          : [0.1, 0.2, 0.1]
                        : filled
                          ? 0.3
                          : 0.08,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: (row * 5 + col) * 0.08 }}
                    className="flex-1 rounded-sm border border-rose-400/20"
                    style={{ backgroundColor: filled ? 'rgba(210,126,160,0.15)' : 'transparent' }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {/* Bounding box */}
        <motion.div
          animate={{ opacity: hovered ? [0.3, 0.6, 0.3] : 0.2 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[15%] left-[20%] w-12 h-12 border-2 border-rose-400/40 rounded-sm"
        />
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400/60">
            Shelf Occupancy
          </span>
        </div>
      </div>
    );
  }

  if (id === 'saathi') {
    return (
      <div className="relative w-full h-full bg-ink-900/50 dot-bg flex items-center justify-center overflow-hidden">
        {/* Check-in timeline */}
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${10 + i * 20}%` }}
              animate={{
                y: hovered ? [0, -6, 0] : 0,
                opacity: hovered ? [0.4, 1, 0.4] : 0.3,
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${i === 2 ? 'bg-rose-400' : 'bg-rose-400/40'}`} />
            </motion.div>
          ))}
          {/* Trend line */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.line
              x1="10%" y1="50%" x2="90%" y2="50%"
              stroke="rgba(210,126,160,0.15)"
              strokeWidth="1"
              animate={{ opacity: hovered ? [0.2, 0.5, 0.2] : 0.1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400/60">
            Check-in Analysis
          </span>
        </div>
      </div>
    );
  }

  if (id === 'rag') {
    return (
      <div className="relative w-full h-full bg-ink-900/50 dot-bg flex items-center justify-center overflow-hidden">
        {/* Animated nodes */}
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${15 + i * 18}%` }}
              animate={{
                y: hovered ? [0, -8, 0] : 0,
                opacity: hovered ? [0.4, 1, 0.4] : 0.3,
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
            >
              <div className="w-2 h-2 rounded-full bg-rose-400" />
            </motion.div>
          ))}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={i}
                x1={`${15 + i * 18}%`} y1="50%"
                x2={`${15 + (i + 1) * 18}%`} y2="50%"
                stroke="rgba(210,126,160,0.15)"
                strokeWidth="1"
                animate={{ opacity: hovered ? [0.2, 0.6, 0.2] : 0.1 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </svg>
          {/* Label */}
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400/60">
              RAG Pipeline
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-ink-900/50 dot-bg flex items-center justify-center overflow-hidden">
      {/* Face scan visual */}
      <div className="relative">
        <motion.div
          animate={{ scale: hovered ? [1, 1.05, 1] : 1, opacity: hovered ? [0.3, 0.6, 0.3] : 0.2 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 rounded-2xl border-2 border-rose-400/30 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-xl border border-rose-400/20" />
        </motion.div>
        {/* Scan line */}
        <motion.div
          animate={{ y: hovered ? [-48, 48, -48] : 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
        />
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400/60">
          Face Recognition
        </span>
      </div>
    </div>
  );
}
