/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, CheckCircle2, ShieldCheck, Download, Award, Zap } from "lucide-react";

import heroImg from "../assets/images/hero_catholic_amigurumi_1780752424017.png";

interface HeroSectionProps {
  onBuyClick: () => void;
}

export default function HeroSection({ onBuyClick }: HeroSectionProps) {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-rose-50/40 to-white pt-8 pb-16 sm:py-20 px-4 border-b border-rose-50"
      id="hero-sales-section"
    >
      {/* Absolute decor circles */}
      <div className="absolute top-1/4 -left-36 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
        
        {/* Left Column: Copy & Urgency */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left" id="hero-marketing-copy">
          
          {/* Eye Catching Main Headline */}
          <div className="space-y-3 sm:space-y-4 w-full">
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Teje y Vende Hermosos <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 animate-gradient-x underline decoration-rose-200 decoration-wavy">
                Amigurumis Religiosos
            </span> <br />
              e Inicia Tu Negocio Desde Casa
            </h1>

            {/* Mobile Featured Image: Repositioned right under the title */}
            <div className="block lg:hidden my-5 sm:my-6 w-full max-w-sm sm:max-w-md mx-auto" id="hero-mobile-image-holder">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-3xl blur-md opacity-30" />
                <div className="relative bg-white border-2 border-white rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src={heroImg} 
                    alt="Curso de Amigurumis Religiosos de Ana Valentina Lima" 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-xs p-2.5 rounded-xl text-white flex items-center justify-between border border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Award className="h-4 w-4 text-rose-400 shrink-0" />
                      <span className="text-[10px] font-semibold font-sans text-rose-300">
                        Doble Garantía • 100% Satisfecha
                      </span>
                    </div>
                    <span className="font-black text-rose-400 text-[9px] uppercase tracking-wider">DE POR VIDA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Bullet Points */}
          <div className="space-y-3.5 w-full" id="hero-marketing-bullets">
            {[
              {
                bold: "12 Patrones de Alta Rentabilidad",
                desc: "figuras religiosas exclusivas súper demandadas en bautizos, comuniones y confirmaciones."
              },
              {
                bold: "Licencia Comercial Libre e Ilimitada",
                desc: "vende físicamente cada amigurumi que tejas y quédate con el 100% de tus ganancias."
              },
              {
                bold: "Secretos de acabados premium para la venta",
                desc: "aprende el ensamblado firme y rostros tiernos que justifican precios de venta altos."
              },
              {
                bold: "Guía de costeo y optimización de hilados",
                desc: "aprende a calcular tus cobros para asegurar un excelente margen de ganancia en casa."
              }
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 fill-emerald-50 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-900 font-bold">{bullet.bold}</strong> {bullet.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Buying Actions, Urgent Countdown, Pricing and Trust badges */}
          <div className="w-full bg-white border border-rose-100 p-6 rounded-3xl shadow-xl shadow-rose-900/5 space-y-5" id="hero-checkout-shortcut">
            <div className="flex items-baseline justify-between flex-wrap gap-2 border-b border-slate-50 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 rounded px-2 py-0.5">
                  🔥 Súper Oferta Especial
                </span>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Precio Normal: <span className="line-through font-medium">$29.99 USD</span>
                </p>
              </div>
              <div className="text-right">
                <span className="font-sans font-black text-3xl sm:text-4xl text-rose-600 block animate-pulse">
                  $6.99 USD
                </span>
                <span className="font-sans font-semibold text-[10px] sm:text-xs text-emerald-600 block bg-emerald-50 px-2 py-0.5 rounded">
                  Ahórrate el 75% • Pago Único
                </span>
              </div>
            </div>

            {/* Click call-to-action button */}
            <div className="space-y-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBuyClick();
                }}
                className="w-full cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 font-sans font-black uppercase text-sm sm:text-base text-white py-4 px-6 rounded-2xl shadow-lg shadow-rose-500/20 hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 tracking-wider"
                id="hero-buy-action-btn"
              >
                <span>¡SÍ! QUIERO EL MANUAL DE 12 PATRONES</span>
              </button>
              
              <p className="font-sans text-center text-slate-400 text-[10px] sm:text-xs flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Pago 100% protegido • Acceso instantáneo entregado en tu correo</span>
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Showcase Frame */}
        <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center" id="hero-marketing-image-holder">
          <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-full">
            
            {/* Soft decorative background shadow frame glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-3xl blur-md opacity-30 group-hover:opacity-40 transition-opacity" />
            
            {/* Main Image Frame container */}
            <div className="relative bg-white border-4 border-white rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImg} 
                alt="Curso de Amigurumis Religiosos de Ana Valentina Lima" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                id="hero-main-photo"
              />
              
              {/* Overlay Lifetime Badges inside portrait */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-sm p-3.5 rounded-2xl text-white flex items-center justify-between border border-white/10 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-rose-500 rounded-lg">
                    <Award className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs text-rose-300 uppercase tracking-widest block font-sans">
                      Doble Garantía
                    </span>
                    <span className="text-white text-[11px] sm:text-xs block font-sans font-medium">
                      Calidad Premium ó Reembolso de tu dinero
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] sm:text-xs block text-slate-300">Acceso</span>
                  <span className="font-black text-rose-400 text-xs sm:text-sm block">DE POR VIDA</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white border border-rose-100 rounded-2xl p-2.5 shadow-lg flex items-center gap-2 translate-y-1.5 rotate-3">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <p className="font-mono text-[10px] text-slate-700 font-bold uppercase tracking-wider">
                🟢 12 alumnas inscritas hoy en Latam
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
