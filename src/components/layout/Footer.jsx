import { Instagram, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { companyContact } from '../../data/constants';
import { Link } from '../../router/Router';

const productLinks = [
  ['Roman Series', '/products/roman-series'],
  ['New Bond Series', '/products/bond-series'],
  ['Shingle Series', '/products/shingle-series'],
  ['Tudor Series', '/products/tudor-series'],
  ['UPVC profiles', '/products/upvc-spanish-wave'],
];

const pageLinks = [
  ['Technology', '/technology'], ['Projects', '/projects'], ['About OxyFlo', '/about'], ['Roof estimator', '/estimator'], ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-[#061a1f] text-white">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block rounded-md">
              <img src="/oxyflo-logo-white.png" alt="OxyFlo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Roofing systems by Hadhi Aqua Lines, based in Palakkad, Kerala.
            </p>
            <a href={companyContact.instagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
              <Instagram size={16} /> {companyContact.instagramHandle}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Roof profiles</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {productLinks.map(([label, href]) => <li key={href}><Link href={href} className="transition hover:text-cyan-200">{label}</Link></li>)}
              <li><Link href="/products/waterproof-accessories" className="transition hover:text-cyan-200">Roof accessories</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {pageLinks.map(([label, href]) => <li key={href}><Link href={href} className="transition hover:text-cyan-200">{label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Talk to our team</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p className="flex items-start gap-2.5"><MapPin size={16} className="mt-1 shrink-0 text-cyan-300" />{companyContact.address}</p>
              <a href={`tel:${companyContact.customerCareRaw}`} className="flex items-center gap-2.5 hover:text-white"><Phone size={16} className="text-cyan-300" />{companyContact.customerCare}</a>
              <a href={`mailto:${companyContact.email}`} className="flex min-w-0 items-center gap-2.5 break-all hover:text-white"><Mail size={16} className="shrink-0 text-cyan-300" />{companyContact.email}</a>
              <Link href="/contact" className="mt-1 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/15">Contact OxyFlo <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} OXYFLO® · Hadhi Aqua Lines</span>
          <span>Flow With Stronger Bonds</span>
        </div>
      </div>
    </footer>
  );
}
