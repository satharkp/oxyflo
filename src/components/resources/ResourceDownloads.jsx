import { FileText, Download } from 'lucide-react';
import { resourceDownloads } from '../../data/projects';
import { Link } from '../../router/Router';

export default function ResourceDownloads() {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200" id="downloads">
      <div className="mx-auto max-w-[1440px] px-4 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0995c2]">
              Architect & Engineer Resource Portal
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0e323a] md:text-4xl">
              Official Master Catalogues & Warranty Documentation
            </h2>
            <p className="mt-2 text-xs text-[#5a747d] font-normal">
              Direct access to OxyFlo brochure specifications, dimension guides for the 12-piece accessory system, and Hadhi Aqua Lines warranty guidelines.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resourceDownloads.map((doc) => (
            <div
              key={doc.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#0995c2] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors shadow-xs"
                    style={{ backgroundColor: '#0e323a' }}
                  >
                    <FileText size={20} className="text-cyan-300" />
                  </span>
                  <span className="text-[13px] font-bold text-[#0995c2] font-mono">{doc.format}</span>
                </div>
                <h4 className="font-heading text-sm font-bold text-slate-900 group-hover:text-[#0995c2] transition">
                  {doc.title}
                </h4>
                <p className="mt-2 text-xs text-slate-600 font-normal leading-relaxed">{doc.pages}</p>
              </div>
              <Link href="/contact" className="mt-6 inline-flex min-h-10 items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-[#0e323a] transition hover:text-[#0785ad]">
                <Download size={15} className="text-[#0995c2]" />
                <span>Request this document</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
