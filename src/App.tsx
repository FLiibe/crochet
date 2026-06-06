/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import PainPoints from "./components/PainPoints";
import PatternsCatalog from "./components/PatternsCatalog";
import TeacherIntro from "./components/TeacherIntro";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import CheckoutModal from "./components/CheckoutModal";
import StudentPortal from "./components/StudentPortal";
import { Sparkles, Star, Download, Lock, ExternalLink, GraduationCap, CheckCircle } from "lucide-react";

export default function App() {
  const [totalSeconds, setTotalSeconds] = useState(899); // 14 min 59 sec
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [unlockedStudentPortal, setUnlockedStudentPortal] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  // Helper to construct redirection URL preserving current UTM / tracking parameters
  const getRedirectUrl = (newParams: Record<string, string | null>, clearParams: string[] = []) => {
    const params = new URLSearchParams(window.location.search);
    
    // Clear custom parameters if requested
    clearParams.forEach((key) => params.delete(key));
    
    // Add/Update new parameters
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    const searchStr = params.toString();
    return window.location.origin + window.location.pathname + (searchStr ? "?" + searchStr : "");
  };

  // Main programmatic redirection handler using window.location.href
  const navigateTo = (newParams: Record<string, string | null>, clearParams: string[] = []) => {
    const finalUrl = getRedirectUrl(newParams, clearParams);
    window.location.href = finalUrl;
  };

  // Sync state from query parameters on mount or whenever search params exist
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get("page");
    
    if (view === "checkout") {
      setIsCheckoutOpen(true);
      setUnlockedStudentPortal(false);
    } else if (view === "classroom") {
      setIsCheckoutOpen(false);
      setUnlockedStudentPortal(true);
      setStudentName(params.get("name") || "Alumna Tejedora");
      setStudentEmail(params.get("email") || "alumna@correo.com");
    } else {
      setIsCheckoutOpen(false);
      setUnlockedStudentPortal(false);
    }
  }, []);

  // Clean, high-performance, primitive countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownMinutes = Math.floor(totalSeconds / 60);
  const countdownSeconds = totalSeconds % 60;

  const handleOpenCheckout = () => {
    const hotmartBaseUrl = "https://pay.hotmart.com/T105906570E";
    const hotmartParams = new URLSearchParams();
    
    // Set default base parameters for Hotmart
    hotmartParams.set("checkoutMode", "10");

    // Force passing of all page parameters by fetching them from window.location.search
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.forEach((value, key) => {
      hotmartParams.set(key, value);
    });

    const finalUrl = `${hotmartBaseUrl}?${hotmartParams.toString()}`;
    
    // Programmatic redirection utilizing window.location.href
    window.location.href = finalUrl;
  };

  const handleCloseCheckout = () => {
    // Clears checkout page parameter with real redirect preserving campaign search params
    navigateTo({ page: null });
  };

  const handlePaymentSuccess = (name: string, email: string) => {
    // Redirection to unlocked student area with parameters passed across via window.location.href
    navigateTo({
      page: "classroom",
      name: name,
      email: email
    });
  };

  const handleDemoAccess = () => {
    navigateTo({
      page: "classroom",
      name: "Prueba Invitada",
      email: "demostración@tejeamor.com"
    });
  };

  const handleExitPortal = () => {
    // Exit classroom redirect, removing classroom-specific credentials but preserving UTM codes
    navigateTo({ page: null, name: null, email: null });
  };

  // If student portal classroom is active and unlocked:
  if (unlockedStudentPortal) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100" id="classroom-viewport">
        <StudentPortal 
          studentName={studentName || "Alumna Invitada"} 
          studentEmail={studentEmail || "demo@tejeamor.com"} 
          onExitPortal={handleExitPortal}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-rose-500 selection:text-white" id="main-sales-layout">
      
      {/* 1. Header Navigation & Urgency Banner */}
      <HeaderNav 
        onBuyClick={handleOpenCheckout} 
        countdownMinutes={countdownMinutes} 
        countdownSeconds={countdownSeconds} 
      />

      {/* 2. Main Sales Hero presentation */}
      <HeroSection onBuyClick={handleOpenCheckout} />

      {/* 3. Pain Points vs Solutions Comparison Grid */}
      <PainPoints />

      {/* 4. Value Stack: Premium Course Contents summary banner */}
      <section className="w-full py-12 px-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white" id="value-stack-highlights">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: "100% Digital", title: "Manual en PDF", body: "Recetario ilustrado paso a paso en español, listo para guardar en tu móvil o imprimir." },
            { value: "100% Negocio", title: "Licencia de Venta Libre", body: "Teje y vende físicamente cada amigurumi. Quédate con toda la ganancia de tus pedidos." },
            { value: "Pago Único", title: "$6.99 USD Hoy", body: "Sin cobros mensuales, anualidades ni cuotas sorpresa jamás." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5 border-l border-white/20 pl-4">
              <span className="font-mono text-xl sm:text-2xl font-black text-amber-200 block">
                {item.value}
              </span>
              <span className="font-sans font-bold text-sm sm:text-base text-white block">
                {item.title}
              </span>
              <span className="font-sans text-xs text-rose-50 block leading-snug">
                {item.body}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Incredibly beautiful catalog featuring active images and modal review */}
      <PatternsCatalog onUnlockClick={handleOpenCheckout} />

      {/* 6. Professional Bio of craftswoman Ana Valentina Lima */}
      <TeacherIntro />

      {/* 7. Warm student testimonies panel */}
      <Testimonials />

      {/* 8. Interactive FAQs block */}
      <FaqSection />

      {/* 9. Final bottom call-to-action block */}
      <section className="w-full py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden" id="bottom-cta-section">
        {/* Floating background decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/10">
              ⚡ Oferta por pocas horas
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Comienza hoy a crear amigurumi de amor y fe
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Consigue el acceso definitivo de por vida para tejer figuras religiosas bellísimas. No importa si eres principiante o si ya tejes, el método guiado de Ana Valentina cambiará tu arte.
            </p>
          </div>

          {/* Pricing Highlight block */}
          <div className="inline-flex items-center gap-6 bg-slate-850/60 border border-slate-800 p-5 rounded-3xl text-left shadow-lg shrink-0">
            <div className="space-y-0.5">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Precio promocional:</span>
              <span className="font-sans font-black text-rose-500 text-2xl sm:text-3xl block">$6.99 USD</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">✓ Pago único para siempre</span>
              <span className="block mt-0.5">✓ 7 Días de garantía asegurada</span>
            </div>
          </div>

          <div className="space-y-3 max-w-sm sm:max-w-md mx-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenCheckout();
              }}
              className="cursor-pointer w-full bg-gradient-to-r from-rose-500 hover:from-rose-600 hover:to-orange-600 font-sans font-black uppercase text-xs sm:text-sm tracking-wider text-white py-4 px-6 rounded-2xl shadow-lg shadow-rose-500/10 hover:shadow-xl transform hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2"
              id="bottom-action-buy-btn"
            >
              <span>¡SÍ! INICIAR MI APRENDIZAJE</span>
            </button>
            
            <p className="font-sans text-[10px] sm:text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <Lock className="h-4 w-4 text-emerald-500" />
              <span>Pago 100% cifrado seguro • Acceso instantáneo por correo</span>
            </p>
          </div>

        </div>
      </section>

      {/* 10. Clean trust footer */}
      <footer className="w-full bg-slate-950 text-slate-500 text-[11px] sm:text-xs py-10 px-4 border-t border-slate-900 text-center space-y-4" id="main-sales-footer">
        <p className="max-w-xl mx-auto leading-relaxed">
          Curso de Amigurumis Religiosos © {new Date().getFullYear()} • Todos los derechos reservados.<br />
          Esta página está diseñada legítimamente para la divulgación en español del curso de la artesana <strong>Ana Valentina Lima</strong>.
        </p>
        <p className="text-slate-600">
          *Los resultados individuales descritos pueden variar de acuerdo con el empeño técnico de cada alumna. Los $6.99 equivalen a un cobro en dólares según tu entidad bancaria.
        </p>
        
        {/* Visa / checkout footer badges */}
        <div className="flex items-center justify-center gap-4 pt-2 opacity-40">
          <span className="text-[10px] tracking-widest font-black uppercase">Visa</span>
          <span className="text-[10px] tracking-widest font-black uppercase">Mastercard</span>
          <span className="text-[10px] tracking-widest font-black uppercase">PayPal</span>
          <span className="text-[10px] tracking-widest font-black uppercase">Protección SSL</span>
        </div>
      </footer>

      {/* 11. Secure checkout simulator modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
        onSuccess={handlePaymentSuccess} 
      />

    </div>
  );
}
