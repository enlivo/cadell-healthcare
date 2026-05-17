import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value, suffix = '', label, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, value]);

  return (
    <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lg shadow-blue-950/5 backdrop-blur">
      <strong className="block text-2xl font-semibold text-[#0B2A4A] md:text-3xl">
        {count}
        {suffix}
      </strong>
      <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
    </div>
  );
}
