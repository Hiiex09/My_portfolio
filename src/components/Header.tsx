
export default function Header() {
  return (
    <header className="navbar fixed top-0 z-50 w-full border-b border-slate-200/10 backdrop-blur-md bg-base-100/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">terminal</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Barangan Devon E.</span>
          </div>
        </div>
        <div className="flex-none">
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="btn btn-primary btn-sm md:btn-md gap-2 rounded-lg font-bold text-white hover:shadow-[0_0_20px_rgba(19,91,236,0.4)]"
          >
            <span>Hire Me</span>
            <span className="material-symbols-outlined text-lg">download</span>
          </a>
        </div>
      </div>
    </header>
  );
}
