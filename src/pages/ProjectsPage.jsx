import ResourceDownloads from '../components/resources/ResourceDownloads';
import { Link } from '../router/Router';
import { MapPin, ShieldCheck, Download, Sparkles } from 'lucide-react';
import PageHero from '../components/layout/PageHero';

export default function ProjectsPage() {
  const galleryPhotos = [
    { src: '/catalog/pdf1_img_38.jpg', title: 'Palakkad Contemporary Villa', profile: 'Roman Series (Blend Red)' },
    { src: '/catalog/pdf1_img_39.jpg', title: 'Luxury Sloping Roof Estate', profile: 'Roman Series (Roman Red)' },
    { src: '/catalog/pdf1_img_40.jpg', title: 'Malappuram Modern Home', profile: 'New Bond Series (Bond Grey)' },
    { src: '/catalog/pdf1_img_41.jpg', title: 'Two-Story Kerala Residence', profile: 'New Bond Series (Bond Green)' },
    { src: '/catalog/pdf1_img_42.jpg', title: 'Kozhikode Coastal Bungalow', profile: 'New Shingle Series (Charcoal Blend)' },
    { src: '/catalog/pdf1_img_43.jpg', title: 'Multi-Pitch Contemporary Villa', profile: 'New Shingle Series (Ruby Red)' },
    { src: '/catalog/pdf1_img_44.jpg', title: 'Wayanad Hillside Estate', profile: 'Tudor Series (Blue Rock)' },
    { src: '/catalog/pdf1_img_45.jpg', title: 'Executive Bungalow Roof', profile: 'Stone-Coated Galvalume Core' },
    { src: '/catalog/pdf1_img_46.jpg', title: 'Traditional Kerala Sloping Elevation', profile: 'Auxylite / AuxyShield' }
  ];

  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <PageHero eyebrow="Projects across Kerala" title="Roofing ideas, seen in place" description="Browse completed homes and buildings featuring OxyFlo roof profiles and finishes." />

      {/* Complete Project Photo Gallery */}
      <section className="py-16 md:py-20 bg-[#f4f9fa] border-t border-slate-200">
        <div className="mx-auto max-w-[1380px] px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0995c2]">
              Visual Catalog Documentation
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0e323a]">
              Kerala Architectural Installation Gallery
            </h2>
            <div className="h-1 w-16 mx-auto mt-3 rounded-full" style={{ backgroundColor: '#0995c2' }} />
            <p className="mt-3 text-sm text-[#4b656e] font-normal">
              Direct high-resolution captures from our brochure documentation across Kerala districts.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#06171b]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[13px] font-bold uppercase tracking-wider text-cyan-300">
                    {photo.profile}
                  </span>
                  <h4 className="font-heading text-base font-extrabold text-white mt-0.5">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Master Brochures & Downloads */}
      <ResourceDownloads />
    </div>
  );
}

