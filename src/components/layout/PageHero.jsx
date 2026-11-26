export default function PageHero({ eyebrow, title, description, align = 'center' }) {
  const centered = align === 'center';

  return (
    <section className="relative isolate overflow-hidden bg-[#092830] py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(9,149,194,0.24),transparent_48%)]" />
      <div className={`mx-auto max-w-[1380px] px-5 sm:px-8 ${centered ? 'text-center' : 'text-left'}`}>
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/5 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.16em] text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />{eyebrow}
        </span>
        <h1 className={`mt-5 max-w-4xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${centered ? 'mx-auto' : ''}`}>
          {title}
        </h1>
        {description && (
          <p className={`mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
