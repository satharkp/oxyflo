import ContactSection from '../components/contact/ContactSection';
import FaqSection from '../components/faq/FaqSection';
import PageHero from '../components/layout/PageHero';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb]">
      <PageHero eyebrow="Talk with our team" title="Let’s plan your roof" description="Ask about product profiles, samples, project requirements, or a quotation from our Palakkad team." />
      <ContactSection />
      <FaqSection />
    </div>
  );
}
