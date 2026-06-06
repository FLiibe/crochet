/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, ShieldCheck, Mail, Sparkles, BookOpen } from "lucide-react";

const creatorImg = "https://i.ibb.co/Jj9RNK2S/prof-ana-v-lima.png";

export default function TeacherIntro() {
  return (
    <section 
      className="w-full py-16 px-4 bg-rose-50/30 border-b border-rose-50 relative"
      id="teacher-intro-section"
    >
      <div className="absolute top-10 right-10 w-48 h-48 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Image with Signature border */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center" id="teacher-photo-holder">
          <div className="relative group max-w-sm sm:max-w-md">
            
            {/* Soft decorative glow background */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-400 to-amber-400 rounded-3xl blur-md opacity-25 group-hover:opacity-35 transition-opacity" />
            
            <div className="relative bg-white border-8 border-white rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={creatorImg} 
                alt="Ana Valentina Lima" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-square object-cover"
              />
              
              {/* Teacher bio footer card */}
              <div className="p-4 bg-slate-900 text-white text-left text-xs space-y-1">
                <p className="font-sans font-bold text-sm">Maestra Ana Valentina Lima</p>
                <p className="font-sans text-[10px] text-rose-300 font-semibold uppercase tracking-wider">
                  Tejedora Profesional & Creadora de Contenido
                </p>
              </div>
            </div>

            {/* Overlay interactive mini indicator */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-rose-100 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 transform rotate-2">
              <span className="text-xl">🎨</span>
              <div className="leading-none text-left">
                <span className="font-sans font-black text-xs text-slate-800 block">5+ Años</span>
                <span className="text-[9px] text-slate-500 block">Enseñando Crochet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left" id="teacher-bio-copy">
          
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Conoce a tu instructora
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
              ¡Hola, soy Ana Valentina Lima!
            </h2>
            <div className="h-0.5 bg-rose-200/60 w-24" />
          </div>

          <div className="font-sans text-sm sm:text-base text-slate-700 space-y-4 leading-relaxed">
            <p>
              Empecé en el mundo del crochet hace años como un simple pasatiempo para calmar el estrés diario, pero rápidamente me di cuenta del maravilloso poder que tienen nuestras manos para tejer figuras que transmiten devoción, paz y afecto.
            </p>
            <p>
              Al tejer mis primeros amigurumis religiosos (una virgencita de Fátima y un angelito para el bautizo de mi sobrino), vi la emoción e ilusión en los rostros de las personas. Comprendí que no eran simples muñecos, sino <strong>obras con alma y significado espiritual profundo</strong>.
            </p>
            <p>
              Hoy, mi propósito es ayudarte a saltar todos los obstáculos de traducción y tutoriales confusos. He capacitado a miles de alumnas para tejer con confianza y, sobre todo, para lanzar un próspero y sumamente lucrativo negocio desde sus hogares vendiendo piezas que la gente busca para celebrar bautizos, comuniones y bodas. El nicho religioso es apasionante, está poco explotado y tiene clientes dispuestos a pagar muy bien por el arte hecho a mano.
            </p>
            <p className="font-serif italic text-rose-700 text-base font-semibold">
              "Tejer no es solo pasar lana; es tejer amor y oraciones en cada puntada. ¡Quiero que vivas esta hermosa experiencia conmigo!"
            </p>
          </div>

          {/* Core Values / Teacher Trust Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-rose-100">
            <div className="flex items-start gap-2.5">
              <div className="p-1.5 bg-rose-50 rounded-xl shrink-0">
                <Heart className="h-5 w-5 text-rose-500 fill-rose-500/20" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 block">Amor por los Detalles</span>
                <span className="text-[11px] sm:text-xs text-slate-500 block">Explicaciones claras para rostros dulces y tiernos.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="p-1.5 bg-amber-50 rounded-xl shrink-0">
                <BookOpen className="h-5 w-5 text-amber-500 fill-amber-500/20" />
              </div>
              <div className="text-left space-y-0.5">
                <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 block">Metodología Comprobada</span>
                <span className="text-[11px] sm:text-xs text-slate-500 block">Fórmulas sencillas para tejer sin frustraciones desde hoy.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
