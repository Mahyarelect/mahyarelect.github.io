import { ArrowDown, ArrowUpRight, Copy, Globe, Mail, Phone } from 'lucide-react';

const projects = [
  {
    year: '2026',
    title: 'LLM Document Q&A — RAG Backend',
    description: 'Production-ready RAG API where users upload DOCX and get grounded answers via BM25 retrieval + LLM reranking through OpenRouter. One-command Docker Compose deploy.',
    stack: ['Python', 'Django · DRF', 'LangChain', 'OpenRouter', 'Docker'],
    featured: true,
    repo: 'https://github.com/thisiscodecode/llm_document_qa',
  },
  {
    year: '2026',
    title: 'Spotify — Music Streaming Platform',
    description: 'Full-stack streaming app with auth, user/artist workflows, subscriptions & role-based access. REST APIs with JWT + PostgreSQL, React frontend.',
    stack: ['React · TypeScript', 'Django', 'PostgreSQL · JWT'],
    featured: false,
    repo: 'https://github.com/Mahyarelect/spotify-project',
  },
  {
    year: '2026',
    title: 'Coffee Glacé — Coffee Shop Website',
    description: 'Responsive Persian RTL coffee-shop with animated menus, category navigation & mobile-first layouts. Prisma/SQLite, standalone deploy.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma'],
    featured: false,
    repo: 'https://github.com/thisiscodecode/coffee-shop',
  },
  {
    year: '2026',
    title: 'ImplementNotion — Note-Taking App',
    description: 'Notion-inspired browser app: folders, search, pinned notes & Markdown live preview. localStorage + JSON import/export, no backend needed.',
    stack: ['JavaScript', 'Markdown', 'LocalStorage'],
    featured: false,
    repo: 'https://github.com/Mahyarelect/implementNotion',
  },
  {
    year: '2024',
    title: 'Gwent Online — Multiplayer Card Game',
    description: 'JavaFX recreation of Gwent with real-time multiplayer over TCP sockets. Clean MVC separating logic, networking & UI.',
    stack: ['Java', 'JavaFX', 'TCP Sockets'],
    featured: false,
  },
  {
    year: '2023',
    title: 'Sgit — Version Control System',
    description: 'Git-inspired VCS from scratch in C: init, add, commit, log, diff, merge, reset & stash. Direct Linux filesystem, no third-party libs.',
    stack: ['C', 'Linux Filesystem'],
    featured: false,
    repo: 'https://github.com/Mahyarelect/Sgit',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <header className="flex items-center justify-between border-b border-[var(--line)] py-6">
          <a href="#top" className="font-mono text-sm font-semibold" aria-label="Home">
            MRPK<span className="text-[var(--accent)]">.</span>
          </a>
          <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-5 text-sm font-medium text-[var(--muted-ink)] sm:gap-7">
            <a className="transition-colors hover:text-[var(--ink)]" href="#work">Work</a>
            <a className="transition-colors hover:text-[var(--ink)]" href="#toolkit">Toolkit</a>
            <a className="transition-colors hover:text-[var(--ink)]" href="#education">Education</a>
            <a className="rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-white hover:opacity-90" href="#contact">Get in touch →</a>
          </nav>
          <a className="sm:hidden rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-white" href="#contact">Contact</a>
        </header>

        {/* HERO — no photo, typographic only */}
        <section id="top" className="grid items-center gap-10 py-12 sm:gap-14 sm:py-20 lg:grid-cols-[1.22fr_0.78fr] lg:py-24">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Available for internships · Tehran, Iran
            </p>
            <h1 className="max-w-4xl text-[clamp(2.8rem,7.5vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Mahyar
              <br />
              <span className="text-[var(--muted-ink)]">Rezaie Poor</span>
              <br />
              Khalili
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[var(--muted-ink)]">
              Computer Engineering @ <span className="font-semibold text-[var(--ink)]">Sharif University of Technology</span> — I build{' '}
              <span className="font-semibold text-[var(--ink)]">backend systems, ML applications, and LLM-based tools</span> with a focus on practical, maintainable software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
                Selected work <ArrowDown className="h-4 w-4" />
              </a>
              <a href="https://github.com/Mahyarelect" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-medium hover:bg-[var(--ink)] hover:text-white transition-colors">
                github.com/Mahyarelect
              </a>
              <a href="https://codecode.ir" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-medium hover:bg-[var(--ink)] hover:text-white transition-colors">
                codecode.ir <Globe className="h-4 w-4 opacity-60" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="rounded-full border bg-white px-3 py-1.5">Data Engineering</span>
              <span className="rounded-full border bg-white px-3 py-1.5">Machine Learning</span>
              <span className="rounded-full border bg-white px-3 py-1.5">AI Agents</span>
              <span className="rounded-full bg-[var(--ink)] px-3 py-1.5 text-white">RAG · LLM</span>
            </div>
          </div>

          <aside className="relative rounded-[24px] border border-[var(--line)] bg-white shadow-sm overflow-hidden">
            <div className="bg-[linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)] bg-[size:24px_24px] p-7">
              <div className="flex items-start justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-ink)]">Focus — 2026</p>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] font-mono text-[10px] font-semibold tracking-widest text-white">MR</span>
              </div>
              <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)]">Specialization</p>
              <h2 className="mt-2 text-[28px] font-semibold leading-none tracking-[-0.04em]">Data · ML ·<br />AI Engineering</h2>
              <div className="mt-4 h-[3px] w-12 rounded-full bg-[var(--ink)]" />
            </div>
            <div className="p-6">
              <p className="text-sm leading-6 text-[var(--muted-ink)]">Interested in backend engineering, machine learning, and AI systems that solve real problems. Clean code, reproducible deploys.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href="mailto:mahyar.rezaee84@sharif.edu" className="rounded-xl border bg-[#f8fafc] p-3 hover:bg-white transition-colors">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-ink)]">Academic</div>
                  <div className="mt-1 truncate text-xs font-medium">mahyar.rezaee84@sharif.edu</div>
                </a>
                <a href="mailto:mahyarelect@gmail.com" className="rounded-xl border bg-[#f8fafc] p-3 hover:bg-white transition-colors">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-ink)]">Personal</div>
                  <div className="mt-1 truncate text-xs font-medium">mahyarelect@gmail.com</div>
                </a>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <a href="https://github.com/Mahyarelect" target="_blank" rel="noreferrer" className="rounded-full bg-[var(--ink)] py-2.5 text-center text-white hover:opacity-90">GitHub →</a>
                <a href="https://github.com/thisiscodecode" target="_blank" rel="noreferrer" className="rounded-full border py-2.5 text-center hover:bg-[var(--ink)] hover:text-white transition-colors">thisiscodecode →</a>
              </div>
            </div>
          </aside>
        </section>

        {/* WORK — 6 projects */}
        <section id="work" className="border-t border-[var(--line)] py-16 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Projects</h2>
            </div>
            <p className="max-w-[380px] text-sm leading-6 text-[var(--muted-ink)]">Recent work across retrieval systems, full-stack products, networking, and systems programming.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {projects.map((project) => {
              const body = (
                <>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${project.featured ? 'bg-[var(--ink)] text-white' : 'border bg-zinc-50'}`}>{project.year} {project.featured ? '· Featured' : ''}</span>
                    <span className="font-mono text-[11px] text-[var(--muted-ink)]">{project.stack[0]}</span>
                  </div>
                  <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.03em]">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-ink)]">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span key={t} className="rounded-full border bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-[var(--muted-ink)]">{t}</span>
                    ))}
                  </div>
                  {project.repo && (
                    <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted-ink)] group-hover:text-[var(--ink)] transition-colors">
                      View repository on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </>
              );
              if (project.repo) {
                return (
                  <a
                    key={project.title}
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="group block bg-[var(--card)] p-7 transition-colors hover:bg-white sm:p-8"
                  >
                    {body}
                  </a>
                );
              }
              return (
                <article key={project.title} className="group bg-[var(--card)] p-7 transition-colors hover:bg-white sm:p-8">
                  {body}
                </article>
              );
            })}
          </div>
        </section>

        {/* TOOLKIT + EDUCATION */}
        <section id="toolkit" className="grid gap-6 border-t border-[var(--line)] py-16 sm:py-20 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="rounded-[24px] border border-[var(--line)] bg-white p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Toolkit</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em]">Built for shipping</h3>
            <p className="mt-1 text-sm text-[var(--muted-ink)]">Practical stack — from data to deploy.</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 text-sm">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)]">ML / Data</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['Python','Pandas','NumPy','Scikit-learn','Keras','Matplotlib · Seaborn'].map(s=> <span key={s} className="rounded-full border bg-zinc-50 px-2.5 py-1.5 text-xs">{s}</span>)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)]">AI / LLM</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['LangChain','RAG','BM25 Retrieval','OpenRouter'].map(s=> <span key={s} className="rounded-full border bg-zinc-50 px-2.5 py-1.5 text-xs">{s}</span>)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)]">Backend / DevOps</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['Django · DRF','Docker · Compose','Linux · Git','PostgreSQL · MongoDB'].map(s=> <span key={s} className="rounded-full border bg-zinc-50 px-2.5 py-1.5 text-xs">{s}</span>)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)]">Web / Frontend</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['React · Next.js','TypeScript','Tailwind CSS','REST APIs'].map(s=> <span key={s} className="rounded-full border bg-zinc-50 px-2.5 py-1.5 text-xs">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="mt-6 border-t pt-4 font-mono text-xs text-[var(--muted-ink)]">Concepts: OOP · Systems Programming · DevOps Culture · Monitoring Basics · HTTP/HTTPS · DOM</div>
          </div>

          <div id="education" className="space-y-6">
            <div className="rounded-[24px] bg-[var(--ink)] p-7 text-white sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-60">Education</p>
              <h3 className="mt-2 text-[22px] font-semibold leading-tight">Sharif University<br />of Technology</h3>
              <p className="mt-3 text-sm opacity-80 leading-6">B.Sc. Computer Engineering<br />Tehran · 2023 — Present</p>
              <div className="mt-4 inline-flex rounded-full bg-white px-3 py-1.5 font-mono text-[11px] font-semibold text-black">Top-ranked in Iran · CE Dept.</div>
              <div className="mt-7 border-t border-white/15 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-60">Certification</p>
                <p className="mt-2 text-sm font-medium">Practical Linux Training · Quera</p>
              </div>
              <div className="mt-6 border-t border-white/15 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-60">Languages</p>
                <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
                  <span className="rounded-full bg-white px-2.5 py-1 text-black">Persian — Native</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1">English — Professional</span>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--line)] bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)]">Soft Skills</p>
              <p className="mt-3 text-xs leading-6 text-[var(--muted-ink)]">Teamwork · Clear Communication · Documentation-Driven Learning · Complex Problem Solving · Curiosity & Deep Learning · Knowledge Sharing · Reliable & Hardworking</p>
              <p className="mt-4 flex items-center gap-2 font-mono text-xs"><Globe className="h-3.5 w-3.5" /> codecode.ir — github.com/thisiscodecode</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-[var(--line)] py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Get in touch</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted-ink)]">Open to internships, collaborations and backend / AI roles. Email is fastest.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:mahyarelect@gmail.com" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">mahyarelect@gmail.com</a>
                <a href="mailto:mahyar.rezaee84@sharif.edu" className="rounded-full border bg-white px-5 py-2.5 text-sm font-medium">mahyar.rezaee84@sharif.edu</a>
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              <a href="mailto:mahyarelect@gmail.com" className="group bg-[var(--card)] p-6 hover:bg-white transition-colors">
                <div className="flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-ink)]">Personal</span><Mail className="h-4 w-4 text-[var(--accent)]" /></div>
                <span className="mt-6 block break-all text-sm font-medium">mahyarelect@gmail.com</span>
                <span className="mt-1 block font-mono text-xs text-[var(--muted-ink)] flex items-center gap-1"><Copy className="h-3 w-3"/> Click to email</span>
              </a>
              <a href="mailto:mahyar.rezaee84@sharif.edu" className="group bg-[var(--card)] p-6 hover:bg-white transition-colors">
                <div className="flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-ink)]">Academic</span><Mail className="h-4 w-4 text-[var(--accent)]" /></div>
                <span className="mt-6 block break-all text-sm font-medium">mahyar.rezaee84@sharif.edu</span>
              </a>
              <a href="tel:+989100448498" className="bg-[var(--card)] p-6 hover:bg-white transition-colors">
                <div className="flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-ink)]">Phone</span><Phone className="h-4 w-4 text-[var(--accent)]" /></div>
                <span className="mt-6 block text-sm font-medium">+98 910 044 8498</span>
              </a>
              <a href="https://codecode.ir" target="_blank" rel="noreferrer" className="bg-[var(--card)] p-6 hover:bg-white transition-colors">
                <div className="flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-ink)]">Website</span><Globe className="h-4 w-4 text-[var(--accent)]" /></div>
                <span className="mt-6 block text-sm font-medium">codecode.ir <ArrowUpRight className="inline h-3 w-3 opacity-50" /></span>
                <span className="block font-mono text-xs text-[var(--muted-ink)]">github.com/Mahyarelect</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[var(--line)] py-6 text-xs text-[var(--muted-ink)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mahyar Rezaie Poor Khalili</p>
          <p className="font-mono">Tehran, Iran · Built with Vinext · Deploys to GitHub Pages</p>
        </footer>
      </div>
    </main>
  );
}
