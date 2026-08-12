const { projects, journey, skills } = window.portfolioData;

const GH = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Sun = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const Moon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

function ThemeControls({ theme, setTheme, accent, setAccent, compact }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'flex-wrap' : ''}`}>
      <div className="flex gap-1.5 items-center">
        {window.portfolioData.accentPresets.map((a) => {
          const accentValue = theme === 'dark' ? a.dark : a.light;
          const isSelected = accent && accent.name === a.name;
          return (
            <button
              key={a.name}
              title={a.name}
              onClick={() => setAccent(a)}
              className="swatch w-4 h-4 rounded-full border-0 cursor-pointer"
              style={{
                backgroundColor: accentValue,
                boxShadow: isSelected ? `0 0 0 2px var(--color-bg), 0 0 0 3.5px ${accentValue}` : 'none',
              }}
              aria-label={`Set accent color to ${a.name}`}
            />
          );
        })}
      </div>
      <button
        onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        className="w-8 h-8 flex items-center justify-center border border-soft text-mid hover:border-accent hover:text-accent transition-colors bg-transparent cursor-pointer"
        aria-label="Toggle light/dark theme"
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}

function MediaSlide({ item }) {
  if (!item) return null;

  return (
    <div className="relative w-full h-full">
      {item.type === 'video' ? (
        <video src={item.src} controls muted loop playsInline className="w-full h-full object-cover" />
      ) : (
        <img src={item.src} alt="" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 pointer-events-none bg-img-overlay" />
    </div>
  );
}

function MediaCarousel({ media }) {
  const [idx, setIdx] = React.useState(0);
  const total = media.length;
  const dragStart = React.useRef(null);

  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (dx < -40 && idx < total - 1) setIdx((i) => i + 1);
    if (dx > 40 && idx > 0) setIdx((i) => i - 1);
    dragStart.current = null;
  };

  if (total === 0) {
    return (
      <div className="w-full aspect-video bg-soft flex items-center justify-center">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">[ Screenshots coming soon ]</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-soft overflow-hidden select-none">
      <div
        className="media-track h-full drag-area"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {media.map((item, i) => (
          <div key={i} className="media-slide h-full overflow-hidden">
            <MediaSlide item={item} />
          </div>
        ))}
      </div>
      {idx > 0 && (
        <button onClick={() => setIdx((i) => i - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-paper/80 hover:bg-paper text-ink transition-colors border-0 cursor-pointer">
          <ChevronLeft />
        </button>
      )}
      {idx < total - 1 && (
        <button onClick={() => setIdx((i) => i + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-paper/80 hover:bg-paper text-ink transition-colors border-0 cursor-pointer">
          <ChevronRight />
        </button>
      )}
      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {media.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full border-0 cursor-pointer transition-colors ${i === idx ? 'bg-accent' : 'bg-ink/30'}`} />
          ))}
        </div>
      )}
      {total > 1 && (
        <p className="absolute top-3 right-3 font-mono text-xs text-ink/50 bg-paper/70 px-2 py-0.5">
          {idx + 1} / {total}
        </p>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-enter relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-paper">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-sm bg-paper/90 hover:bg-ink hover:text-paper transition-colors border-0 cursor-pointer">
          ✕
        </button>
        <MediaCarousel media={project.media || []} />
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`font-mono text-xs uppercase tracking-widest px-2 py-0.5 ${project.type === 'work' ? 'bg-accent text-paper' : 'border border-soft text-muted'}`}>
              {project.type === 'work' ? 'Work Experience' : 'Academic Project'}
            </span>
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-xs uppercase tracking-wide border border-soft text-muted px-2 py-0.5">{t}</span>
            ))}
          </div>
          <h3 className="font-display text-3xl tracking-tight mb-3">{project.title}</h3>
          <p className="text-base leading-relaxed text-mid mb-5">{project.desc}</p>

          {project.stats && (
            <div className="flex flex-wrap gap-px bg-soft border border-soft mb-6">
              {project.stats.map((s, i) => (
                <div key={i} className="bg-paper px-4 py-3 flex-1 min-w-[110px]">
                  <p className="font-display text-2xl tracking-tight leading-none mb-1">{s.value}</p>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-2 mb-6 list-none p-0">
            {project.features.map((f, i) => (
              <li key={i} className="text-sm text-mid pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent">
                {f}
              </li>
            ))}
          </ul>

          {project.componentTags && (
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Components covered</p>
              <div className="flex flex-wrap gap-1.5">
                {project.componentTags.map((c) => (
                  <span key={c} className="font-mono text-xs border border-soft text-mid px-2 py-0.5">{c}</span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 flex-wrap pt-4 border-t border-soft">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink text-ink px-4 py-2.5 hover:bg-ink hover:text-paper transition-colors no-underline">
                <GH size={13} /> Source Code
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-soft text-muted px-4 py-2.5">
                <GH size={13} /> {project.type === 'work' ? 'Private Repo' : 'Source Code'}
              </span>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-widest text-accent border-b border-accent pb-px hover:opacity-70 transition-opacity no-underline self-center">
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardThumb({ media }) {
  const first = media?.[0];
  const count = media?.length || 0;

  if (!first) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">[ Click to expand ]</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {first.type === 'video' ? (
        <video src={first.src} muted loop playsInline className="w-full h-full object-cover" />
      ) : (
        <img src={first.src} alt="" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-img-overlay pointer-events-none" />
      {count > 1 && (
        <span className="absolute bottom-2 right-2 font-mono text-xs bg-surface/90 text-text px-1.5 py-0.5">
          +{count - 1} more
        </span>
      )}
    </div>
  );
}

function Projects() {
  const [active, setActive] = React.useState(null);
  const [idx, setIdx] = React.useState(0);
  const [filter, setFilter] = React.useState('all');

  const filtered = React.useMemo(
    () => projects.filter((p) => (filter === 'all' ? true : p.type === filter)),
    [filter]
  );

  const getVisible = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visible, setVisible] = React.useState(getVisible());

  React.useEffect(() => {
    const fn = () => setVisible(getVisible());
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  React.useEffect(() => { setIdx(0); }, [filter]);

  const maxIdx = Math.max(0, filtered.length - visible);
  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  const dragStart = React.useRef(null);
  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (dx < -40) next();
    if (dx > 40) prev();
    dragStart.current = null;
  };

  const slideW = 100 / visible;
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'work', label: 'Work' },
    { key: 'academic', label: 'Academic' },
  ];

  return (
    <section id="work" className="px-8 md:px-14 py-24 border-t border-soft">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">03 — Things I've Built</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">Work &amp; Projects</h2>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-mono text-xs text-muted mr-2">
              {filtered.length ? idx + 1 : 0} – {Math.min(idx + visible, filtered.length)} / {filtered.length}
            </span>
            <button onClick={prev} disabled={idx === 0} className="w-10 h-10 flex items-center justify-center border border-soft text-mid hover:border-ink hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer">
              <ChevronLeft />
            </button>
            <button onClick={next} disabled={idx >= maxIdx} className="w-10 h-10 flex items-center justify-center border border-soft text-mid hover:border-ink hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors bg-transparent cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="inline-flex border border-soft mb-8">
          {filters.map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)} className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border-0 cursor-pointer transition-colors ${filter === f.key ? 'bg-accent text-accent-contrast' : 'bg-transparent text-secondary hover:text-text'}`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden border border-soft">
          <div className="proj-track drag-area" style={{ transform: `translateX(-${idx * slideW}%)` }} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
            {filtered.map((p) => (
              <div
                key={p.id}
                className="proj-slide border-r border-border last:border-r-0 flex flex-col cursor-pointer bg-surface hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                onClick={() => setActive(p)}
              >
                <div className="w-full aspect-video bg-soft overflow-hidden relative">
                  <CardThumb media={p.media} />
                  <span className={`absolute top-2 left-2 font-mono text-xs uppercase tracking-widest px-2 py-0.5 ${p.type === 'work' ? 'bg-accent text-paper' : 'bg-paper/85 text-mid border border-soft'}`}>
                    {p.type === 'work' ? 'Work' : 'Academic'}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-xs uppercase tracking-wide border border-soft text-muted px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl tracking-tight mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary flex-1 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent border-b border-accent pb-px">
                      View Details →
                    </span>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} title="View source on GitHub" className="w-8 h-8 flex items-center justify-center border border-soft text-muted hover:bg-ink hover:text-paper hover:border-ink transition-colors no-underline">
                        <GH size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filtered.length > visible && (
          <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full border-0 cursor-pointer transition-colors ${i === idx ? 'bg-accent' : 'bg-ink/20'}`} />
            ))}
          </div>
        )}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Nav({ theme, setTheme, accent, setAccent }) {
  const [open, setOpen] = React.useState(false);
  const links = ["About", "Skills", "Work", "Journey", "Contact"];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 bg-bg/90 backdrop-blur border-b border-border">
      <span className="font-display text-lg tracking-tight">Khai Yun</span>
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {links.map((s) => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`} className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-accent transition-colors no-underline">{s}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <ThemeControls theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} />
      </div>
      <button className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0 cursor-pointer" onClick={() => setOpen((o) => !o)}>
        <span className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>
      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper flex flex-col gap-8 px-10 pt-12 z-40">
          <ul className="flex flex-col gap-8 list-none m-0 p-0">
            {links.map((s) => (
              <li key={s}>
                <a href={`#${s.toLowerCase()}`} className="font-mono text-sm uppercase tracking-widest text-mid hover:text-accent no-underline" onClick={() => setOpen(false)}>{s}</a>
              </li>
            ))}
          </ul>
          <ThemeControls theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} compact />
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-14 pt-28 pb-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-8">
          01 — Open to Full-Time Roles · From October 5, 2026
        </p>
        <h1 className="font-display text-text leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(3.5rem,9vw,7.5rem)' }}>
          Cheong<br />
          <span className="text-accent italic">Khai Yun</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-mid max-w-2xl mb-10">
          Computer Science graduate (Software Engineering) from INTI International University. I build practical full-stack software — from Laravel CRUD systems to Vue and React component libraries — and I'm currently interning at Current Tech Industries, shipping production-facing features.
        </p>
        <div className="flex gap-6 flex-wrap">
          {[['#work', 'View Work →'], ['mailto:khaiyuncheong@gmail.com', 'Get in Touch →']].map(([href, label]) => (
            <a key={href} href={href} className="font-mono text-xs uppercase tracking-widest text-ink border-b border-ink pb-px hover:text-accent hover:border-accent transition-colors no-underline">
              {label}
            </a>
          ))}
        </div>
      </div>
      <p className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 font-mono text-xs tracking-widest uppercase text-soft/60 select-none" style={{ writingMode: 'vertical-rl' }}>
        Software Engineering · Computer Science
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-8 md:px-14 py-24 border-t border-soft">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">02 — Skills</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-12">What I Work With</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-soft border border-soft">
          {skills.map((s) => (
            <div key={s.cat} className="bg-paper px-7 py-8 group hover:bg-text transition-colors duration-200 cursor-default">
              <p className="font-mono text-xs uppercase tracking-wider text-accent group-hover:text-on-dark-accent mb-3">{s.cat}</p>
              <p className="text-sm leading-loose text-secondary group-hover:text-on-dark-secondary transition-colors">{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section id="journey" className="px-8 md:px-14 py-24 border-t border-soft">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">04 — Journey</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-14">Experience &amp; Education</h2>
        <div className="relative pl-10">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-soft" />
          {journey.map((e, i) => (
            <div key={i} className="relative pb-14 last:pb-6 group">
              <div className={`absolute -left-10 top-1.5 w-3 h-3 rounded-full -translate-x-1 transition-all duration-200 group-hover:scale-125 group-hover:ring-4 group-hover:ring-soft ${i === 0 ? 'bg-accent' : 'bg-ink'}`} />
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">{e.period}</p>
              <div className="flex items-center flex-wrap gap-3 mb-2">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">{e.org}</h3>
                <span className={`font-mono text-xs uppercase tracking-widest px-2 py-0.5 leading-tight ${i === 0 ? 'bg-accent text-paper' : 'border border-mid text-mid'}`}>{e.badge}</span>
              </div>
              <p className="text-base text-mid mb-2">{e.role}</p>
              <p className="font-mono text-sm leading-relaxed text-muted mb-5">{e.note}</p>
              <div className="inline-flex items-baseline gap-2">
                <span className="font-display text-5xl tracking-tight">{e.statValue}</span>
                <span className="font-mono text-sm text-muted">{e.statLabel === 'CGPA' ? '/ 4.00 CGPA' : e.statLabel}</span>
              </div>
            </div>
          ))}
          <div className="relative pt-2">
            <div className="absolute -left-10 top-2 w-3 h-3 rounded-full border border-soft bg-paper -translate-x-1" />
            <p className="font-mono text-xs uppercase tracking-widest text-soft">Started Aug 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <section id="contact" className="px-8 md:px-14 py-24 bg-contrast-bg border-t border-contrast-border">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">05 — Contact</p>
          <h2 className="font-display leading-tight tracking-tight mb-6 text-contrast-text" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
            Let's Build<br /><span className="text-contrast-muted italic">Something Together</span>
          </h2>
          <p className="text-base leading-relaxed text-contrast-secondary max-w-md mb-10">
            Currently interning at Current Tech Industries, and open to full-time software engineering and web development roles from October 5, 2026.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:khaiyuncheong@gmail.com" className="font-mono text-xs uppercase tracking-widest border border-[#b7b4ae]/40 text-[#f2f0ec] px-5 py-3 hover:bg-accent hover:text-[#f2f0ec] hover:border-accent transition-colors no-underline">
              Email
            </a>
            <a href="https://github.com/Cloudie-yun" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-[#b7b4ae]/40 text-[#f2f0ec] px-5 py-3 hover:bg-accent hover:text-[#f2f0ec] hover:border-accent transition-colors no-underline">
              <GH size={13} /> GitHub
            </a>
            <a href="tel:+60128833638" className="font-mono text-xs uppercase tracking-widest border border-[#b7b4ae]/40 text-[#f2f0ec] px-5 py-3 hover:bg-accent hover:text-[#f2f0ec] hover:border-accent transition-colors no-underline">
              +60 12 8833638
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-[#141516] border-t border-white/5 px-8 md:px-14 py-5 flex flex-col md:flex-row justify-between gap-2">
        <p className="font-mono text-xs tracking-widest text-[#b7b4ae]/40">© 2026 Cheong Khai Yun</p>
        <p className="font-mono text-xs tracking-widest text-[#b7b4ae]/40">Cheras, Selangor · Malaysia</p>
      </footer>
    </>
  );
}

window.PortfolioSections = {
  ThemeControls,
  MediaSlide,
  MediaCarousel,
  ProjectModal,
  CardThumb,
  Projects,
  Nav,
  Hero,
  Skills,
  JourneySection,
  Contact,
};
