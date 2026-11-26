import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Link } from '../../router/Router';

const highlights = ['Stone-coated steel', '4-layer UPVC', 'Profiles for every roof'];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-[#08252c] text-white sm:min-h-[680px] lg:min-h-[720px]">
      <img
        src="/oxyflo-roof-hero.jpg"
        alt="A completed OxyFlo roof installation in terracotta and charcoal profiles"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a1f]/95 via-[#061a1f]/78 to-[#061a1f]/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061a1f]/55 via-transparent to-[#061a1f]/10" />

      <div className="mx-auto flex min-h-[560px] max-w-[1380px] items-center px-4 py-16 sm:min-h-[680px] sm:px-8 sm:py-20 lg:min-h-[720px]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            ROOFING SYSTEMS BY HADHI AQUA LINES
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            A better roof starts
            <span className="mt-2 block text-cyan-200">with the right profile.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Explore OxyFlo stone-coated steel and UPVC roofing, made for lasting protection and a finish that suits your home.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0995c2] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#087fa6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore roofing profiles <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/50 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to our team
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-xs font-medium text-white/85 sm:text-sm">
            {highlights.map((highlight) => (
              <li key={highlight} className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
                  <Check size={12} strokeWidth={3} />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold text-white/70 transition hover:text-white sm:inline-flex"
      >
        Explore OxyFlo <ChevronDown size={15} />
      </a>
    </section>
  );
}
