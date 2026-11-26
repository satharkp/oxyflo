import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="border-t border-slate-200 bg-[#f5f8f8] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-8">
          <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">Helpful answers</span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#0e323a] sm:text-3xl">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              >
                <span className="font-heading text-sm font-semibold leading-6 text-[#0e323a]">{faq.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-brand-cyan' : ''}`}
                  />
                </span>
              </button>
              {openFaq === i && (
                <div id={`faq-answer-${i}`} className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-6 text-slate-600 sm:px-5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
