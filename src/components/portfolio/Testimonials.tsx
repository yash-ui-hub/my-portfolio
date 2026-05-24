import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { quote: "Yash transformed our brand presence completely. The website and social campaigns drove serious engagement.", name: "Founder", role: "Sumitra Devi Farms" },
  { quote: "Professional, fast and creative. Our promotional content stood out across every channel in Dubai.", name: "Marketing Lead", role: "Al Hai Motors" },
  { quote: "Top-tier creative collaborator — production quality and digital execution exceeded expectations.", name: "Producer", role: "KC Productions" },
  { quote: "Rare combination of designer, developer and entrepreneur. Delivered way beyond the brief.", name: "Startup Client", role: "SaaS Founder" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i+1) % items.length);
  const prev = () => setI((i-1+items.length) % items.length);
  const it = items[i];
  return (
    <Section id="testimonials" eyebrow="Kind Words"
      title={<>What clients <span className="gradient-text">say</span>.</>}>
      <div className="relative max-w-3xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center">
          <Quote className="h-10 w-10 text-primary mx-auto mb-6 opacity-70" />
          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}>
              <p className="text-xl sm:text-2xl font-display leading-relaxed text-balance">"{it.quote}"</p>
              <div className="mt-6">
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-muted-foreground">{it.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center items-center gap-3">
          <button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {items.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx===i ? "w-8 bg-[image:var(--gradient-primary)]" : "w-1.5 bg-white/20"}`} />
            ))}
          </div>
          <button onClick={next} className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
