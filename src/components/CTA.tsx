import Icon from "./Icon";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl scroll-mt-18 px-6 py-20 sm:py-24 lg:px-12" id="contact" aria-labelledby="contact-title">
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-surface px-6 py-16 text-left shadow-xl shadow-black/30 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Let&apos;s work together</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight text-copy sm:text-5xl">Have a project or opportunity in mind?</h2>
          <p className="mt-5 max-w-prose text-base leading-7 text-muted">I&apos;m open to junior developer roles and freelance projects where I can build useful, polished web experiences.</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="mailto:barangandevon@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition hover:bg-primary-strong hover:text-copy hover:shadow-md active:scale-[0.98]">Start a conversation <Icon name="arrow-up-right" className="h-4 w-4" /></a>
            <a className="rounded-md text-sm font-medium text-muted underline decoration-line underline-offset-4 transition hover:text-copy" href="/resume.pdf" download="Devon-Barangan-Resume.pdf">Download résumé</a>
          </div>
        </div>
      </div>
    </section>
  );
}
