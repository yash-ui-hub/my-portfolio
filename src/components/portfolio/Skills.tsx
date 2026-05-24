import { motion } from "motion/react";
import { Section } from "./Section";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 82 },
  { name: "MongoDB", level: 80 },
  { name: "Firebase", level: 82 },
  { name: "REST APIs", level: 90 },
  { name: "Git & GitHub", level: 92 },
  { name: "UI/UX Design", level: 88 },
  { name: "Figma", level: 86 },
  { name: "Vercel", level: 90 },
  { name: "Responsive Design", level: 95 },
];

const stack = ["React","Next.js","TypeScript","Tailwind","Node","Express","MongoDB","Firebase","Figma","Vercel","Git","REST"];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & Tech"
      title={<>The toolkit I use to <span className="gradient-text">ship products</span>.</>}
      subtitle="A modern stack chosen for speed, scalability and beautiful user experience.">
      <div className="grid lg:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <motion.div key={s.name}
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.03 }}
            className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="font-medium">{s.name}</span>
              <span className="font-mono text-xs text-primary">{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.15 + i*0.02, ease: "easeOut" }}
                className="h-full rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl glass-strong p-6">
        <div className="flex gap-4 animate-[shimmer_30s_linear_infinite] flex-wrap justify-center">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="rounded-full glass px-4 py-2 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
