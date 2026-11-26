import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../../router/Router';

export default function ProductCard({ item }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(8,37,44,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-700/40 hover:shadow-[0_16px_36px_rgba(8,37,44,0.12)]">
      <Link href={`/products/${item.id}`} className="relative block aspect-[4/3] overflow-hidden bg-[#e8f0f2]">
        <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[13px] font-bold text-[#0e323a] shadow-sm backdrop-blur">{item.badge}</span>
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <p className="text-[13px] font-bold uppercase tracking-[0.11em] text-[#0785ad]">{item.tag}</p>
        <Link href={`/products/${item.id}`} className="mt-2 rounded-sm text-[#0e323a] hover:text-[#0785ad]">
          <h3 className="font-heading text-lg font-bold leading-snug sm:text-xl">{item.name}</h3>
        </Link>
        <p className={`mt-2 text-sm leading-5 text-slate-600 ${showMore ? '' : 'line-clamp-2'}`}>{item.overview}</p>

        <div className="mt-4 border-t border-slate-100 pt-3">
          <dl className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
            {item.specs.slice(0, showMore ? item.specs.length : 2).map(([key, val]) => (
              <div key={key} className="min-w-0">
                <dt className="text-slate-500">{key}</dt>
                <dd className={`mt-0.5 font-semibold text-[#243f46] ${showMore ? '' : 'line-clamp-2'}`}>{val}</dd>
              </div>
            ))}
          </dl>
          {item.colors?.length > 0 && (
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Available colors</span>
              <div className="flex items-center gap-1.5" aria-label={`${item.colors.length} color options`}>
                {item.colors.slice(0, 5).map((color) => <span key={color.name} title={color.name} className="h-4 w-4 rounded-full border border-white ring-1 ring-slate-300" style={{ backgroundColor: color.hex }} />)}
                {item.colors.length > 5 && <span className="text-[13px] font-semibold text-slate-500">+{item.colors.length - 5}</span>}
              </div>
            </div>
          )}
          {item.specs.length > 2 && (
            <button
              type="button"
              onClick={() => setShowMore((expanded) => !expanded)}
              aria-expanded={showMore}
              className="mt-3 min-h-9 text-xs font-bold text-[#0785ad] transition hover:text-[#0e323a]"
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>

        <div className="mt-auto flex gap-2 pt-6">
          <Link href={`/products/${item.id}`} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0e323a] px-3 text-sm font-semibold text-white transition hover:bg-[#17444d]">
            View details <ArrowUpRight size={15} />
          </Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-[#0e323a] transition hover:border-cyan-700 hover:bg-cyan-50">Quote</Link>
        </div>
      </div>
    </article>
  );
}
