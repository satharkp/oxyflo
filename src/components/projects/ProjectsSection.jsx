import { ArrowRight, MapPin } from 'lucide-react';
import { projects } from '../../data/projects';
import { Link } from '../../router/Router';

export default function ProjectsSection() {
  return (
    <section className="bg-[#f5f8f8] py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">Project gallery</p>
            <h2 className="mt-2 font-heading text-2xl font-bold leading-tight text-[#0e323a] sm:text-3xl">Roof profiles in real settings</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">A closer look at OxyFlo roof designs from the product brochure.</p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#0785ad] hover:text-[#0e323a] sm:self-auto">View project gallery <ArrowRight size={15} /></Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[13px] font-bold text-[#0e323a] shadow-sm">{project.badge}</span>
              </div>
              <div className="p-4">
                <p className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-500"><MapPin size={13} className="text-[#0785ad]" />{project.title.split('•').at(-1)?.trim() || 'Kerala'}</p>
                <h3 className="mt-1.5 font-heading text-base font-bold text-[#0e323a]">{project.title.split('•')[0].trim()}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{project.system}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
