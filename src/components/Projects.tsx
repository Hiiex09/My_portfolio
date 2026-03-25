import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "HTML & CSS Cheat Sheet",
      description: "Beginner’s Guide to Web Development. A structured path from skeleton to style.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDByjH3h85VBvG0Uiqjt4P_mSSEtNq897DWH5y6xSJ15isp7-2QmZCysu84zRvpmhBurZsYDAm3n9_Tnpf5pN4lB-NEVBil6DPY4dYdzKeqbRpfMeTysPn1QcUCoBMqfoXGEsEf5brQ-0iQ2v73DhZWI-l244I7WRTmE-oHoHeECz8FR6rDC7cCXPjGMo_Qwka3E62PhGsuBDB3bFTzQubtqU-qEf4Qis0-OnzqCRLnuK7V8OFCZBWa_3kECRKcbo1eNiWWldSsunEA",
      tags: ["HTML", "CSS"],
      links: "https://html-css-dusky-two.vercel.app/"
    },
    {
      title: "Luxe Commerce Engine",
      description: "High-performance headless commerce solution featuring sub-second page loads and seamless payment integration.",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTqJ3zIGJ8OWNGiHg9ll-z5-k_Be6tWJfjEYL1rCkIi30fG0zCPU8Ak5xKg_OLn-4fPU4bm4iEN9EDV-MLH5BKLy-yajr0XVNDvkBCCKsYc20rbTHECioJr9px_h1Sd6ddHI-Ndeu5ROFJngUBcp-lLmEoDQtnWUnKjcwoj-0G8izYQAAiqq-YIb9MAjnANejEadpbvNkednf1bvD9Yucea1ZSWtNu6g7zAQopJFovPx0ZgIOZXDO8X2uxpqEW2NkjGo2ILbDMUVJJ",
      tags: ["Next.js", "Stripe", "Tailwind"]
    }
    // {
    //   title: "Cloud Infrastructure Tool",
    //   description: "DevSecOps dashboard for monitoring microservices health and managing automated deployment pipelines.",
    //   bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Qj5zoSDEJVons-1i7oEhnjqxeKuXNauQKAhgzL36nviJbDK-vniMyTO0wW6A9MhEyGSLYWTYN3hrq8SbQ-771gb_PNnowDOlawZXQtR6vNSrPn8YWNgcdttUO-9liQblk-w38tDpGtROMCVP8zr8l-_aR1CTX883ZqQDFoopV6Y8_1RtMpKU2jczvFyoOT7o-wkORfRzubfHHr18pZddfOkBhgRb2NHi0dL874Sp7FMRCGqp0RS_70oKBx-bTfNGP4X-ucLe-89T",
    //   tags: ["Node.js", "GraphQL", "Docker"]
    // },
    // {
    //   title: "Health Track Mobile",
    //   description: "Cross-platform mobile application for biometric monitoring with encrypted data synchronization.",
    //   bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoVAxxDOZZXx8Maw5Qms8Y69cp2vcA291C4CWUSVT1DrzVc4MOIURA5PoxHHe48Wevgys4cSCpX4qF1YTY49gWUapyYJCzcqwgB91XsVfNYnzaPMq910r6vG3FGilK2j-jabrSpaeOrCKZ_jIYAMKKebFnqbwLu2s7LW_wCMUE6G9nv4rbc8tskmODKlWDdrwxeq0i9Y5GWL8i_1Xi4kJg5ZQX6JGl6k3mbHz4TVVmU1sBETTKFdnqn9BpQwUL0pxvcLxe6DCEicAs",
    //   tags: ["Flutter", "Go", "PostgreSQL"]
    // }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12" id="projects">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Selected Projects</h2>
          <div className="mt-4 h-1 w-20 bg-primary"></div>
        </div>
        <p className="max-w-md text-slate-500">
          A curated selection of my recent work in fintech, e-commerce, and enterprise solutions.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="card card-compact dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 overflow-hidden bg-base-200/50">
            <figure className="aspect-video w-full overflow-hidden p-2">
              <div
                className="h-full w-full bg-cover bg-center rounded-lg transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url('${project.bgImage}')` }}
              ></div>
            </figure>
            <div className="card-body p-6">
              <div className="card-actions justify-start mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="badge badge-primary badge-outline rounded uppercase text-[10px]">{tag}</div>
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
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
