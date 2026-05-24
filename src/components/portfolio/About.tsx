import { motion } from "motion/react";
import { Section } from "./Section";
import { Code2, Rocket, Sparkles, MapPin } from "lucide-react";

const cards = [
  { icon: Code2, title: "Developer", desc: "Building modern web apps with React, Next.js and TypeScript." },
  { icon: Rocket, title: "Entrepreneur", desc: "Founder of Core Creation, scaling brands through digital." },
  { icon: Sparkles, title: "Creator", desc: "Producing cinematic content and bold visual identities." },
  { icon: MapPin, title: "Dubai · India", desc: "Working with brands across two creative capitals." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me"
      title={<>Crafting digital products with <span className="gradient-text">vision & code</span>.</>}>
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="lg:col-span-2 text-lg text-muted-foreground leading-relaxed">
          I am a passionate developer, entrepreneur and creative problem solver focused on building modern digital experiences and scalable brands. Alongside development, I actively work on startup projects, marketing campaigns and creative productions across <span className="text-foreground">Dubai</span> and <span className="text-foreground">India</span>.
          <br /><br />
          My approach blends engineering precision with founder mindset — every pixel and every line of code serves a business goal.
        </motion.p>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-6 hover:bg-white/[0.06] transition overflow-hidden">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition gradient-border" />
              <c.icon className="h-8 w-8 text-primary mb-4 transition group-hover:scale-110" />
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
