import { useState, useMemo } from 'react';
import { products, productCategories } from '../../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProducts = useMemo(() => {
    return products.filter((p) => activeFilter === 'all' || p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-white py-16 sm:py-20" id="products">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        {/* Header with filters */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">
              Roofing range
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0e323a] sm:text-3xl">
              Find your OxyFlo roof profile
            </h2>
            <div className="h-1 w-16 mt-3 rounded-full" style={{ backgroundColor: '#0995c2' }} />
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Compare styles, materials, colors, and key details across the roofing range.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 lg:max-w-[560px] lg:justify-end">
            {productCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={activeFilter === tab.id}
                className={`min-h-10 rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'text-white shadow-md'
                    : 'bg-[#f4f9fa] text-[#0e323a] hover:bg-[#e8f5f8] border border-[#d4e4e9]'
                }`}
                style={
                  activeFilter === tab.id
                    ? { backgroundColor: '#0e323a' }
                    : {}
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Dedicated Catalog Page Link */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 transition"
            style={{ backgroundColor: '#0e323a' }}
          >
            <span>Explore Complete Architectural Catalog</span>
            <span>→</span>
          </a>
        </div>
      </div>

    </section>
  );
}
