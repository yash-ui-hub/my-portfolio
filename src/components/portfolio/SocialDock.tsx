import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const links = [
  { Icon: Github, href: "https://github.com/yash-ui-hub", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/yash-solanki-b230b4395?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com/yash_solanki_0703?igsh=MWFqeXJmMm11N3ZpeA==", label: "Instagram" },
  { Icon: Mail, href: "mailto:yash.securecode@gmail.com", label: "Email" },
];

export function SocialDock() {
  return (
    <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 glass-strong rounded-full p-2">
      {links.map(({ Icon, href, label }) => (
        <a key={label} href={href} aria-label={label}
          className="group relative grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 transition">
          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
        </a>
      ))}
      <div className="mx-auto my-1 h-8 w-px bg-white/10" />
    </div>
  );
}
