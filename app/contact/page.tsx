"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Clock, ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "general", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Le nom est obligatoire.";
    if (!formData.email.trim()) {
      nextErrors.email = "L'adresse email est obligatoire.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "L'adresse email est invalide.";
    }
    if (!formData.message.trim()) nextErrors.message = "Le message ne peut pas être vide.";
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "general", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#111827] min-h-screen pt-[140px] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
            CONTACT
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-[#111827] leading-tight">
            Nous Contacter
          </h1>
          <p className="font-inter text-slate-500 text-base sm:text-lg">
            Une question sur notre plateforme ? Notre équipe commerciale ou technique vous répond en moins de 24h.
          </p>
        </div>

        {/* Form and Info Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-[24px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
            {isSuccess ? (
              <div className="text-center py-10 space-y-4 animate-fade-in font-inter">
                <div className="inline-flex p-3 bg-emerald-50 text-emerald-500 rounded-full">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  Message envoyé avec succès !
                </h3>
                <p className="text-slate-550 max-w-sm mx-auto text-sm leading-relaxed">
                  Merci de nous avoir contactés. Nous avons bien reçu vos informations et un conseiller vous répondra sous 24 heures maximum.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Rédiger un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-inter">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500">Votre nom</label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 block">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500">Votre email</label>
                    <input
                      type="email"
                      placeholder="jean.dupont@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500">Sujet de votre demande</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-primary"
                  >
                    <option value="general">Question générale</option>
                    <option value="billing">Facturation & Offres</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariats</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-red-500 block">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column — Support Panels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Panel 1 (Direct Email) */}
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex gap-4 items-start">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 font-inter">
                <h4 className="font-outfit text-base font-bold text-[#111827] leading-none">
                  Écrivez-nous directement
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Notre équipe traite vos emails tous les jours de la semaine.
                </p>
                <a 
                  href="mailto:hello@creatabl-ia.com" 
                  className="inline-block text-sm font-bold text-primary hover:underline"
                >
                  hello@creatabl-ia.com
                </a>
              </div>
            </div>

            {/* Panel 2 (Support Hours) */}
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex gap-4 items-start">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 font-inter">
                <h4 className="font-outfit text-base font-bold text-[#111827] leading-none">
                  Heures d&apos;ouverture
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Notre service client et nos développeurs sont à votre disposition :
                </p>
                <span className="inline-block text-xs font-bold text-slate-700">
                  Du lundi au vendredi &bull; 9h00 à 18h00
                </span>
              </div>
            </div>

            {/* Panel 3 (Feature Requests) */}
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex gap-4 items-start">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 font-inter">
                <h4 className="font-outfit text-base font-bold text-[#111827] leading-none">
                  Une idée de fonctionnalité ?
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Soumettez directement vos retours et votez pour les améliorations sur notre tableau de bord.
                </p>
                <a 
                  href="/roadmap" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline hover:gap-1.5 transition-all"
                >
                  <span>Accéder à la Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
