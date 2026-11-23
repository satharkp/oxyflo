import Hero from '../components/hero/Hero';
import BrandStrip from '../components/hero/BrandStrip';
import ProductCatalog from '../components/products/ProductCatalog';
import TechnologySection from '../components/technology/TechnologySection';
import ProjectsSection from '../components/projects/ProjectsSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import AboutSection from '../components/about/AboutSection';
import FaqSection from '../components/faq/FaqSection';
import ContactSection from '../components/contact/ContactSection';
import { Link } from '../router/Router';
import { ArrowRight, Calculator } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrandStrip />

      {/* Featured Products Showcase Section */}
      <ProductCatalog />

      {/* Technology & Co-Extrusion Engineering */}
      <TechnologySection />

      {/* A compact entry point keeps the estimator available without repeating the full tool on the home page. */}
      <section className="bg-[#f4f9fa] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-6 px-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0995c2] shadow-sm ring-1 ring-slate-200">
              <Calculator size={22} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0995c2]">Planning a new roof?</p>
              <h2 className="mt-1 font-heading text-xl font-bold text-[#0e323a] sm:text-2xl">Get a starting point for your project.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4b656e]">Share your roof area and building type to see a preliminary profile recommendation.</p>
            </div>
          </div>
          <Link href="/estimator" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-[#0e323a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#17444d] md:self-center">
            Open roof estimator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Real Projects Showcase */}
      <ProjectsSection />

      {/* Company Heritage & 10-Year Warranty */}
      <AboutSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Contact & Free Sample Box */}
      <ContactSection />
    </div>
  );
}

