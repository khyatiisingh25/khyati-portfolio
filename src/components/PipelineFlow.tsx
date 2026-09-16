import { motion } from 'framer-motion';
import {
  Mic, Search, FileText, Sparkles, MessageSquare,
  Camera, ScanFace, Cpu, ClipboardCheck, Server,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Mic, Search, FileText, Sparkles, MessageSquare,
  Camera, ScanFace, Cpu, ClipboardCheck, Server,
};

interface PipelineStep {
  label: string;
  icon: string;
  desc: string;
}

export default function PipelineFlow({
  steps,
  delay = 0,
  variant = 'horizontal',
}: {
  steps: PipelineStep[];
  delay?: number;
  variant?: 'horizontal' | 'vertical';
}) {
  if (variant === 'vertical') {
    return (
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => {
          const Icon = iconMap[step.icon] ?? Mic;
          return (
            <div key={step.label} className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + i * 0.12, duration: 0.4 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-rose-500/5 border border-rose-400/15 flex-shrink-0"
              >
                <motion.div
                  animate={{ boxShadow: ['0 0 0 0 rgba(210,126,160,0)', '0 0 0 6px rgba(210,126,160,0.08)', '0 0 0 0 rgba(210,126,160,0)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: delay + i * 0.12 }}
                  className="flex h-full w-full items-center justify-center rounded-xl"
                >
                  <Icon size={18} className="text-rose-400" />
                </motion.div>
              </motion.div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink-100">{step.label}</p>
                <p className="text-xs text-ink-400">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="absolute left-7 -bottom-2 w-px h-2 bg-rose-400/20" />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 md:gap-1 flex-wrap">
      {steps.map((step, i) => {
        const Icon = iconMap[step.icon] ?? Mic;
        return (
          <div key={step.label} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center gap-3"
            >
              <div className="relative flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-2xl bg-white/[0.02] border-hairline group-hover:border-rose-400/30 transition-colors duration-300">
                <motion.div
                  animate={{ boxShadow: ['0 0 0 0 rgba(210,126,160,0)', '0 0 0 5px rgba(210,126,160,0.08)', '0 0 0 0 rgba(210,126,160,0)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: delay + i * 0.12 }}
                  className="flex h-full w-full items-center justify-center rounded-2xl"
                >
                  <Icon size={20} className="text-rose-400" />
                </motion.div>
              </div>
              <div className="text-center max-w-[90px]">
                <p className="text-sm font-semibold text-ink-100">{step.label}</p>
                <p className="text-[11px] text-ink-400 mt-0.5 leading-tight">{step.desc}</p>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + i * 0.12 + 0.1, duration: 0.3 }}
                className="flex items-center flex-shrink-0"
              >
                <div className="h-px w-4 md:w-8 bg-gradient-to-r from-rose-400/30 to-rose-400/5" />
                <motion.div
                  animate={{ x: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="h-1 w-1 rounded-full bg-rose-400 -ml-0.5"
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
