import profile from '../../public/Image.png'
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-8 text-left">
          <div className="badge badge-primary badge-outline py-4 px-4 text-xs font-semibold uppercase tracking-widest mb-6">
            Available for new projects
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl">
            Building the <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-400 bg-clip-text text-transparent">Digital Future</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
            Junior Full-Stack Developer with
            experience in building modern web
            applications using Node.js, JavaScript,
            TypeScript, Python, and C#. Skilled in
            working with databases such as
            MongoDB, SQL, and PostgreSQL, and
            developing responsive user interfaces
            with React, Next.js, Tailwind CSS, and
            Bootstrap. Leverages AI tools to
            accelerate development while following
            best practices in full-stack architecture,
            code quality, and performance.
          </p>
          <div className="flex flex-wrap gap-4 pt-8 text-slate-500">
            <span className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-800/50">
              <span className="h-2 w-2 rounded-full bg-primary"></span> Frontend Developer
            </span>
            <span className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-800/50">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span> Backend Developer
            </span>
            <span className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-800/50">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Database
            </span>
            <span className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-800/50">
              <span className="h-2 w-2 rounded-full bg-orange-400"></span> AI-Powered UI/UX
            </span>
          </div>
          <div className="pt-12">
            <div className="flex items-center gap-2 animate-bounce opacity-50">
              <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex items-center justify-center">
          <div className="relative h-80 w-80 md:h-80 md:w-80 overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 shadow-2xl transition-transform duration-500">
            <div className="absolute inset-0 z-10"></div>
            <Image
              src={profile}
              alt="Profile Image"
              fill
              className="object-cover transition-all duration-700"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
