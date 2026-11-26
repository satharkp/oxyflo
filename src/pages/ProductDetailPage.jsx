import { useState } from 'react';
import { useRouter, Link } from '../router/Router';
import { products } from '../data/products';
import { companyContact } from '../data/constants';
import {
  ArrowLeft,
  ShieldCheck,
  Check,
  CheckCircle2,
  Palette,
  Phone,
  MessageCircle,
  FileText,
  Ruler,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ProductDetailPage() {
  const { params } = useRouter();
  const productId = params.id;

  const product = products.find((p) => p.id === productId);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors && product.colors.length > 0 ? product.colors[0] : null
  );

  if (!product) {
    return (
      <div className="min-h-[60vh] bg-[#f8fafb]">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0785ad]">Product not found</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-[#0e323a]">Let’s find the right roof profile.</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">This product page may have moved. Browse the OxyFlo catalog to compare available profiles.</p>
          <Link href="/products" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0e323a] px-5 text-sm font-semibold text-white hover:bg-[#17444d]">Browse products</Link>
        </div>
      </div>
    );
  }

  // Other products for related section
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafb] py-6 sm:py-10">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* Breadcrumb & Back Link */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/products"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg pr-2 text-sm font-semibold text-[#0785ad] transition hover:text-[#0e323a]"
          >
            <ArrowLeft size={16} />
            <span>Back to All Roofing Profiles</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0995c2]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#0995c2]">Products</Link>
            <span>/</span>
            <span className="text-[#0e323a] font-bold">{product.name}</span>
          </div>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Visuals & Color Swatches */}
          <div className="space-y-5 lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 sm:max-h-[560px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
              <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2 sm:left-4 sm:top-4">
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md"
                  style={{ backgroundColor: '#0e323a' }}
                >
                  {product.badge}
                </span>
                <span className="rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-[#0e323a] shadow-sm border border-slate-200">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Official Brochure Colors Picker */}
            {product.colors && product.colors.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-heading text-sm font-extrabold text-[#0e323a] flex items-center gap-2">
                      <Palette size={16} className="text-[#0995c2]" />
                      <span>Official Brochure Color Tones ({product.colors.length})</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Selected Tone: <strong className="text-[#0e323a] font-bold">{selectedColor?.name || product.colors[0]?.name}</strong>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor?.name === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all ${
                          isSelected
                            ? 'border-[#0995c2] bg-cyan-50/70 ring-2 ring-[#0995c2] shadow-xs'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className="h-5 w-5 rounded-full border border-slate-300 shrink-0 shadow-xs"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-800 truncate">{c.name}</div>
                          <div className="text-[13px] font-mono text-slate-400">{c.hex}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 10-Year Warranty Box */}
            <div
              className="rounded-2xl border p-5 text-white shadow-sm flex items-start gap-4"
              style={{ backgroundColor: '#06171b', borderColor: '#0995c2' }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                style={{ backgroundColor: '#0995c2' }}
              >
                <ShieldCheck size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-extrabold text-cyan-300">
                  10-Year Factory Performance Warranty
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Certified by Hadhi Aqua Lines. Covers resistance to peeling, blistering, abnormal discoloration, and structural degradation when installed to official purlin guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Specifications & Actions */}
          <div className="space-y-5 lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0995c2]">
                Architectural Specification Sheet
              </span>
              <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-[#0e323a] sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-sm font-semibold text-[#0995c2] mt-1">{product.subtitle}</p>

              <div className="h-1 w-16 mt-4 mb-6 rounded-full" style={{ backgroundColor: '#0995c2' }} />

              <p className="mb-6 text-sm leading-7 text-slate-600">
                {product.overview}
              </p>

              {/* Full Specs Table */}
              <div className="mb-6 rounded-xl border border-slate-200 bg-[#f8fafb] p-4 sm:p-5">
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#0e323a] mb-4 flex items-center gap-2">
                  <Ruler size={14} className="text-[#0995c2]" />
                  <span>Comprehensive Engineering Specifications</span>
                </h3>

                <dl className="space-y-0 text-sm">
                  {product.specs.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-200 last:border-b-0 gap-1"
                    >
                      <dt className="text-slate-500 font-medium">{k}</dt>
                      <dd className="font-bold text-[#0e323a] sm:text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Ideal For callout */}
              {product.idealFor && (
                <div className="mb-8 rounded-2xl border border-cyan-100 bg-[#f4f9fa] p-5">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#0995c2] mb-1">
                    Recommended Applications
                  </h4>
                  <p className="text-xs text-[#0e323a] font-semibold leading-relaxed">
                    {product.idealFor}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:brightness-110"
                  style={{ backgroundColor: '#0995c2' }}
                >
                  <span>Request Quotation for {product.name}</span>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={companyContact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-3 text-xs font-bold transition shadow-xs"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href={`tel:${companyContact.customerCareRaw}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0e323a] py-3 text-xs font-bold transition"
                  >
                    <Phone size={15} className="text-[#0995c2]" />
                    <span>Call Care: {companyContact.customerCare}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Profiles Showcase */}
        <div className="mt-14 border-t border-slate-200 pt-12 sm:mt-16 sm:pt-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0995c2]">
                Explore Alternatives
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-[#0e323a] mt-1">
                Other Authentic OxyFlo Profiles
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-[#0995c2] hover:underline"
            >
              View Full Catalog →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition hover:shadow-lg hover:border-[#0995c2] flex flex-col"
              >
                <div className="h-44 w-full overflow-hidden rounded-xl bg-slate-100 mb-4">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[13px] font-bold uppercase text-[#0995c2]">{rel.tag}</span>
                <h4 className="font-heading text-sm font-extrabold text-[#0e323a] group-hover:text-[#0995c2] transition mt-1">
                  {rel.name}
                </h4>
                <p className="text-[13px] text-slate-500 line-clamp-2 mt-1">{rel.overview}</p>
                <span className="mt-auto pt-3 text-xs font-bold text-[#0995c2] inline-flex items-center gap-1">
                  <span>Explore Specs</span>
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

