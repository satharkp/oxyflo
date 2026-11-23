import { useState, useMemo } from 'react';
import { products, productCategories } from '../data/products';
import { Link } from '../router/Router';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import ProductCard from '../components/products/ProductCard';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProducts = useMemo(() => {
    return products.filter((p) => activeFilter === 'all' || p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <PageHero eyebrow="OxyFlo product range" title="Roofing profiles for homes and industry" description="Compare stone-coated steel, four-layer UPVC sheets, and matching roof accessories." />

      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-[1380px] flex-wrap items-center gap-2 px-4 sm:px-8">
          <span className="mr-2 text-xs font-semibold text-slate-500">Browse by type</span>
          {productCategories.map((tab) => (
            <button key={tab.id} type="button" onClick={() => setActiveFilter(tab.id)} aria-pressed={activeFilter === tab.id}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${activeFilter === tab.id ? 'bg-[#0e323a] text-white' : 'border border-slate-200 bg-white text-slate-700 hover:border-cyan-600 hover:text-[#0785ad]'}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((item) => <ProductCard item={item} key={item.id} />)}
          </div>

          {/* 10-Year Warranty & Quality Banner */}
          <div
            className="mt-16 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ backgroundColor: '#06171b' }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-400/30 mb-3">
                <ShieldCheck size={14} /> Official 10-Year Warranty
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Looking for Custom Project Cuts or Purlin Guidelines?
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl font-normal leading-relaxed">
                Hadhi Aqua Lines provides custom length cuts on UPVC Trapezoidal sheets to eliminate on-site joint overlaps, along with CAD specification details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/estimator"
                className="rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 transition"
                style={{ backgroundColor: '#0995c2' }}
              >
                Launch Roof Estimator
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition"
              >
                Order Free Sample Box
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

