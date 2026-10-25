import Image from "next/image";
import Icon from "./Icon";

const projects = [
  { title: "HTML & CSS Cheat Sheet", description: "A beginner-friendly guide to web development, organized as a clear path from page structure to visual styling.", bgImage: "/HTMLCSS.png", tags: ["HTML", "CSS"], link: "https://html-css-dusky-two.vercel.app/", status: "Live project" },
  { title: "Katalk", description: "A real-time chat application built with the MERN stack and live messaging through Socket.io.", bgImage: "/Katalk.png", tags: ["React", "MongoDB", "Node.js", "Socket.io"], link: "https://katalk.onrender.com/login", status: "Live project" },
  { title: "Barangay Information Portal", description: "A community platform designed to centralize barangay services, improve communication, and make local information easier to access.", bgImage: "/BIPS.png", tags: ["React", "MongoDB", "Node.js"], link: null, status: "In progress" },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl scroll-mt-18 px-6 py-20 sm:py-24 lg:px-12" id="projects" aria-labelledby="projects-title">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Selected work</p><h2 id="projects-title" className="mt-3 text-3xl font-semibold tracking-tight text-copy sm:text-4xl">Projects built to solve real problems</h2></div>
        <p className="max-w-sm text-sm leading-6 text-subtle">A selection of learning tools, communication products, and community-focused software.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className={`group overflow-hidden rounded-xl border border-line/45 bg-surface shadow-sm shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-raised hover:shadow-xl hover:shadow-black/30 ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}>
            <figure className={`relative overflow-hidden bg-surface-raised ${index === 0 ? "aspect-video lg:aspect-auto" : "aspect-video"}`}>
              <Image src={project.bgImage} alt={`${project.title} preview`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-linear-to-t from-canvas/40 to-transparent" />
            </figure>
            <div className="flex flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-line/50 bg-surface-soft/35 px-2 py-1 text-xs font-medium text-muted">{tag}</span>)}</div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">{project.status}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-copy">{project.title}</h3>
              <p className="mt-4 max-w-prose text-sm leading-6 text-subtle">{project.description}</p>
              <div className="mt-auto pt-6">{project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-primary transition hover:text-copy">View project <Icon name="arrow-up-right" className="h-4 w-4" /></a> : <span className="inline-flex items-center text-sm font-semibold text-subtle">Case study coming soon</span>}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
