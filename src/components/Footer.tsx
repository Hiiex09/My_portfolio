export default function Footer() {
  return (
    <footer className="border-t border-line/35 bg-surface/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <div><p className="text-sm font-semibold text-copy">Devon Barangan</p><p className="mt-1 text-sm text-subtle">Full-stack developer · © 2026</p></div>
        <nav aria-label="Social links" className="flex items-center gap-3">
          <a className="flex h-11 w-11 items-center justify-center rounded-lg border border-line/45 text-subtle transition hover:border-primary/40 hover:bg-surface hover:text-copy" href="https://github.com/Hiiex09" aria-label="GitHub" target="_blank" rel="noreferrer"><svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
          <a className="flex h-11 w-11 items-center justify-center rounded-lg border border-line/45 text-subtle transition hover:border-primary/40 hover:bg-surface hover:text-copy" href="https://www.linkedin.com/in/devon-barangan-666222302/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect height="12" width="4" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a className="flex h-11 w-11 items-center justify-center rounded-lg border border-line/45 text-subtle transition hover:border-primary/40 hover:bg-surface hover:text-copy" href="https://www.facebook.com/baranggan.devon" aria-label="Facebook" target="_blank" rel="noreferrer"><svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg></a>
          <a className="ml-2 text-sm font-medium text-subtle transition hover:text-copy" href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
