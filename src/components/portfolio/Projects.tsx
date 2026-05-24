import { motion } from "motion/react";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "AI SaaS Dashboard", desc: "Realtime analytics and AI-driven insights for modern teams.", tags: ["Next.js","TypeScript","OpenAI","Tailwind"], hue: "from-emerald-400/30 via-cyan-400/20" },
  { title: "Modern E-Commerce", desc: "Headless storefront with cinematic product pages and Stripe.", tags: ["React","Stripe","Node","MongoDB"], hue: "from-violet-400/30 via-pink-400/20" },
  { title: "Startup Landing Page", desc: "High-conversion landing built for a Y-Combinator-style brand.", tags: ["Next.js","Framer Motion","Tailwind"], hue: "from-cyan-400/30 via-blue-400/20" },
  { title: "Social Media Agency Site", desc: "Bold creative agency site for Core Creation clients.", tags: ["React","GSAP","Vercel"], hue: "from-amber-400/25 via-rose-400/20" },
  { title: "Portfolio CMS", desc: "Headless CMS to manage portfolios, blogs and case studies.", tags: ["Next.js","Sanity","TypeScript"], hue: "from-fuchsia-400/30 via-indigo-400/20" },
  { title: "Business Analytics", desc: "Operations dashboard with charts, KPIs and exports.", tags: ["React","Recharts","Express","Postgres"], hue: "from-teal-400/30 via-emerald-400/20" },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work"
      title={<>Projects that ship <span className="gradient-text">real impact</span>.</>}
      subtitle="A glimpse of products, dashboards and brand experiences I've crafted recently.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i*0.06 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl glass-strong overflow-hidden transition shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)]">
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.hue} to-transparent`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-mono text-5xl font-bold opacity-30 select-none">
                  {String(i+1).padStart(2,"0")}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-green-400/80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold group-hover:gradient-text transition">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-primary)] px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:scale-105 transition">
                  <ExternalLink className="h-3.5 w-3.5" /> Live
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-semibold hover:bg-white/10 transition">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
