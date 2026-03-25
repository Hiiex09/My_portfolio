import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Expertise />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
