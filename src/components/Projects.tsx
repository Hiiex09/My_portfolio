import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "HTML & CSS Cheat Sheet",
      description:
        "Beginner’s Guide to Web Development. A structured path from skeleton to style.",
      bgImage: "/HTMLCSS.png",
      tags: ["HTML", "CSS"],
      links: "https://html-css-dusky-two.vercel.app/",
    },
    {
      title: "Katalk",
      description:
        "Chat application with real-time messaging built using MERN stack.",
      bgImage: "/Katalk.png",
      tags: ["React", "DaisyUI", "MongoDB", "Node.js", "Socket.io"],
      links: "https://katalk.onrender.com/login",
    },
    {
      title: "Barangay Information Portal System (New Project In Progress)",
      description:
        "The Barangay Information Portal System is a web-based application designed to digitize and centralize barangay services in the Philippines. It aims to improve communication between barangay officials and residents, reduce manual processes, and promote transparency, efficiency, and accessibility in local governance.",
      bgImage: "/BIPS.png",
      tags: ["React", "DaisyUI", "MongoDB", "Node.js"],
      links: "Upcoming",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12" id="projects">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Selected Projects
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary"></div>
        </div>
        <p className="max-w-md text-slate-500">
          A curated selection of my recent work in fintech, e-commerce, and
          enterprise solutions.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card card-compact dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 overflow-hidden bg-base-200/50"
          >
            <figure className="aspect-video w-full overflow-hidden p-2">
              <div
                className="h-full w-full bg-cover bg-center rounded-lg transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url('${project.bgImage}')` }}
              ></div>
            </figure>
            <div className="card-body p-6">
              <div className="card-actions justify-start mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="badge badge-primary badge-outline rounded uppercase text-[10px]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <h2 className="card-title text-2xl font-bold">{project.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="card-actions">
                <a
                  href={project.links}
                  className="btn btn-link btn-xs normal-case font-bold text-primary gap-2 no-underline"
                >
                  View Case Study
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
