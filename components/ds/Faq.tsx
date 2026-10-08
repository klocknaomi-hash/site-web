import { Plus } from "lucide-react";
import { FAQS } from "@/lib/faq";

// Questions fréquentes en accordéon (composant Accordion du design system).
export default function Faq({ items = FAQS }: { items?: { question: string; answer: string }[] }) {
  return (
    <div className="cr-faq">
      {items.map((item, i) => (
        <details key={item.question} open={i === 0}>
          <summary>
            {item.question}
            <span className="cr-faq-plus" aria-hidden="true"><Plus size={18} /></span>
          </summary>
          <div>{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
