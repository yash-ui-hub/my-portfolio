import { motion } from "motion/react";
import { Section } from "./Section";
import { Code2, Palette, Megaphone, Rocket, Camera, LineChart } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", desc: "Production-ready websites and apps with React, Next.js and TypeScript." },
  { icon: Palette, title: "UI/UX Design", desc: "Modern interfaces designed in Figma — converted to pixel-perfect code." },
  { icon: Megaphone, title: "Brand & Marketing", desc: "Identity, social strategy and campaigns that grow brands online." },
  { icon: Camera, title: "Content Production", desc: "Cinematic video, photography and creative content for brands." },
  { icon: Rocket, title: "Startup Building", desc: "From idea to launch — MVPs, landing pages and growth systems." },
  { icon: LineChart, title: "Analytics & Growth", desc: "Dashboards, SEO and data-driven decisions for your business." },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services"
      title={<>What I <span className="gradient-text">build & deliver</span>.</>}
      subtitle="A full-stack offering covering product, brand and growth — under one roof.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i*0.06 }}
            className="group relative rounded-2xl glass p-7 hover:bg-white/[0.06] transition overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-20 blur-2xl transition" />
            <s.icon className="h-9 w-9 text-primary mb-4 transition group-hover:scale-110 group-hover:rotate-6" />
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
