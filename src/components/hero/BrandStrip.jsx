import { Layers3, Shield, Shapes } from 'lucide-react';

const systems = [
  { icon: Layers3, label: 'Stone-coated steel', detail: 'Roman · New Bond · Shingle · Tudor' },
  { icon: Shield, label: 'Layered UPVC sheets', detail: 'Spanish Wave · Trapezoidal' },
  { icon: Shapes, label: 'Roof accessories', detail: 'Ridge caps · flashings · finishing pieces' },
];

export default function BrandStrip() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1380px] divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {systems.map(({ icon: Icon, label, detail }) => (
          <div key={label} className="flex items-center gap-4 py-5 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6fa] text-[#0785ad]"><Icon size={20} /></span>
            <div>
              <h2 className="text-sm font-bold text-[#0e323a]">{label}</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
