import { motion } from "motion/react";
import { Section } from "./Section";

const items = [
  { year: "2021", title: "Started Coding Journey", desc: "First lines of HTML, CSS and JavaScript — fell in love with the web." },
  { year: "2022", title: "First Freelance Clients", desc: "Built websites for local businesses and started learning React." },
  { year: "2025", title: "Founded Core Creation", desc: "Launched my creative + dev studio focused on branding and digital." },
  { year: "2024", title: "Expanded to Dubai", desc: "Partnered with Al Hai Motors and KC Productions for international work." },
  { year: "2025", title: "Scaling Products", desc: "Building SaaS, dashboards and AI-powered experiences for brands." },
];

export function Timeline() {
  return (
    <Section id="journey" eyebrow="Journey"
      title={<>The <span className="gradient-text">startup journey</span> so far.</>}>
      <div className="relative">
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        {items.map((it, i) => (
          <motion.div key={it.year}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}
            className={`relative grid sm:grid-cols-2 gap-6 mb-10 ${i%2===1 ? "sm:[&>*:first-child]:order-2" : ""}`}>
            <div className="absolute left-6 sm:left-1/2 top-3 -translate-x-1/2">
              <div className="h-4 w-4 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] ring-4 ring-background" />
            </div>
            <div className={`hidden sm:block ${i%2===1 ? "text-left" : "text-right"} font-mono text-3xl font-bold gradient-text pt-1 ${i%2===1 ? "pl-12" : "pr-12"}`}>
              {it.year}
            </div>
            <div className="ml-14 sm:ml-0 glass-strong rounded-2xl p-6">
              <div className="sm:hidden font-mono text-sm gradient-text mb-1">{it.year}</div>
              <h3 className="font-display text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
