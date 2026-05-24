import { Section } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services do you offer?", a: "Web development, UI/UX design, branding, content production and growth marketing — under Core Creation." },
  { q: "Do you work with international clients?", a: "Yes — I actively work with brands across Dubai, India and remote teams worldwide." },
  { q: "What's your typical project timeline?", a: "Landing pages: 1–2 weeks. Full web apps: 4–10 weeks depending on scope. Brand campaigns: 2–6 weeks." },
  { q: "Do you offer ongoing support?", a: "Absolutely. I offer monthly retainers for development, content and marketing support." },
  { q: "How do we get started?", a: "Send a brief through the contact form. I'll reply within 24 hours with next steps." },
];

export function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ"
      title={<>Questions, <span className="gradient-text">answered</span>.</>}>
      <div className="max-w-3xl mx-auto glass-strong rounded-2xl p-2 sm:p-4">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-white/5">
              <AccordionTrigger className="px-4 text-left hover:no-underline font-display">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
