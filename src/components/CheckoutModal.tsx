/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ShieldCheck, Lock, CreditCard, ShoppingBag, Loader2, Sparkles, CheckCircle2, Ticket } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (studentName: string, studentEmail: string) => void;
}

export default function CheckoutModal({ isOpen, onClose, onSuccess }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");
  const [loadingStep, setLoadingStep] = useState("");

  if (!isOpen) return null;

  // Validate fields in Spanish
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Por favor ingresa tu nombre completo";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Ingresa un correo electrónico de acceso válido";
    }

    if (paymentMethod === "card") {
      const cleanCard = formData.cardNumber.replace(/\s+/g, "");
      if (cleanCard.length < 16) {
        errors.cardNumber = "Número de tarjeta incompleto (deben ser 16 dígitos)";
      }
      if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        errors.cardExpiry = "Formato de expiración inválido (MM/AA)";
      }
      if (formData.cardCvc.length < 3) {
        errors.cardCvc = "Código CVC inválido (mínimo 3 dígitos)";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    simulatePaymentProgress();
  };

  const simulatePaymentProgress = () => {
    setStatus("processing");
    
    // Staged loading steps for premium simulation
    const steps = [
      "Verificando pasarela de pago segura...",
      "Validando datos de tarjeta bancaria...",
      "Registrando tu correo para acceso de por vida...",
      "Estructurando tus 12 Patrones Religiosos...",
      "¡Generando tu manual digital ilustrado en PDF!"
    ];

    let currentStepIdx = 0;
    setLoadingStep(steps[currentStepIdx]);

    const interval = setInterval(() => {
      currentStepIdx++;
      if (currentStepIdx < steps.length) {
        setLoadingStep(steps[currentStepIdx]);
      } else {
        clearInterval(interval);
        setStatus("success");
      }
    }, 1200);
  };

  const handleFinishAndEnter = () => {
    onSuccess(formData.name || "Alumna Tejedora", formData.email || "alumna@correo.com");
  };

  // Card input formatting helper
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/gi, "");
    if (value.length > 16) value = value.slice(0, 16);
    // Format: XXXX XXXX XXXX XXXX
    const match = value.match(/\d{1,4}/g);
    const formatted = match ? match.join(" ") : value;
    setFormData({ ...formData, cardNumber: formatted });
  };

  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/gi, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setFormData({ ...formData, cardExpiry: value });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in"
      id="checkout-viewport-modal"
    >
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-rose-100 flex flex-col max-h-[92vh]"
        id="payment-modal-card"
      >
        
        {/* Header Ribbon bar */}
        <div className="bg-slate-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-rose-500 fill-rose-500/20" />
            <div>
              <h3 className="font-sans font-black text-sm tracking-wide uppercase leading-none block">
                Inscripción Segura
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                Pasarela Protegida SSL • Encriptación 256-Bit
              </span>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="cursor-pointer text-slate-400 hover:text-white font-sans text-xs font-bold bg-slate-850 px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
          >
            ✕ Salir
          </button>
        </div>

        {/* Content Box with switch layouts */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-left">
          
          {/* STATE 1: LOADING TIMELINE PROCESSING */}
          {status === "processing" && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-6" id="payment-loading-screen">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-xl scale-125 animate-pulse" />
                <Loader2 className="h-14 w-14 text-rose-500 animate-spin" />
              </div>
              <div className="space-y-2 max-w-sm">
                <h4 className="font-sans font-extrabold text-lg text-slate-900 tracking-tight leading-none block">
                  Procesando tu matrícula...
                </h4>
                <p className="font-sans text-slate-500 text-xs sm:text-sm animate-pulse">
                  {loadingStep}
                </p>
              </div>
              <p className="font-mono text-[9px] text-slate-400 font-medium">
                No cierres ni refresques esta ventana • Transacción Segura
              </p>
            </div>
          )}

          {/* STATE 2: METICULOUS PAY SUCCESS CELEBRATION */}
          {status === "success" && (
            <div className="py-6 flex flex-col items-center text-center space-y-6" id="payment-success-celebration">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full blur-sm opacity-30 animate-pulse" />
                <div className="relative bg-emerald-500 text-white rounded-full p-4 border-4 border-white shadow-xl flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="h-12 w-12 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-200">
                  <Sparkles className="h-3 w-3 fill-emerald-500 text-emerald-500" />
                  <span>¡Adquisición Aprobada!</span>
                </div>
                <h3 className="font-sans font-black text-2xl text-slate-900 leading-tight">
                  ¡BIENVENIDA AL APRENDIZAJE, {formData.name.toUpperCase()}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Hemos enviado tu enlace de descarga y tu manual digital interactivo en PDF al correo electrónico <strong className="text-rose-600">{formData.email}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl w-full text-left space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-800">📦 Resumen de Acceso Desbloqueado:</p>
                <div className="grid grid-cols-2 gap-2 font-medium">
                  <div>• Manual de por vida</div>
                  <div>• 12 Patrones PDF</div>
                  <div>• Guía Ilustrada de Inicio</div>
                  <div>• Licencia Comercial Plena</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinishAndEnter}
                className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-sans font-black text-sm tracking-wider uppercase py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-transform"
                id="enter-classroom-btn"
              >
                <span>🔓 INGRESAR AL MANUAL DIGITAL AHORA</span>
              </button>
            </div>
          )}

          {/* STATE 0: DEFAULT FORM SELECTION & INPUT FIELDS */}
          {status === "idle" && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-5" id="checkout-form">
              
              {/* Offer recap bar */}
              <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 flex items-center justify-between gap-3 shrink-0 text-slate-900">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-200">
                    <Ticket className="h-4.5 w-4.5 text-amber-700" />
                  </div>
                  <div className="text-left leading-none space-y-1">
                    <span className="font-sans font-black text-xs block text-amber-900">
                      Manual Digital + 12 Patrones PDF
                    </span>
                    <span className="font-sans text-[10px] text-amber-700 font-semibold block">
                      Acceso de por vida • Listo para Imprimir
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-black text-base text-rose-600 block leading-none">
                    $6.99
                  </span>
                  <span className="text-[9px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded block whitespace-nowrap mt-1">
                    75% Dcto. aplicado
                  </span>
                </div>
              </div>

              {/* SECTION A: STUDENT BILLING DATA */}
              <div className="space-y-3">
                <label className="font-sans font-bold text-xs text-slate-800 uppercase tracking-widest block leading-none">
                  👤 1. Datos para tu Cuenta de Alumna:
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium focus:ring-1 focus:outline-hidden ${
                        formErrors.name 
                          ? "border-rose-400 focus:ring-rose-400 focus:bg-white" 
                          : "border-slate-200 focus:ring-rose-300 focus:bg-white"
                      }`}
                      id="billing-name-input"
                    />
                    {formErrors.name && (
                      <p className="font-sans text-[10px] text-rose-500 font-semibold pl-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium focus:ring-1 focus:outline-hidden ${
                        formErrors.email 
                          ? "border-rose-400 focus:ring-rose-400 focus:bg-white" 
                          : "border-slate-200 focus:ring-rose-300 focus:bg-white"
                      }`}
                      id="billing-email-input"
                      autoComplete="email"
                    />
                    {formErrors.email && (
                      <p className="font-sans text-[10px] text-rose-500 font-semibold pl-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <p className="font-sans text-[10px] text-slate-400">
                  *Asegúrate de ingresar un correo real. Allí se te enviarán tu contraseña de inicio y los enlaces de descarga directa.
                </p>
              </div>

              {/* PAYMENT SWITCH SELECTION */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="font-sans font-bold text-xs text-slate-800 uppercase tracking-widest block leading-none">
                  💳 2. Selecciona tu método de pago seguro:
                </label>
                
                <div className="grid grid-cols-2 gap-2" id="payment-method-switch">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`cursor-pointer border p-3 rounded-2xl flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "card"
                        ? "bg-rose-50/50 border-rose-500 text-rose-700 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <CreditCard className="h-4 w-4 shrink-0" />
                    <span className="font-sans font-bold text-xs">Tarjeta de Crédito</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`cursor-pointer border p-3 rounded-2xl flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "paypal"
                        ? "bg-amber-50/50 border-amber-500 text-amber-800 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-sm">🅿️</span>
                    <span className="font-sans font-bold text-xs-plus font-bold">PayPal</span>
                  </button>
                </div>
              </div>

              {/* FORM PAYPAL ACTION VIEW */}
              {paymentMethod === "paypal" ? (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-4 animate-slide-down" id="paypal-placeholder">
                  <p className="font-sans text-xs text-slate-600">
                    Paga de forma rápida y súper segura utilizando el saldo de tu cuenta de **PayPal** o tus tarjetas asociadas de forma confidencial.
                  </p>
                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-sans font-black text-xs py-3.5 px-4 rounded-xl shadow-xs transition-colors tracking-wide flex items-center justify-center gap-2"
                  >
                    <span>Log in with PayPal & Pagar $6.99</span>
                  </button>
                </div>
              ) : (
                /* FORM CREDIT CARD ACTION AREA */
                <div className="space-y-3.5 bg-slate-50 border border-slate-100 p-4 rounded-2xl animate-slide-down" id="card-fields-box">
                  <div className="space-y-1">
                    <span className="font-sans font-medium text-[11px] text-slate-500 block">Número de tarjeta</span>
                    <input
                      type="text"
                      placeholder="4000 1234 5678 9010"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      className={`w-full bg-white border px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono tracking-widest focus:ring-1 focus:outline-hidden ${
                        formErrors.cardNumber ? "border-rose-400 focus:ring-rose-400" : "border-slate-200 focus:ring-rose-300"
                      }`}
                      id="card-number-input"
                    />
                    {formErrors.cardNumber && (
                      <p className="font-sans text-[10px] text-rose-500 font-semibold pl-1">
                        {formErrors.cardNumber}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <span className="font-sans font-medium text-[11px] text-slate-500 block">Expiración</span>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={formData.cardExpiry}
                        onChange={handleCardExpiryChange}
                        className={`w-full bg-white border px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono tracking-wider text-center focus:ring-1 focus:outline-hidden ${
                          formErrors.cardExpiry ? "border-rose-400 focus:ring-rose-400" : "border-slate-200 focus:ring-rose-300"
                        }`}
                        id="card-expiry-input"
                      />
                      {formErrors.cardExpiry && (
                        <p className="font-sans text-[10px] text-rose-500 font-semibold pl-1">
                          {formErrors.cardExpiry}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-sans font-medium text-[11px] text-slate-500 block">CVC Security</span>
                        <span className="text-[10px] text-slate-300 font-mono" title="3 dígitos en la parte trasera">¿Qué es?</span>
                      </div>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value.replace(/\D/g, "") })}
                        className={`w-full bg-white border px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-center focus:ring-1 focus:outline-hidden ${
                          formErrors.cardCvc ? "border-rose-400 focus:ring-rose-400" : "border-slate-200 focus:ring-rose-300"
                        }`}
                        id="card-cvc-input"
                      />
                      {formErrors.cardCvc && (
                        <p className="font-sans text-[10px] text-rose-500 font-semibold pl-1">
                          {formErrors.cardCvc}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Big central Submit action trigger btn */}
              <button
                type="submit"
                className="cursor-pointer w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-sans font-black text-xs sm:text-sm uppercase py-4 px-6 rounded-2xl shadow-md shadow-rose-500/10 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-transform"
                id="submit-payment-btn"
              >
                <Lock className="h-4.5 w-4.5 shrink-0" />
                <span>PAGAR SEGURO $6.99 USD</span>
              </button>

              {/* Safeties badges inside checkouthome */}
              <div className="flex items-center justify-center gap-3 text-slate-400 text-[10px] sm:text-xs pt-1 border-t border-slate-100">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-600">Garantía Incondicional de Reembolso de 7 Días</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
