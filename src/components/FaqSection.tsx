/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FAQItem } from "../types";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section 
      className="w-full py-16 px-4 bg-slate-50 border-b border-rose-50"
      id="faq-accordion-section"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            Resuelve todas tus dudas
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            ¿Tienes alguna duda sobre el manual de Ana Valentina Lima? Revisa las respuestas comunes aquí.
          </p>
        </div>

        {/* FAQ Accordions Grid */}
        <div className="space-y-4" id="faq-accordions-group">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isOpen 
                    ? "border-rose-300 shadow-md ring-1 ring-rose-300/30" 
                    : "border-slate-100 shadow-xs hover:border-rose-200"
                }`}
                id={`faq-accordion-box-${faq.id}`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="cursor-pointer w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-rose-600" : "text-slate-400"}`} />
                    <span className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 bg-slate-50 border border-slate-100 rounded-lg shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4.5 w-4.5 text-slate-600" />
                  </div>
                </button>

                {/* Animated collapse content body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 animate-slide-down">
                    <div className="h-px bg-slate-50 mb-4" />
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-left pl-8">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
