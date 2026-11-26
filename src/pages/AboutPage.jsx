import { ArrowRight, Layers3, MapPin, Shield, Shapes } from 'lucide-react';
import { Link } from '../router/Router';
import { companyContact } from '../data/constants';
import PageHero from '../components/layout/PageHero';

const offerings = [
  { icon: Layers3, title: 'Stone-coated steel', text: 'Four roof styles with textured color options, including Roman, New Bond, Shingle, and Tudor.' },
  { icon: Shield, title: 'Layered UPVC sheets', text: 'Spanish Wave and Trapezoidal profiles for different building types and roof designs.' },
  { icon: Shapes, title: 'Roof finishing pieces', text: 'Ridge and flashing accessories to help complete roof edges and junctions.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb]">
      <PageHero eyebrow="About OxyFlo · Hadhi Aqua Lines" title="Roofing made for Kerala homes and businesses" description="A local roofing range with architectural steel and UPVC profiles, color choices, and product guidance from our Palakkad team." />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">Our company</p>
            <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-[#0e323a] sm:text-4xl">A roofing range from Hadhi Aqua Lines.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">OxyFlo brings together roof profiles for residential, commercial, and industrial projects. The range includes stone-coated steel sheets in architectural styles and layered UPVC sheets in Wave and Trapezoidal profiles.</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">Our team is based in Palakkad, Kerala. We help customers compare profiles, finishes, and project requirements before choosing a system.</p>
            <Link href="/contact" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#0e323a] px-5 text-sm font-semibold text-white transition hover:bg-[#17444d]">Talk to our team <ArrowRight size={15} /></Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <img src="/oxyflo-roof-hero.jpg" alt="Terracotta and charcoal OxyFlo roofing installation" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-[#0e323a] shadow-sm"><MapPin size={14} className="text-[#0785ad]" />Palakkad, Kerala</div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">What we offer</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#0e323a] sm:text-3xl">A profile for the way you want to build.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {offerings.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-[#0785ad]"><Icon size={20} /></span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#0e323a]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10 sm:py-12">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">Visit or get in touch</p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-600"><MapPin size={16} className="mt-1 shrink-0 text-[#0785ad]" />{companyContact.address}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${companyContact.customerCareRaw}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-[#0e323a] hover:bg-slate-50">Call {companyContact.customerCare}</a>
            <Link href="/products" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#078eb7] px-4 text-sm font-semibold text-white hover:bg-[#087b9e]">Browse products <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
