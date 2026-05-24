import { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x:number; y:number; vx:number; vy:number; r:number; c:string };
    let parts: P[] = [];
    const colors = ["rgba(110,231,183,0.7)", "rgba(125,211,252,0.7)", "rgba(196,181,253,0.7)"];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count = Math.min(80, Math.floor(w * h / 18000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3,
        r: Math.random()*1.6 + 0.4,
        c: colors[Math.floor(Math.random()*colors.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0,0,w,h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0||p.x>w) p.vx*=-1;
        if (p.y<0||p.y>h) p.vy*=-1;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.c;
        ctx.fill();
      }
      for (let i=0;i<parts.length;i++) {
        for (let j=i+1;j<parts.length;j++) {
          const a=parts[i], b=parts[j];
          const dx=a.x-b.x, dy=a.y-b.y;
          const d=Math.hypot(dx,dy);
          if (d<120) {
            ctx.strokeStyle = `rgba(125,211,252,${(1-d/120)*0.15})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-70" />
      <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const onMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, oklch(0.74 0.18 165 / 0.10), transparent 50%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} className="pointer-events-none fixed inset-0 -z-[5]" />;
}

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (ref.current) ref.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div ref={ref} className="h-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] transition-[width] duration-100" style={{ width: 0 }} />
    </div>
  );
}
