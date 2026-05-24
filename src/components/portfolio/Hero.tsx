import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles, Github, Linkedin, Twitter } from "lucide-react";

const phrases = ["Developer.", "Entrepreneur.", "Creative Builder.", "Founder."];

function Typing() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = phrases[i % phrases.length];
    const t = setTimeout(() => {
      if (!del) {
        setTxt(cur.slice(0, txt.length + 1));
        if (txt.length + 1 === cur.length) setTimeout(() => setDel(true), 1300);
      } else {
        setTxt(cur.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? 45 : 90);
    return () => clearTimeout(t);
  }, [txt, del, i]);
  return (
    <span className="gradient-text">
      {txt}<span className="animate-blink text-primary">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative grid place-items-center">
              <span className="absolute h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Available for new opportunities</span>
            <Sparkles className="h-3 w-3 text-primary" />
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
            Hi, I'm <span className="gradient-text">Yash</span>
            <br />
            I build as a <Typing />
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Passionate developer, entrepreneur and creative problem solver focused on building modern digital experiences and scalable brands across <span className="text-foreground font-medium">Dubai</span> and <span className="text-foreground font-medium">India</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition">
              View Work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2 text-muted-foreground">
            {[Github, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-foreground hover:scale-110 transition">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative">
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-30 animate-pulse-glow" />
            <div className="absolute inset-6 rounded-3xl glass-strong gradient-border overflow-hidden">
              <div className="absolute inset-0 mesh-bg" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center space-y-3">
                  <div className="font-mono text-xs text-primary">~/yash --status</div>
                  <div className="font-display text-7xl font-bold gradient-text">{"</>"}</div>
                  <div className="font-mono text-xs text-muted-foreground">building the future</div>
                </div>
              </div>
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
            </div>
            {/* orbiting badges */}
            {["React", "Next", "TS", "Node"].map((label, i) => (
              <motion.div key={label}
                animate={{ rotate: 360 }}
                transition={{ duration: 18 + i*4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="glass-strong rounded-xl px-3 py-1.5 text-xs font-mono shadow-[var(--shadow-elegant)]"
                       style={{ transform: `rotate(${i*90}deg) translateY(-200px) rotate(-${i*90}deg)` }}>
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
