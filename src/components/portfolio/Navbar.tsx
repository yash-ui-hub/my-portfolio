import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) { setActive(l.id); break; }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={cn(
          "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all",
          scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : "bg-transparent"
        )}>
          <a href="#home" className="group flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform group-hover:scale-110">Y</span>
            <span className="hidden sm:block">Yash<span className="gradient-text">.dev</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}>
                {active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/yash-ui-hub" target="_blank" rel="noreferrer"
               className="hidden sm:grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition">
              <Github className="h-4 w-4" />
            </a>
            <a href="#contact"
               className="hidden sm:inline-flex items-center rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition">
              Let's Talk
            </a>
            <button onClick={() => setOpen(o => !o)} className="md:hidden grid h-9 w-9 place-items-center rounded-full glass">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}
                 className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm">{l.label}</a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
