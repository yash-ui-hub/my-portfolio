export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground font-bold text-xs">Y</span>
          <span>© {new Date().getFullYear()} Yash · Core Creation</span>
        </div>
        <div className="flex gap-5">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
