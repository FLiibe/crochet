/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelpCircle, FileX2, HeartOff, Scissors, Check, AlertCircle, ArrowRight } from "lucide-react";
import { PAIN_POINTS, SOLUTIONS } from "../data";

export default function PainPoints() {
  // Helper to map icons to actual elements safely
  const renderPainIcon = (iconName: string) => {
    switch (iconName) {
      case "HelpCircle":
        return <HelpCircle className="h-6 w-6 text-rose-500" />;
      case "FileX2":
        return <FileX2 className="h-6 w-6 text-rose-500" />;
      case "HeartOff":
        return <HeartOff className="h-6 w-6 text-rose-500" />;
      case "Scissors":
        return <Scissors className="h-6 w-6 text-rose-500" />;
      default:
        return <HelpCircle className="h-6 w-6 text-rose-500" />;
    }
  };

  return (
    <section 
      className="w-full py-16 px-4 bg-slate-50 border-b border-rose-50"
      id="pain-points-section"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            ¿Te pasa esto al tejer?
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            La frustración de intentar crear amigurumis sola, sin una guía clara...
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Sabemos que tienes muchas ganas de crear preciosas imágenes tejidas con tus manos, pero la mayoría de las veces el proceso gratuito de internet se vuelve frustrante.
          </p>
        </div>

        {/* Comparison Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch" id="grid-comparison">
          
          {/* Card 1: Pain Points Grid */}
          <div className="bg-white border border-rose-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between" id="pain-side">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-600 shrink-0" />
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900">
                  El camino difícil (Buscar recetas sueltas)
                </h3>
              </div>
              <div className="h-0.5 bg-rose-100/60 w-full" />
              <p className="font-sans text-xs sm:text-sm text-slate-500">
                ¿Por qué la mayoría de personas que intenta tejer amigurumis religiosos termina dándose por vencida?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {PAIN_POINTS.map((pain) => (
                <div 
                  key={pain.id} 
                  className="bg-rose-50/50 border border-rose-100/30 p-4 rounded-2xl flex flex-col items-start gap-2 text-left hover:border-rose-200 transition-colors"
                >
                  <div className="p-1.5 bg-white border border-rose-100 rounded-xl shadow-xs">
                    {renderPainIcon(pain.icon)}
                  </div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900">
                    {pain.title}
                  </h4>
                  <p className="font-sans font-normal text-[11px] sm:text-xs text-slate-600 leading-snug">
                    {pain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Solutions Grid */}
          <div className="bg-gradient-to-b from-emerald-950 to-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 flex flex-col justify-between text-white" id="solution-side">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-400 bg-emerald-500/20 rounded-full p-0.5 shrink-0" />
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-emerald-100">
                  El camino con Ana Valentina Lima
                </h3>
              </div>
              <div className="h-0.5 bg-emerald-800/60 w-full" />
              <p className="font-sans text-xs sm:text-sm text-emerald-300">
                Diseñamos una experiencia ordenada paso a paso para que crees figuras espectaculares con toda la tranquilidad y disfrute del mundo.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {SOLUTIONS.map((sol, index) => (
                <div 
                  key={sol.id} 
                  className="bg-emerald-900/30 border border-emerald-800/40 p-4 rounded-2xl flex items-start gap-4 text-left hover:bg-emerald-900/40 transition-colors"
                >
                  <div className="font-sans font-black text-rose-400 text-lg sm:text-xl leading-none mt-1 shrink-0 bg-rose-500/10 px-2.5 py-1.5 rounded-lg border border-rose-500/10">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-sm sm:text-base text-white">
                      {sol.title}
                    </h4>
                    <p className="font-sans font-normal text-[11px] sm:text-xs text-emerald-100/80 leading-snug">
                      {sol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Motivational transition message */}
        <div className="bg-rose-50 border border-rose-100 p-5 sm:p-6 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-sans font-bold text-slate-900 text-sm sm:text-base">
              ¡No necesitas experiencia previa para tejer figuras sagradas perfectas!
            </h4>
            <p className="font-sans text-xs text-slate-600">
              Todas las lecciones parten desde absoluta base. Ana Valentina te enseñará cada giro.
            </p>
          </div>
          <div className="flex items-center gap-1.5 font-sans font-bold text-sm text-rose-600 shrink-0 uppercase tracking-widest animate-pulse">
            <span>Mira las figuras que tejerás</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

      </div>
    </section>
  );
}
