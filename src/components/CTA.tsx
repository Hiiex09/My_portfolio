import React from 'react';

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-12">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-20 text-center text-white md:px-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-6 text-4xl font-black md:text-6xl">Let&apos;s work together</h2>
          <p className="mb-10 text-lg text-slate-300">
            Looking for a dedicated developer to bring your next big idea to life? I&apos;m currently available for freelance work and permanent positions.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="/resume.pdf"
              download="Resume.pdf"
              className="btn btn-primary btn-sm md:btn-md gap-2 rounded-lg font-bold text-white hover:shadow-[0_0_20px_rgba(19,91,236,0.4)]"
            >
              <span>Hire Me</span>
              <span className="material-symbols-outlined text-lg">download</span>
            </a>
            <a className="text-lg font-medium underline-offset-8 hover:underline" href="mailto:barangandevon@gmail.com">barangandevon@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
