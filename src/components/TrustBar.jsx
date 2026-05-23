const items = [
  'WHO-GMP Certified',
  'Ethical Manufacturing',
  'Quality Healthcare',
  'Trusted Formulations',
  'Patient-Centric Care',
];

export default function TrustBar() {
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="h-12 w-full overflow-hidden border-y border-white/5 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
      <div className="group/trust flex h-full items-center overflow-hidden">
        <div className="flex w-max items-center motion-safe:animate-[trust-marquee_34s_linear_infinite] group-hover/trust:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/75 sm:px-7">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-cyan-200/45" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
