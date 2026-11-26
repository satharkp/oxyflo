import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { companyContact } from '../../data/constants';
import { Link } from '../../router/Router';

export default function MobileContact() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-5 right-4 z-50 sm:hidden" aria-label="Quick contact">
      <div
        id="mobile-contact-panel"
        aria-hidden={!open}
        inert={!open}
        className={`absolute bottom-[calc(100%+0.75rem)] right-0 w-[min(19rem,calc(100vw-2rem))] origin-bottom-right rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(8,37,44,0.22)] transition duration-200 ${open ? 'scale-100 opacity-100' : 'pointer-events-none translate-y-2 scale-95 opacity-0'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-heading text-lg font-bold text-[#0e323a]">Talk to OxyFlo</h2>
            <p className="mt-1 text-sm leading-5 text-slate-600">Choose how you’d like to get in touch.</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close contact options" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="mt-4 grid gap-2">
          <a href={companyContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#128c7e] px-4 text-sm font-bold text-white hover:bg-[#0f786c]">
            <MessageCircle size={19} /> Message on WhatsApp
          </a>
          <a href={`tel:${companyContact.customerCareRaw}`} className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-[#0e323a] hover:bg-slate-50">
            <Phone size={18} className="text-[#0785ad]" /> Call {companyContact.customerCare}
          </a>
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold text-[#0785ad] hover:bg-cyan-50">
            Contact page
          </Link>
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-contact-panel"
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0e323a] px-4 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-[#17444d] focus-visible:outline-offset-4"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        {open ? 'Close' : 'Contact'}
      </button>
    </aside>
  );
}
