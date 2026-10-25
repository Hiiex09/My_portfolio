import Image from "next/image";
import profile from "../../public/Image.png";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-18" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute left-1/2 top-0 h-120 w-120 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="text-left lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"><span className="h-2 w-2 rounded-full bg-primary" />Available for opportunities</div>
          <h1 id="hero-title" className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-copy sm:text-6xl lg:text-7xl">I build dependable web products from <span className="text-primary">interface to API.</span></h1>
          <p className="mt-6 max-w-prose text-base leading-7 text-muted sm:text-lg sm:leading-8">I&apos;m Devon, a junior full-stack developer focused on thoughtful interfaces, practical backends, and clean, maintainable code.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition hover:bg-primary-strong hover:text-copy hover:shadow-md active:scale-[0.98]" href="#projects">Explore my work <Icon name="arrow-down" className="h-4 w-4" /></a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line bg-surface/70 px-6 py-3 text-sm font-semibold text-copy transition hover:border-primary/50 hover:bg-surface-raised" href="mailto:barangandevon@gmail.com">Get in touch</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line/40 pt-6 text-sm text-subtle"><span>React &amp; Next.js</span><span>Node.js &amp; Python</span><span>SQL &amp; MongoDB</span></div>
        </div>
        <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line/50 bg-surface shadow-2xl shadow-black/40">
            <Image src={profile} alt="Devon Barangan" fill priority sizes="(max-width: 1024px) 384px, 33vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-canvas via-canvas/75 to-transparent px-6 pb-6 pt-20"><p className="text-sm font-semibold text-copy">Devon Barangan</p><p className="mt-1 text-sm text-muted">Full-stack developer · Philippines</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
