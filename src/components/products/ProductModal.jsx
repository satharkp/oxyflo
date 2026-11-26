import { X, Check } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase text-[#0995c2]">
            {product.badge}
          </span>
          <span className="text-xs font-bold text-slate-600">{product.tag}</span>
        </div>

        <h3 className="font-heading text-2xl font-extrabold text-slate-900">{product.name}</h3>
        <p className="text-xs font-semibold text-[#0995c2] mt-1">{product.subtitle}</p>

        <div className="my-5 overflow-hidden rounded-2xl h-56 bg-slate-100 border border-slate-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed text-slate-700 mb-5 font-normal">{product.overview}</p>

        {/* Color Palette from Brochure */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Official Brochure Color Tones ({product.colors.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-1.5 shadow-xs"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-slate-300 shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-xs font-bold text-slate-800">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Specifications */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Full Technical Specifications
          </h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {product.specs.map(([k, v]) => (
              <div key={k} className="border-b border-slate-200 pb-2">
                <dt className="text-slate-500 font-medium text-[13px]">{k}</dt>
                <dd className="font-bold text-slate-900 text-xs mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {product.idealFor && (
          <div className="mb-6 rounded-xl border border-cyan-100 bg-cyan-50/50 p-4 text-xs">
            <strong className="text-[#0995c2] font-bold block mb-1">Recommended Applications:</strong>
            <span className="text-slate-700">{product.idealFor}</span>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-300 py-3 text-xs font-bold text-slate-800 hover:bg-slate-100 transition"
          >
            Close Spec Sheet
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 rounded-xl py-3 text-center text-xs font-bold text-white hover:brightness-110 shadow-sm transition"
            style={{ backgroundColor: '#0995c2' }}
          >
            Request Quotation
          </a>
        </div>
      </div>
    </div>
  );
}
