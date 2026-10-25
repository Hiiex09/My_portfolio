import Icon from "./Icon";

const expertise = [
  { icon: "layers" as const, eyebrow: "01 / Interface", title: "Frontend development", description: "Responsive, accessible interfaces built for clarity and speed.", skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"] },
  { icon: "database" as const, eyebrow: "02 / Systems", title: "Backend development", description: "Practical APIs and data layers that keep products reliable.", skills: ["Node.js & Python", "REST & FastAPI", "PostgreSQL", "MongoDB & MySQL"] },
  { icon: "cloud" as const, eyebrow: "03 / Delivery", title: "Developer workflow", description: "A clean, iterative process from local development to deployment.", skills: ["Git & GitHub", "Docker fundamentals", "Vercel & Render", "AI-assisted workflow"] },
];

export default function Expertise() {
  return (
    <section className="scroll-mt-18 border-y border-line/35 bg-surface/35 py-20 sm:py-24" id="expertise" aria-labelledby="expertise-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Capabilities</p>
          <h2 id="expertise-title" className="mt-3 text-3xl font-semibold tracking-tight text-copy sm:text-4xl">How I build</h2>
          <p className="mt-4 leading-7 text-subtle">A balanced toolkit for taking a product from a clear interface to a dependable implementation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <article key={item.title} className="rounded-xl border border-line/45 bg-surface p-6 shadow-sm shadow-black/20">
              <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon name={item.icon} /></span><span className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">{item.eyebrow}</span></div>
              <h3 className="mt-6 text-xl font-semibold text-copy">{item.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-subtle">{item.description}</p>
              <ul className="mt-6 space-y-3 border-t border-line/35 pt-6 text-sm text-muted">
                {item.skills.map((skill) => <li className="flex items-center gap-3" key={skill}><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon name="check" className="h-3 w-3" /></span>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
