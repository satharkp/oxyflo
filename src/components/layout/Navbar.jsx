import { useState } from 'react';
import { ArrowRight, Calculator, Menu, Phone, X } from 'lucide-react';
import { navLinks, companyContact } from '../../data/constants';
import { Link, useRouter } from '../../router/Router';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { path } = useRouter();

  const closeMenu = () => setMobileOpen(false);
  const linkClass = (href) => {
    const active = href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`);
    return `rounded-lg px-2.5 py-2 text-[13px] font-semibold transition ${active ? 'bg-cyan-50 text-[#0785ad]' : 'text-[#29464d] hover:bg-slate-50 hover:text-[#0785ad]'}`;
  };

  return (
    <>
      <div className="hidden bg-[#08252c] text-slate-200 sm:block">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-2 text-[13px] sm:px-8">
          <span>Roofing systems by Hadhi Aqua Lines · Palakkad, Kerala</span>
          <a href={`tel:${companyContact.customerCareRaw}`} className="inline-flex items-center gap-2 font-semibold text-white hover:text-cyan-200">
            <Phone size={13} className="text-cyan-300" /> {companyContact.customerCare}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 shadow-[0_3px_18px_rgba(8,37,44,0.05)] backdrop-blur-lg">
        <div className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between gap-4 px-4 sm:px-8">
          <Link href="/" onClick={closeMenu} className="shrink-0 rounded-md">
            <img src="/oxyflo-logo.png" alt="OxyFlo — Flow With Stronger Bonds" className="h-10 w-auto object-contain sm:h-11" />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)} aria-current={path === item.href ? 'page' : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/estimator" className="hidden items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#29464d] transition hover:bg-slate-50 md:inline-flex">
              <Calculator size={16} className="text-[#0785ad]" /> Estimator
            </Link>
            <Link href="/contact" onClick={closeMenu} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-[#078eb7] px-2.5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#087b9e] sm:gap-2 sm:px-5">
              <span className="sm:hidden">Quote</span><span className="hidden sm:inline">Get a quote</span> <ArrowRight size={15} />
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl border border-slate-200 p-2.5 text-[#0e323a] transition hover:bg-slate-50 xl:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-8 xl:hidden">
            <div className="mx-auto grid max-w-[1380px] gap-1 sm:grid-cols-2">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu} className={linkClass(item.href)} aria-current={path === item.href ? 'page' : undefined}>
                  {item.label}
                </Link>
              ))}
              <Link href="/estimator" onClick={closeMenu} className="mt-2 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-3 text-sm font-semibold text-[#29464d] sm:col-span-2">
                <Calculator size={16} className="text-[#0785ad]" /> Roof estimator
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
