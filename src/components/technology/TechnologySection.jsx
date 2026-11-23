import LayerVisualizer from './LayerVisualizer';
import { ArrowRight } from 'lucide-react';
import { Link } from '../../router/Router';

export default function TechnologySection() {
  return (
    <section className="bg-[#f5f8f8] py-16 sm:py-20" id="technology">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">
            Inside the roof sheet
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0e323a] sm:text-3xl">
            See how each roofing system is built
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Explore the layers in OxyFlo stone-coated steel and UPVC sheets.
          </p>
        </div>

        {/* Interactive Layer Visualizer */}
        <LayerVisualizer />

        <div className="mt-8 flex justify-center">
          <Link href="/technology" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-[#0e323a] transition hover:border-cyan-700 hover:text-[#0785ad]">Explore materials & technology <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
