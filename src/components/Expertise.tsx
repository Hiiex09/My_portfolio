import React from 'react';

export default function Expertise() {
  return (
    <section className="py-24 bg-base-200/50" id="expertise">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Expertise</h2>
          <div className="mt-4 h-1 w-20 bg-primary"></div>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <h3 className="text-xl font-bold">Frontend Mastery</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> React / Next.js Expert</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Advanced CSS & Tailwind</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> AI-Powered UI/UX</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Responsive & Accessible UI</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">database</span>
            </div>
            <h3 className="text-xl font-bold">Backend Architecture</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Node.js </li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> PostgreSQL / MongoDB / MySQL</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> REST & FastAPI</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Monolith Architecture</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">cloud_done</span>
            </div>
            <h3 className="text-xl font-bold">DevOps</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Basic Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
