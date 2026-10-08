"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/plans";

// Cartes de tarifs (PricingCard du design system) avec bascule mensuel / annuel.
export default function PricingCards({ headerAlign = "center" }: { headerAlign?: "center" | "start" }) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div style={{ display: "grid", gap: 40 }}>
      <div style={{ display: "flex", justifyContent: headerAlign === "center" ? "center" : "flex-start" }}>
        <div className="cr-segment" role="tablist" aria-label="Facturation">
          <button className="cr-tab" role="tab" aria-selected={billing === "monthly"} onClick={() => setBilling("monthly")}>
            Mensuel
          </button>
          <button className="cr-tab" role="tab" aria-selected={billing === "yearly"} onClick={() => setBilling("yearly")}>
            Annuel <span className="cr-badge cr-badge--success cr-badge--plain" style={{ height: 20 }}>−20 %</span>
          </button>
        </div>
      </div>

      <div className="ds-pricing-grid">
        {PLANS.map((plan) => {
          const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;
          return (
            <article key={plan.id} className={`cr-price${plan.featured ? " cr-price--featured" : ""}`}>
              {plan.featured && (
                <span className="cr-badge cr-badge--solid cr-badge--plain cr-price-flag" style={{ background: "var(--violet-600)" }}>
                  Le plus populaire
                </span>
              )}
              <div>
                <div className="cr-price-name">{plan.name}</div>
                <p className="cr-muted" style={{ fontSize: 14, lineHeight: "22px", minHeight: 44 }}>{plan.tagline}</p>
              </div>
              <div>
                <div className="cr-price-amount">
                  <strong>{price} €</strong>
                  <span>/ mois</span>
                </div>
                <p className="cr-subtle" style={{ fontSize: 12, lineHeight: "18px" }}>
                  {plan.price.monthly === 0 ? plan.subtext : billing === "yearly" ? `Soit ${price * 12} € par an` : plan.subtext}
                </p>
              </div>
              <a className={`cr-btn cr-btn--block ${plan.featured ? "cr-btn--primary" : "cr-btn--secondary"}`} href={plan.href}>
                {plan.cta}
              </a>
              <hr />
              <ul>
                <li>
                  <Check size={18} aria-hidden="true" />
                  <span>
                    <strong style={{ fontWeight: 600 }}>{plan.credits} crédits / mois</strong>
                    <br />
                    <span className="cr-subtle" style={{ fontSize: 12 }}>1 crédit = 1 post programmé ou publié</span>
                  </span>
                </li>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={18} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="cr-subtle" style={{ fontSize: 12, lineHeight: "18px", marginTop: "auto" }}>{plan.footerText}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
