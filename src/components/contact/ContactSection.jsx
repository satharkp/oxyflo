import { useState } from 'react';
import { CheckCircle2, Headset, Send, Instagram, MessageCircle, MapPin, PhoneCall } from 'lucide-react';
import { companyContact } from '../../data/constants';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'Homeowner / Villa Owner',
    projectType: 'Stone-Coated: Roman Series',
    sampleKit: true,
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inquiry = [
      'Hello OxyFlo, I would like to discuss a roofing project.',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Location: ${formData.company || 'Not provided'}`,
      `Role: ${formData.role}`,
      `Interested profile: ${formData.projectType}`,
      `Sample swatches: ${formData.sampleKit ? 'Yes' : 'No'}`,
      `Project notes: ${formData.message || 'Not provided'}`
    ].join('\n');
    const link = `${companyContact.whatsappUrl.split('?')[0]}?text=${encodeURIComponent(inquiry)}`;
    setWhatsAppLink(link);
    window.open(link, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f5f8f8] py-16 text-[#0e323a] sm:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 md:px-8" id="samples">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Information & Sample Kit Details */}
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-800/10 bg-cyan-50 px-3.5 py-1 text-xs font-bold text-[#0e323a]">
              <Instagram size={14} className="text-[#0785ad]" />
              <span>Follow us: <a href={companyContact.instagram} target="_blank" rel="noopener noreferrer" className="text-[#0785ad] underline hover:text-[#0e323a]">@oxyflo.in</a></span>
            </div>

            <h2 className="mt-2 font-heading text-3xl font-bold leading-tight tracking-tight text-[#0e323a] sm:text-4xl">
              Request Technical Quotation & Material Samples
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Inspect the authentic OxyFlo multi-layer bond firsthand. We deliver complimentary evaluation swatches to certified architects, engineers, contractors, and homeowners across Kerala and beyond.
            </p>

            <div className="mt-7 space-y-4 text-sm leading-6 text-slate-600">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="font-semibold text-[#0e323a]">UPVC Spanish Wave & Trapezoidal:</strong> layered sheets for different roof shapes and uses.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="font-semibold text-[#0e323a]">Stone-coated steel:</strong> choose from Roman, New Bond, Shingle, and Tudor profiles.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="font-semibold text-[#0e323a]">Roof accessories:</strong> ridge caps and flashings to complete the roof.</span>
              </div>
            </div>

            {/* Direct WhatsApp & Hotline Connect */}
            <div
              className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-start gap-3">
                <Headset className="text-cyan-300 shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-xs font-semibold text-slate-500">Customer care</div>
                  <a href={`tel:${companyContact.customerCareRaw}`} className="mt-1 block text-lg font-bold text-[#0e323a] transition hover:text-[#0785ad]">
                    {companyContact.customerCare}
                  </a>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                    <PhoneCall size={12} className="text-[#0785ad]" />
                    <span>Technical desk: <a href={`tel:${companyContact.phoneRaw}`} className="font-semibold text-[#0e323a] underline">{companyContact.phone}</a></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                <MapPin className="shrink-0 text-[#0785ad]" size={20} />
                <div className="text-xs leading-5 text-slate-600">
                  {companyContact.address}
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={companyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  <MessageCircle size={16} />
                  <span>Chat with Technical Team on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-[0_8px_30px_rgba(8,37,44,0.07)] sm:p-8 lg:col-span-7">
            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#0e323a]">
                  Your inquiry is ready
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b656e] max-w-md mx-auto">
                  Thanks, <strong className="text-[#0e323a]">{formData.name}</strong>. WhatsApp should open with your project details. Review the message and press Send to share it with OxyFlo.
                </p>
                <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-700 px-5 text-sm font-semibold text-white hover:bg-emerald-800">
                  Open WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="ml-2 mt-5 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[#0e323a] transition hover:bg-slate-50"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="border-b border-[#d4e4e9] pb-4 mb-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#0e323a]">Project & Sample Specification Request</h3>
                  <p className="text-sm text-slate-500">Fill in your project details. We’ll prepare a WhatsApp message for you to review and send.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold text-[#0e323a]">Full name *</label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Suresh Kumar"
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-[#0e323a]">Email address *</label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="suresh@example.com"
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold text-[#0e323a]">Phone / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-location" className="mb-1 block text-sm font-semibold text-[#0e323a]">Location / district</label>
                    <input
                      id="contact-location"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Palakkad, Kerala"
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-role" className="mb-1 block text-sm font-semibold text-[#0e323a]">Your role</label>
                    <select
                      id="contact-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                    >
                      <option>Homeowner / Villa Owner</option>
                      <option>Architect / Designer</option>
                      <option>General Contractor / Builder</option>
                      <option>Roofing Fabricator / Applicator</option>
                      <option>Commercial / Industrial Developer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-profile" className="mb-1 block text-sm font-semibold text-[#0e323a]">Interested profile</label>
                    <select
                      id="contact-profile"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                    >
                      <option>Stone-Coated: Roman Series</option>
                      <option>Stone-Coated: New Bond Series</option>
                      <option>Stone-Coated: New Shingle Series</option>
                      <option>Stone-Coated: Tudor Series</option>
                      <option>UPVC Spanish Wave Profile (28mm)</option>
                      <option>UPVC Trapezoidal Heavy-Duty Sheet (25mm)</option>
                      <option>12-Piece Waterproof Accessories</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-notes" className="mb-1 block text-sm font-semibold text-[#0e323a]">Project notes / estimated roof area</label>
                  <textarea
                    id="contact-notes"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include approximate square footage, roof pitch, delivery site in Kerala, or color preference..."
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0995c2] focus:outline-none focus:ring-1 focus:ring-[#0995c2] bg-white"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="sampleKitCheck"
                    checked={formData.sampleKit}
                    onChange={(e) => setFormData({ ...formData, sampleKit: e.target.checked })}
                    className="rounded border-slate-300 accent-[#0995c2] h-4 w-4"
                  />
                  <label htmlFor="sampleKitCheck" className="text-xs font-semibold text-[#0e323a] cursor-pointer">
                    Include Complimentary Material Sample Swatches with this inquiry
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#087b9e]"
                  style={{ backgroundColor: '#078eb7' }}
                >
                  <Send size={15} />
                  <span>Continue to WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
