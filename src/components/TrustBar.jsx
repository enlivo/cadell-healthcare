import { BadgeCheck, Handshake, PackageCheck, Truck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Reliable supply' },
  { icon: BadgeCheck, label: 'Quality-led sourcing' },
  { icon: PackageCheck, label: 'Broad portfolio' },
  { icon: Handshake, label: 'Ethical partnerships' },
];

export default function TrustBar() {
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-950/8">
      <div className="group/trust overflow-hidden">
        <div className="flex w-max gap-3 motion-safe:animate-[trust-marquee_26s_linear_infinite] group-hover/trust:[animation-play-state:paused]">
        {marqueeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex min-w-[240px] items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 md:min-w-[280px]"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[#1E5AA8] shadow-sm">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold text-[#0B2A4A]">{item.label}</span>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
