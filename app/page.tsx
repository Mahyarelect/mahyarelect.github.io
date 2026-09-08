import { ArrowDown, ArrowUpRight, GitBranch, Mail } from 'lucide-react';

const projects = [
  {
    year: '2026',
    title: 'LLM Document Q&A',
    description: 'A production-ready RAG API for document Q&A using BM25 retrieval, LLM reranking, and reproducible Docker deployment.',
    stack: 'Python · Django · LangChain · OpenRouter',
  },
  {
    year: '2026',
    title: 'Spotify — Music Streaming Platform',
    description: 'A full-stack platform with authentication, user and artist workflows, subscriptions, and role-based functionality.',
    stack: 'React · TypeScript · Django · PostgreSQL',
  },
  {
    year: '2024',
    title: 'Gwent Online',
    description: 'A JavaFX recreation of Gwent with real-time multiplayer communication and a clean MVC architecture.',
    stack: 'Java · JavaFX · TCP Sockets',
  },
  {
    year: '2023',
    title: 'Sgit — Version Control System',
    description: 'A Git-inspired version control system built from scratch, with commits, diffs, merges, reset, and stash.',
    stack: 'C · Linux Filesystem',
  },
];

const contacts = [
  { label: 'Academic', address: 'mahyar.rezaee84@sharif.edu' },
  { label: 'Personal', address: 'mahyarelect@gmail.com' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-[var(--line)] py-6">
          <a href="#top" className="font-mono text-sm font-semibold" aria-label="Home">
            MRPK<span className="text-[var(--accent)]">.</span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm font-medium text-[var(--muted-ink)] sm:gap-7">
            <a className="transition-colors hover:text-[var(--ink)]" href="#work">Work</a>
            <a className="transition-colors hover:text-[var(--ink)]" href="#contact">Contact</a>
          </nav>
        </header>

        <section id="top" className="grid min-h-[calc(100vh-81px)] items-center gap-14 py-20 lg:grid-cols-[1fr_0.72fr] lg:py-24">
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
              <span className="h-px w-8 bg-current" />
              Computer Engineering · Sharif University
            </p>
            <h1 className="max-w-4xl text-[clamp(3.2rem,7.7vw,7.2rem)] font-semibold leading-[0.91] tracking-[-0.07em]">
              Mahyar<br />Rezaie Poor<br /><span className="text-[var(--muted-ink)]">Khalili</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
              I build backend systems, machine learning applications, and LLM-based tools with a focus on practical, maintainable software.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
                Selected work <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="relative border-l border-[var(--line)] pl-7 sm:pl-10">
            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_7px_var(--accent-soft)]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)]">Focus</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Data · ML · AI Engineering</h2>
            <p className="mt-3 max-w-sm leading-7 text-[var(--muted-ink)]">
              Interested in backend engineering, machine learning, and AI systems that solve real problems.
            </p>
            <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
              <a className="group flex items-center gap-2 hover:text-[var(--accent)]" href="https://github.com/Mahyarelect" target="_blank" rel="noreferrer">
                <GitBranch className="h-4 w-4" /> github.com/Mahyarelect <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a className="group flex items-center gap-2 hover:text-[var(--accent)]" href="https://github.com/thisiscodecode" target="_blank" rel="noreferrer">
                <GitBranch className="h-4 w-4" /> github.com/thisiscodecode <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </aside>
        </section>

        <section id="work" className="border-t border-[var(--line)] py-20 sm:py-24">
          <div className="mb-10 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Projects</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">Recent work across retrieval systems, full-stack products, networking, and systems programming.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="bg-[var(--card)] p-7 transition-colors hover:bg-white sm:p-8">
                <p className="font-mono text-xs text-[var(--accent)]">{project.year}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{project.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted-ink)]">{project.description}</p>
                <p className="mt-7 font-mono text-xs leading-6 text-[var(--muted-ink)]">{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-t border-[var(--line)] py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Education</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Sharif University of Technology</h2>
            <p className="mt-3 leading-7 text-[var(--muted-ink)]">B.Sc. in Computer Engineering<br />Tehran · 2023 — Present</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Toolkit</p>
            <p className="mt-4 text-lg leading-9 text-[var(--muted-ink)]">
              Python · Django · Docker · PostgreSQL · Pandas · NumPy · Scikit-learn · Keras · LangChain · RAG · React · TypeScript · Java · C · Linux
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--line)] py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Get in touch</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {contacts.map((contact) => (
                <a key={contact.address} href={`mailto:${contact.address}`} className="group bg-[var(--card)] p-6 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-ink)]">{contact.label}</span>
                    <Mail className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <span className="mt-7 block break-all text-sm font-medium sm:text-base">{contact.address}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[var(--line)] py-6 text-xs text-[var(--muted-ink)] sm:flex-row sm:items-center sm:justify-between">
          <p>Mahyar Rezaie Poor Khalili</p>
          <p className="font-mono">Academic profile · Tehran, Iran</p>
        </footer>
      </div>
    </main>
  );
}
