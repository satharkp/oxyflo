import RoofEstimator from '../components/estimator/RoofEstimator';
import { Link } from '../router/Router';
import { ShieldCheck, Ruler, HelpCircle, Phone } from 'lucide-react';
import { companyContact } from '../data/constants';
import PageHero from '../components/layout/PageHero';

export default function EstimatorPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <PageHero eyebrow="Planning tool" title="Estimate your roofing needs" description="Enter a few project details to explore a preliminary profile recommendation and material estimate." />

      {/* Main Interactive Estimator */}
      <RoofEstimator />

      {/* Estimator FAQ & Direct Assistance */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[#f8fafb] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0995c2]">
                Need Architectural Estimation Assistance?
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-[#0e323a] mt-2">
                Send Your Blueprint or Roof Plan to Our Engineers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4b656e] font-normal leading-relaxed">
                If your project features complex hip roofs, dormers, or varying slopes, our technical desk in Palakkad will calculate exact sheet cuts and full 12-piece accessory requirements at zero charge.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${companyContact.customerCareRaw}`}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-xs font-bold text-[#0e323a] hover:bg-slate-50 transition flex items-center gap-2"
              >
                <Phone size={15} className="text-[#0995c2]" />
                <span>Call Care: {companyContact.customerCare}</span>
              </a>
              <Link
                href="/contact"
                className="rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 transition"
                style={{ backgroundColor: '#0995c2' }}
              >
                Submit Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

