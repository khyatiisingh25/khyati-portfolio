import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';
import { SectionLabel } from './About';
import { profile } from '@/data/portfolio';
import { setCursorState } from './Cursor';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, display: profile.email },
  { label: 'GitHub', value: profile.github, href: profile.github, icon: Github, display: 'github.com/khyatiisingh25' },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin, icon: Linkedin, display: 'linkedin.com/in/khyati-singh-9a6629330' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone, display: profile.phone },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="06" label="Contact" />

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-display font-bold text-gradient"
        >
          Let's connect.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-ink-300 max-w-md"
        >
          Open to opportunities, collaborations, and conversations about software and AI.
        </motion.p>

        {/* Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative"
              >
                <a
                  href={link.href}
                  target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                  className="flex items-center gap-4 p-5 rounded-2xl glass hover:border-rose-400/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.02] border-hairline group-hover:border-rose-400/30 transition-colors duration-300">
                    <Icon size={17} className="text-rose-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-400">
                      {link.label}
                    </span>
                    <p className="text-sm text-ink-100 truncate mt-0.5">{link.display}</p>
                  </div>
                  <ArrowUpRight size={15} className="text-ink-400 group-hover:text-rose-300 transition-colors flex-shrink-0" />
                </a>
                <button
                  onClick={() => copy(link.value, link.label)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:text-rose-300 hover:bg-white/5 transition-all"
                  aria-label={`Copy ${link.label}`}
                >
                  {copied === link.label ? <Check size={14} className="text-rose-400" /> : <Copy size={14} />}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Primary CTA */}
        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setCursorState('hover')}
          onMouseLeave={() => setCursorState('default')}
          className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-rose-400 text-ink-950 font-semibold text-sm hover:bg-rose-300 transition-colors duration-300"
        >
          <Mail size={18} />
          Send an Email
        </motion.a>
      </div>
    </section>
  );
}
