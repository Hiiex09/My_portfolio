import Icon from "./Icon";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-canvas/85 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <a className="flex items-center gap-3 rounded-lg" href="#top" aria-label="Devon Barangan, back to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary"><Icon name="code" className="h-5 w-5" /></span>
          <span className="text-sm font-semibold tracking-tight text-copy sm:text-base">Devon Barangan</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-subtle md:flex">
          <a className="transition-colors hover:text-copy" href="#projects">Work</a>
          <a className="transition-colors hover:text-copy" href="#expertise">Expertise</a>
          <a className="transition-colors hover:text-copy" href="#contact">Contact</a>
        </div>
        <a href="/resume.pdf" download="Devon-Barangan-Resume.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-surface shadow-sm transition hover:bg-primary-strong hover:text-copy hover:shadow-md active:scale-[0.98]">
          <span className="hidden sm:inline">Resume</span><Icon name="download" className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
