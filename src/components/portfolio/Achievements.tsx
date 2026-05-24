import { motion } from "motion/react";
import { Section } from "./Section";
import { Award, Trophy, Star, Medal } from "lucide-react";

const items = [
  { icon: Trophy, title: "Founded Core Creation", year: "2025" },
  { icon: Award, title: "Dubai Brand Partnerships", year: "2024" },
  { icon: Star, title: "30+ Projects Delivered", year: "2025" },
  { icon: Medal, title: "Featured Freelancer", year: "2024" },
];

const certs = ["React Advanced Patterns", "Next.js Full-Stack", "UI/UX Specialization", "Cybersecurity Fundamentals"];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Milestones"
      title={<>Achievements & <span className="gradient-text">certifications</span>.</>}>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <motion.div key={it.title}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i*0.06 }}
              className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.07] transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-xs font-mono text-muted-foreground">{it.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="glass-strong rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold mb-4">Certifications</h3>
          <ul className="space-y-3">
            {certs.map(c => (
              <li key={c} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
