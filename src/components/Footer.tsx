import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-400 to-rose-600 text-ink-950 font-bold text-xs">
              K
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-100">{profile.name}</p>
              <p className="text-[10px] font-mono text-ink-400">{profile.role}</p>
            </div>
          </div>

          {/* Coordinates */}
          <div className="flex items-center gap-6 text-[10px] font-mono text-ink-400">
            <span>N26.85° E80.95°</span>
            <span className="hidden md:inline">·</span>
            <span>{profile.location}</span>
          </div>

          {/* Built with */}
          <p className="text-[10px] font-mono text-ink-400">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-[10px] font-mono text-ink-500">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-[10px] font-mono text-ink-500">
            v2.0
          </p>
        </div>
      </div>
    </footer>
  );
}
