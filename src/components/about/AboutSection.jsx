import { ArrowRight, Check, MapPin } from 'lucide-react';
import { Link } from '../../router/Router';
import { companyContact } from '../../data/constants';

const highlights = ['Stone-coated steel and UPVC systems', 'Profiles for different roof styles', 'Support from our Palakkad team'];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20" id="about">
      <div className="mx-auto grid max-w-[1380px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
          <img src="/oxyflo-roof-hero.jpg" alt="OxyFlo terracotta and charcoal roof installation" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <span className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-[#0e323a] shadow-sm">Hadhi Aqua Lines · Palakkad, Kerala</span>
        </div>
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">About OxyFlo</p>
          <h2 className="mt-2 max-w-xl font-heading text-3xl font-bold leading-tight text-[#0e323a] sm:text-4xl">Roofing that brings design and protection together.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">OxyFlo is the roofing range from Hadhi Aqua Lines. We offer stone-coated steel profiles and layered UPVC sheets for homes, commercial buildings, and industrial projects.</p>
          <ul className="mt-6 space-y-3">
            {highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3 text-sm text-[#29464d]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[#0785ad]"><Check size={13} /></span>{highlight}</li>)}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500"><MapPin size={15} className="mt-0.5 shrink-0 text-[#0785ad]" />{companyContact.address}</p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0e323a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17444d]">More about OxyFlo <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
