import { ArrowRight, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { Link } from '../../router/Router';

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto grid max-w-[1380px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0785ad]">Customer testimonials</p>
          <h2 id="testimonials-heading" className="mt-2 font-heading text-3xl font-bold leading-tight text-[#0e323a] sm:text-4xl">
            Have an OxyFlo roof? Share your experience.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Choosing a roof is a big decision. First-hand feedback from homeowners and installers can help others choose with confidence.
          </p>
          <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0e323a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#17444d]">
            Tell us about your roof <ArrowRight size={16} />
          </Link>
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={17} className="text-[#0785ad]" />
            <span>Real experiences from OxyFlo customers</span>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-[#0e323a] sm:min-h-[360px] lg:col-span-7">
          <img src="/catalog/pdf1_img_44.jpg" alt="Stone-coated roofing on a completed home in Kerala" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06171b]/90 via-[#06171b]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <MessageSquareQuote size={26} className="mb-3 text-cyan-300" aria-hidden="true" />
            <p className="max-w-xl font-heading text-xl font-semibold leading-snug sm:text-2xl">Your story could help someone find the right roof for their home.</p>
            <p className="mt-2 text-sm text-white/75">Homeowners, builders and installers are welcome to get in touch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
