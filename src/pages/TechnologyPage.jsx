import LayerVisualizer from '../components/technology/LayerVisualizer';
import ComparisonTable from '../components/technology/ComparisonTable';
import { Link } from '../router/Router';
import { ShieldCheck, Layers, Droplets, ThermometerSun, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '../components/layout/PageHero';

export default function TechnologyPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <PageHero eyebrow="Materials & construction" title="How OxyFlo roofing is made" description="Explore the build of stone-coated steel sheets and layered UPVC profiles, plus guidance for choosing a system." />

      {/* Interactive Layer Visualizer */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0995c2]">
              Cross-Section Architecture
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0e323a]">
              Interactive Multi-Layer Inspection
            </h2>
            <div className="h-1 w-16 mx-auto mt-3 rounded-full" style={{ backgroundColor: '#0995c2' }} />
            <p className="mt-3 text-sm text-[#4b656e] font-normal">
              Click through the individual layers to inspect their chemical formulation, micron thickness, and engineering role.
            </p>
          </div>

          <LayerVisualizer />
        </div>
      </section>

      {/* Coating Systems: Auxylite vs AuxyShield */}
      <section className="py-16 md:py-20 bg-[#f4f9fa] border-y border-slate-200">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0995c2]">
              Surface Protection Technology
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0e323a]">
              Auxylite & AuxyShield Formulations
            </h2>
            <div className="h-1 w-16 mx-auto mt-3 rounded-full" style={{ backgroundColor: '#0995c2' }} />
            <p className="mt-3 text-sm text-[#4b656e] font-normal">
              Compare the coating options and ask our team which one fits your project and location.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Auxylite */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase text-[#0995c2]">
                  Essential Protection
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0e323a] mt-3">
                  Auxylite Coating System
                </h3>
                <p className="text-xs font-semibold text-[#0995c2] mt-0.5">“Smart. Strong. Secure.”</p>
                <div className="h-0.5 w-12 bg-slate-200 my-4" />
                <p className="text-xs leading-relaxed text-[#4b656e] font-normal mb-6">
                  Engineered with an advanced polyurethane protective coating combined with high-grade waterproof barrier sealants. Provides a clean, practical, and highly durable architectural finish for inland residences, light commercial buildings, and standard residential roofs.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0995c2] shrink-0" />
                    <span>Polyurethane high-elasticity barrier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0995c2] shrink-0" />
                    <span>UV-resistant color stabilization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0995c2] shrink-0" />
                    <span>Cost-effective architectural performance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  href="/products"
                  className="text-xs font-bold text-[#0995c2] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Auxylite Profiles</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* AuxyShield */}
            <div
              className="rounded-3xl border p-8 text-white shadow-xl flex flex-col justify-between"
              style={{ backgroundColor: '#06171b', borderColor: '#0995c2' }}
            >
              <div>
                <span className="rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3 py-1 text-xs font-bold uppercase text-cyan-300">
                  Enhanced Armor
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white mt-3">
                  AuxyShield Coating System
                </h3>
                <p className="text-xs font-semibold text-cyan-300 mt-0.5">“Build with Strength”</p>
                <div className="h-0.5 w-12 bg-white/20 my-4" />
                <p className="text-xs leading-relaxed text-slate-300 font-normal mb-6">
                  Features high-grade Polyvinylidene Fluoride (PVDF) coating fused over the Galvalume alloy core. Formulated specifically to survive extreme weather, coastal salt-mist, industrial acid rain, and heavy tropical UV radiation without micro-fissuring or color degradation.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-300 shrink-0" />
                    <span>Fluoropolymer PVDF heavy armor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-300 shrink-0" />
                    <span>Complete immunity to coastal marine salt fog</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-300 shrink-0" />
                    <span>High thermal reflection & zero maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/products"
                  className="text-xs font-bold text-cyan-300 hover:text-white transition inline-flex items-center gap-1"
                >
                  <span>Explore AuxyShield Profiles</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Material Comparison Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* Official Purlin Spacing Guide */}
      <section className="py-16 md:py-20 bg-[#f8fafb] border-t border-slate-200">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0995c2]">
                  Structural Guidelines
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0e323a] mt-1">
                  Manufacturer Purlin & Batten Spacing Specifications
                </h3>
              </div>
              <div className="rounded-xl bg-cyan-50 border border-cyan-100 px-4 py-2 text-xs font-bold text-[#0995c2]">
                10-Year Warranty Compliance
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <span className="text-[13px] font-bold uppercase text-[#0995c2]">UPVC Wave Profile</span>
                <h4 className="font-heading text-base font-extrabold text-[#0e323a] mt-1">
                  UPVC Spanish Wave (28mm)
                </h4>
                <div className="font-heading text-3xl font-extrabold text-[#0995c2] my-3">
                  66 cm
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Strict purlin spacing specified in the official UPVC catalogue for optimal wave load bearing and zero sagging.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <span className="text-[13px] font-bold uppercase text-[#0995c2]">UPVC Deep Rib</span>
                <h4 className="font-heading text-base font-extrabold text-[#0e323a] mt-1">
                  UPVC Trapezoidal (25mm)
                </h4>
                <div className="font-heading text-3xl font-extrabold text-[#0995c2] my-3">
                  60 – 70 cm
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Engineered purlin grid spacing for continuous spans, industrial workshops, and custom site-cut lengths.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <span className="text-[13px] font-bold uppercase text-[#0995c2]">Stone-Coated Steel</span>
                <h4 className="font-heading text-base font-extrabold text-[#0e323a] mt-1">
                  Roman, Bond, Shingle, Tudor
                </h4>
                <div className="font-heading text-3xl font-extrabold text-[#0995c2] my-3">
                  37 cm
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Standard 370 mm engineered batten spacing for interlocking horizontal clasp fasteners against 180+ mph hurricane winds.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-normal">
                Need customized architectural load calculations or truss layout advice?
              </span>
              <Link
                href="/estimator"
                className="rounded-xl px-5 py-3 text-xs font-bold text-white shadow-sm hover:brightness-110 transition shrink-0"
                style={{ backgroundColor: '#0995c2' }}
              >
                Launch Parametric Estimator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

