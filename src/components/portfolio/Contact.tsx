import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "./Section";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  message: z.string().trim().min(5, "Tell me a bit more").max(1200),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"), email: fd.get("email"), message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll reply within 24 hours.");
      e.currentTarget.reset();
    }, 900);
  };

  return (
    <Section id="contact" eyebrow="Let's Talk"
      title={<>Have a project in mind? <span className="gradient-text">Let's build it.</span></>}
      subtitle="Open for freelance work, startup collaborations and creative partnerships.">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "yash.securecode@gmail.com" },
            { icon: Phone, label: "Phone", value: "+971 585818607" },
            { icon: MapPin, label: "Based in", value: "Dubai · India" },
          ].map(c => (
            <div key={c.label} className="glass-strong rounded-2xl p-5 flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                <c.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="glass rounded-2xl p-5 mesh-bg">
            <div className="text-sm text-muted-foreground">Avg response time</div>
            <div className="font-display text-3xl font-bold gradient-text mt-1">{"< 24h"}</div>
          </div>
        </div>

        <motion.form onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-strong rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" type="email" label="Email" placeholder="you@email.com" />
          </div>
          <Field name="message" label="Message" placeholder="Tell me about your project..." multiline />
          <button type="submit" disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] transition disabled:opacity-60">
            {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, placeholder, type="text", multiline=false }: {
  name: string; label: string; placeholder?: string; type?: string; multiline?: boolean;
}) {
  const cls = "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:bg-white/[0.06] placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
      {multiline
        ? <textarea name={name} placeholder={placeholder} rows={5} className={cls} />
        : <input name={name} type={type} placeholder={placeholder} className={cls} />}
    </label>
  );
}
