import { useEffect, useState, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CursorState = 'default' | 'hover' | 'view' | 'text';

interface CursorContextValue {
  setState: (state: CursorState) => void;
  setCursorLabel: (label: string | null) => void;
}

let cursorContext: CursorContextValue = {
  setState: () => {},
  setCursorLabel: () => {},
};

export function setCursorState(state: CursorState) {
  cursorContext.setState(state);
}

export function setCursorLabel(label: string | null) {
  cursorContext.setCursorLabel(label);
}

export default function Cursor() {
  const [state, setState] = useState<CursorState>('default');
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    cursorContext = { setState, setCursorLabel: setLabel };
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('has-custom-cursor');

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.18,
        y: prev.y + (targetRef.current.y - prev.y) * 0.18,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  const sizes = {
    default: 8,
    hover: 40,
    view: 80,
    text: 2,
  };

  const size = sizes[state];

  return (
    <div
      className="fixed pointer-events-none z-[150] top-0 left-0"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <AnimatePresence>
        {visible && (
          <>
            {/* Outer ring */}
            <motion.div
              animate={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                borderColor:
                  state === 'view' ? 'rgba(210, 126, 160, 0.6)' : 'rgba(210, 126, 160, 0.3)',
                backgroundColor: state === 'view' ? 'rgba(210, 126, 160, 0.08)' : 'transparent',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute rounded-full border"
              style={{ borderStyle: state === 'view' ? 'solid' : 'solid' }}
            />
            {/* Inner dot */}
            {state !== 'view' && (
              <motion.div
                animate={{
                  width: state === 'text' ? 20 : 4,
                  height: state === 'text' ? 2 : 4,
                  marginLeft: state === 'text' ? -10 : -2,
                  marginTop: state === 'text' ? -1 : -2,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="absolute rounded-full bg-rose-400"
              />
            )}
            {/* Label inside view cursor */}
            {state === 'view' && label && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute text-[10px] font-mono uppercase tracking-wider text-rose-300"
                style={{ marginLeft: -size / 2, marginTop: -size / 2, width: size, height: size }}
              >
                <span className="flex items-center justify-center w-full h-full">{label}</span>
              </motion.span>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CursorHover({
  children,
  state = 'hover',
  label,
}: {
  children: ReactNode;
  state?: CursorState;
  label?: string;
}) {
  return (
    <div
      onMouseEnter={() => {
        setCursorState(state);
        if (label) setCursorLabel(label);
      }}
      onMouseLeave={() => {
        setCursorState('default');
        setCursorLabel(null);
      }}
    >
      {children}
    </div>
  );
}
