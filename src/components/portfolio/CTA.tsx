import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center mesh-bg">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono mb-5">
              <Sparkles className="h-3 w-3 text-primary" /> Now booking new projects
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-balance">
              Ready to build something <span className="gradient-text">remarkable</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Let's turn your idea into a product, brand or campaign that stands out.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-2 mt-7 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition">
              Start a project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
