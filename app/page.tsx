import { ArrowUpRight, Mail } from 'lucide-react';

const contacts = [
  { label: 'Academic', address: 'mahyar.rezaee84@sahrif.edu' },
  { label: 'Personal', address: 'mahyarelect@gmail.com' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-[var(--line)] py-6">
          <a href="#top" className="font-mono text-sm font-semibold tracking-[-0.02em]" aria-label="Home">
            MRPK<span className="text-[var(--accent)]">.</span>
          </a>
          <a href="#contact" className="group flex items-center gap-2 text-sm font-medium text-[var(--muted-ink)] transition-colors hover:text-[var(--ink)]">
            Contact
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </header>

        <section id="top" className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1fr_0.7fr] lg:py-24">
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
              <span className="h-px w-8 bg-current" />
              Personal academic page
            </p>
            <h1 className="max-w-4xl text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Mahyar<br />Rezaie Poor<br /><span className="text-[var(--muted-ink)]">Khalili</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted-ink)]">
              A concise home for my academic identity, research profiles, and correspondence.
            </p>
          </div>

          <aside className="relative border-l border-[var(--line)] pl-7 sm:pl-10">
            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_7px_var(--accent-soft)]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)]">Profile</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">OpenReview</h2>
            <p className="mt-3 max-w-sm leading-7 text-[var(--muted-ink)]">
              This page provides a public, stable reference for profile verification and academic communication.
            </p>
          </aside>
        </section>

        <section id="contact" className="border-t border-[var(--line)] py-10 sm:py-12">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Get in touch</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {contacts.map((contact) => (
                <a key={contact.address} href={`mailto:${contact.address}`} className="group bg-[var(--card)] p-6 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-ink)]">{contact.label}</span>
                    <Mail className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <span className="mt-7 block break-all text-sm font-medium tracking-[-0.01em] sm:text-base">{contact.address}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[var(--line)] py-6 text-xs text-[var(--muted-ink)] sm:flex-row sm:items-center sm:justify-between">
          <p>Mahyar Rezaie Poor Khalili</p>
          <p className="font-mono">Academic profile · 2026</p>
        </footer>
      </div>
    </main>
  );
}
