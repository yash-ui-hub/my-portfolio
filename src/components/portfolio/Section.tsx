import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, subtitle, children, className }: {
  id: string; eyebrow?: string; title: ReactNode; subtitle?: string; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary">
              <span className="h-1 w-6 bg-primary rounded-full" /> {eyebrow}
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground text-balance">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
