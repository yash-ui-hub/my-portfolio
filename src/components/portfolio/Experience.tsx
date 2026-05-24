import { motion } from "motion/react";
import { Section } from "./Section";
import { Briefcase, Building2, Car, Film } from "lucide-react";

const ventures = [
  {
    icon: Building2,
    name: "Sumitra Devi Farms",
    tag: "Branding · Strategy · Web",
    desc: "End-to-end digital presence: brand identity, social media strategy, content production and a marketing-ready website.",
    points: ["Brand & Digital Presence", "Social Media Strategy", "Content Creation", "Website & Marketing"],
  },
  {
    icon: Car,
    name: "Al Hai Motors — Dubai",
    tag: "Automotive · Campaigns",
    desc: "Automotive brand campaigns, promotional media, digital visuals and engagement-driven social content.",
    points: ["Automotive Branding", "Promotional Media", "Marketing Visuals", "Engagement Campaigns"],
  },
  {
    icon: Film,
    name: "KC Productions — Dubai",
    tag: "Production · Creative",
    desc: "Creative production collaboration covering video shoots, brand identity polish and cross-channel digital campaigns.",
    points: ["Creative Production", "Video Content", "Brand Identity", "Digital Campaigns"],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Work & Ventures"
      title={<>Founder & Creative Developer — <span className="gradient-text">Core Creation</span></>}
      subtitle="Core Creation is my startup focused on digital branding, content production, social media marketing and modern web experiences. I help brands build impactful identities and innovative digital solutions.">
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="space-y-10">
          {ventures.map((v, i) => (
            <motion.div key={v.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
              className={`relative grid sm:grid-cols-2 gap-6 ${i%2===1 ? "sm:[&>*:first-child]:order-2" : ""}`}>
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                <v.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="hidden sm:block" />
              <div className="ml-14 sm:ml-0 group relative rounded-2xl glass-strong p-6 hover:bg-white/[0.07] transition">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold">{v.name}</h3>
                  <span className="text-xs font-mono text-primary">{v.tag}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {v.points.map(p => (
                    <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
