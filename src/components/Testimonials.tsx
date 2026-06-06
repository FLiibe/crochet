/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageCircle, Quote, ShieldCheck, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section 
      className="w-full py-16 px-4 bg-white border-b border-rose-50"
      id="student-testimonials-section"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Historias de Éxito y Alegría
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Lo que dicen nuestras alumnas tejedoras...
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Únete a una comunidad activa de mujeres que han encontrado en el crochet religioso una fuente de ingresos extra, paz mental y una hermosa expresión de su fe.
          </p>
        </div>

        {/* Testimonials Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials-card-grid">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="bg-slate-50 border border-slate-100/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-start space-y-6 hover:shadow-xl hover:border-rose-100 transition-all relative"
              id={`test-box-${test.id}`}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-rose-500/10 shrink-0 pointer-events-none" />

              <div className="space-y-4">
                {/* Ranking and Date */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-slate-400 font-medium">
                    {test.date}
                  </span>
                </div>

                {/* Comment quote text */}
                <p className="font-sans text-slate-700 text-xs sm:text-sm leading-relaxed text-left">
                  "{test.comment}"
                </p>
              </div>

              {/* Student Metadata Card info */}
              <div className="flex items-center gap-3 border-t border-slate-200/50 pt-4 w-full text-left">
                <div className={`p-2.5 sm:p-3 rounded-2xl shrink-0 font-sans font-black text-xs sm:text-sm ${test.avatarColor}`}>
                  {test.name.split(" ").map(word => word[0]).join("").toUpperCase()}
                </div>
                <div>
                  <span className="font-sans font-bold text-slate-900 text-xs sm:text-sm block">
                    {test.name}
                  </span>
                  <p className="font-sans text-[11px] text-slate-500 block leading-tight">
                    {test.location} • <span className="text-rose-600 font-semibold">{test.projectDescription}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big satisfaction guarantee visual plate spacer */}
        <div 
          className="bg-gradient-to-br from-amber-50/50 via-rose-50/50 to-amber-50/20 border border-rose-100 rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          id="guarantee-badge-container"
        >
          {/* Guarantee icon layout columns */}
          <div className="md:col-span-3 flex flex-col items-center justify-center text-center space-y-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400 rounded-full blur-xs opacity-30 animate-pulse" />
              <div className="relative bg-amber-400 text-white rounded-full p-4 border-4 border-white shadow-lg">
                <ShieldCheck className="h-10 w-10 text-white" />
              </div>
            </div>
            <span className="font-mono text-[10px] text-amber-700 font-bold uppercase tracking-wider block">
              Compra 100% Segura
            </span>
          </div>

          {/* Guarantee text descriptions */}
          <div className="md:col-span-9 text-left space-y-3">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900">
              Garantía Incondicional de Satisfacción de 7 Días
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              No tienes absolutamente nada que perder y un mundo hermoso de amigurumis por ganar. Inscríbete hoy al <strong>Curso de Amigurumis Religiosos</strong> de Ana Valentina Lima. Explora las lecciones, descarga los patrones y teje tus primeros santitos. Si dentro de los primeros 7 días sientes que no cumple tus expectativas, te reembolsamos los $6.99 USD de inmediato, sin rodeos y con una sonrisa. ¡Confiamos plenamente en nuestro contenido!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
