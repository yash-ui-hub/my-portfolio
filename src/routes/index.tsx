import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { ParticlesBackground, MouseGradient, ScrollProgress } from "@/components/portfolio/Background";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Timeline } from "@/components/portfolio/Timeline";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Achievements } from "@/components/portfolio/Achievements";
import { FAQ } from "@/components/portfolio/FAQ";
import { CTA } from "@/components/portfolio/CTA";
import { Contact } from "@/components/portfolio/Contact";
import { SocialDock } from "@/components/portfolio/SocialDock";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Yash — Developer & Founder of Core Creation" },
      { name: "description", content: "Developer, entrepreneur and creative builder. Founder of Core Creation. Crafting modern digital experiences and brands across Dubai and India." },
      { property: "og:title", content: "Yash — Developer & Founder" },
      { property: "og:description", content: "Modern web, brand and product experiences by Yash." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <ParticlesBackground />
      <MouseGradient />
      <Navbar />
      <SocialDock />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Timeline />
        <Testimonials />
        <Achievements />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" richColors />
    </div>
  );
}
