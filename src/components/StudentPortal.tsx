/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Lesson, Pattern } from "../types";
import { STUDENT_LESSONS, PATTERNS_CATALOG } from "../data";
import { Check, BookOpen, Download, HelpCircle, Trophy, Sparkles, Book, FileText, CheckCircle2 } from "lucide-react";

interface StudentPortalProps {
  studentName: string;
  studentEmail: string;
  onExitPortal: () => void;
}

export default function StudentPortal({ studentName, studentEmail, onExitPortal }: StudentPortalProps) {
  const [downloadedCount, setDownloadedCount] = useState(0);
  const [selectedTopicId, setSelectedTopicId] = useState<string>("intro-1");
  const [activeTab, setActiveTab] = useState<"index" | "full-book">("index");
  
  // Responsive navigation for mobile device layout
  const [mobileDetailActive, setMobileDetailActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Interactive recipe checks to simulate tejiendo progress
  const [checkedRounds, setCheckedRounds] = useState<Record<string, Record<number, boolean>>>({});

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const simulateDownload = (name: string) => {
    setDownloadedCount(prev => prev + 1);
    triggerToast(`El PDF de alta resolución "${name}.pdf" con recetas completas y fotos detalladas se ha descargado correctamente en tu dispositivo.`);
  };

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setMobileDetailActive(true);
  };

  const toggleRound = (recipeId: string, roundNum: number) => {
    setCheckedRounds(prev => {
      const currentRecipe = prev[recipeId] || {};
      return {
        ...prev,
        [recipeId]: {
          ...currentRecipe,
          [roundNum]: !currentRecipe[roundNum]
        }
      };
    });
  };

  // Pre-configured rounds for each pattern to make it highly interactive
  const simulatedRounds = [
    { num: 1, text: "Anillo mágico de 6 puntos bajos (pb) [6]" },
    { num: 2, text: "Tejer 6 aumentos (aum) en cada punto [12]" },
    { num: 3, text: "Tejer serie de (1 pb, 1 aum) veces 6 [18]" },
    { num: 4, text: "Tejer serie de (2 pb, 1 aum) veces 6 [24]" },
    { num: 5, text: "Tejer serie de (3 pb, 1 aum) veces 6 [30]" },
    { num: 6, text: "Tejer un pb en cada punto base sin aumentos [30]" },
    { num: 7, text: "Cambio de color e inicio de detalles del manto sagrado en pb [30]" },
    { num: 8, text: "Tejer serie de (3 pb, 1 disminución invisible) veces 6 [24]" },
    { num: 9, text: "Costura de ojos durmientes y relleno firme de poliéster siliconado." }
  ];

  return (
    <div 
      className="w-full min-h-screen bg-slate-950 text-slate-150 py-6 sm:py-10 px-4 flex flex-col items-center justify-start space-y-6"
      id="student-learning-portal"
    >
      {/* Header Container */}
      <div className="max-w-6xl w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 shrink-0">
        <div className="flex items-center gap-3 text-left">
          <div className="p-2.5 bg-rose-500 rounded-full flex items-center justify-center">
            <Book className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-rose-400 font-extrabold uppercase tracking-widest block leading-none">
              Manual Digital Interactivo • Ana Valentina
            </span>
            <h1 className="font-sans font-black text-white text-lg sm:text-2xl mt-1 leading-tight block">
              Bienvenida, {studentName}
            </h1>
            <p className="font-mono text-[10px] text-slate-400">
              Usuario: <span className="text-slate-300 font-medium">{studentEmail}</span> • Acceso al Manual de por vida habilitado
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExitPortal();
            }}
            className="cursor-pointer bg-white/10 hover:bg-white/15 text-white border border-white/10 font-sans font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
            id="back-to-sales"
          >
            <span>🚪 Salir de la Plataforma</span>
          </button>
        </div>
      </div>

      {/* Progress & Quick Stats Row */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-4 shrink-0">
        
        {/* Left progress panel */}
        <div className="md:col-span-8 bg-slate-900 border border-white/5 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1 w-full">
            <span className="text-xs font-mono text-slate-400 block font-medium">Contenido de tu Adquisición por $6.99 USD:</span>
            <span className="text-sm font-sans text-white block font-bold">
              ✓ Manual Digital Completo con las 12 Recetas de Amigurumis Religiosos
            </span>
            <span className="text-xs text-rose-300 block">
              Todos los archivos están optimizados para lectura offline y se pueden descargar de inmediato.
            </span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="md:col-span-4 bg-slate-900 border border-white/5 p-1.5 rounded-2xl flex items-stretch">
          <button
            onClick={() => setActiveTab("index")}
            className={`cursor-pointer flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "index"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/10"
                : "text-slate-400 hover:text-white"
            }`}
          >
            📖 Indice de Capítulos
          </button>
          <button
            onClick={() => setActiveTab("full-book")}
            className={`cursor-pointer flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "full-book"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/10"
                : "text-slate-400 hover:text-white"
            }`}
          >
            📥 Todo el Manual (.PDF)
          </button>
        </div>

      </div>

      {/* Main Panel Content Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
        
        {activeTab === "index" ? (
          <>
            {/* Left Index Sidebar: Intro Capítulos + 12 Patrones */}
            <div className={`lg:col-span-4 bg-slate-900 border border-white/5 rounded-3xl p-4 sm:p-5 flex flex-col h-[65vh] sm:h-[70vh] overflow-y-auto space-y-4 ${mobileDetailActive ? "hidden lg:flex" : "flex"}`}>
              
              {/* Introduction Section */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-slate-400 font-extrabold uppercase tracking-widest text-left block">
                  Secciones de Aprendizaje
                </span>
                
                <div className="space-y-1 text-left">
                  {STUDENT_LESSONS.map((chapter) => {
                    const isActive = selectedTopicId === chapter.id;
                    return (
                      <button
                        key={chapter.id}
                        onClick={() => handleSelectTopic(chapter.id)}
                        className={`cursor-pointer w-full p-2.5 rounded-xl flex items-center gap-2 text-xs font-semibold border transition-all text-left ${
                          isActive 
                            ? "bg-rose-950/40 border-rose-500/35 text-white" 
                            : "bg-transparent border-transparent text-slate-400 hover:bg-slate-950/40 hover:text-white"
                        }`}
                      >
                        <FileText className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                        <span className="line-clamp-1">{chapter.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 12 Recetas Catalog Index Section */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-slate-400 font-extrabold uppercase tracking-widest text-left block">
                  Las 12 Recetas (Paso a Paso)
                </span>
                
                <div className="grid grid-cols-1 gap-1.5 text-left">
                  {PATTERNS_CATALOG.map((pat) => {
                    const isActive = selectedTopicId === pat.id;
                    return (
                      <button
                        key={pat.id}
                        onClick={() => handleSelectTopic(pat.id)}
                        className={`cursor-pointer w-full p-2.5 rounded-xl flex items-center gap-2.5 border transition-all text-left ${
                          isActive 
                            ? "bg-rose-950/40 border-rose-500/35 text-white" 
                            : "bg-transparent border-transparent text-slate-300 hover:bg-slate-950/40 hover:text-white"
                        }`}
                      >
                        <img 
                          src={pat.image} 
                          alt={pat.name} 
                          referrerPolicy="no-referrer"
                          className="w-7 h-7 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 leading-none">
                          <span className="text-xs font-bold block">{pat.name}</span>
                          <span className="text-[8px] font-mono text-slate-500 mt-0.5 block uppercase tracking-wider">
                            Patrón {pat.difficulty}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Panel Main Viewer: Renders Chapter or Active Pattern Details */}
            <div className={`lg:col-span-8 bg-slate-900 border border-white/5 rounded-3xl p-5 sm:p-7 flex flex-col justify-between h-[65vh] sm:h-[70vh] overflow-y-auto text-left ${mobileDetailActive ? "flex" : "hidden lg:flex"}`}>
              
              {/* Back Button for Mobile View */}
              {mobileDetailActive && (
                <button 
                  onClick={() => setMobileDetailActive(false)}
                  className="lg:hidden mb-4 self-start cursor-pointer flex items-center gap-1 bg-white/5 hover:bg-white/10 text-rose-300 font-sans font-bold text-xs px-3.5 py-1.5 rounded-xl border border-white/5 transition-all"
                >
                  ← Volver al Índice
                </button>
              )}
              
              {(() => {
                // Determine what is currently selected
                const selectedChapter = STUDENT_LESSONS.find(c => c.id === selectedTopicId);
                const selectedPattern = PATTERNS_CATALOG.find(p => p.id === selectedTopicId);

                if (selectedChapter) {
                  return (
                    <div className="space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="border-b border-white/10 pb-4">
                          <span className="font-mono text-[10px] text-rose-400 font-extrabold uppercase tracking-widest block leading-none">
                            {selectedChapter.module}
                          </span>
                          <h2 className="font-sans font-black text-white text-xl sm:text-2xl mt-2 block">
                            {selectedChapter.title}
                          </h2>
                        </div>

                        <div className="bg-slate-950/60 p-4 rounded-2xl border border-white/5 leading-relaxed space-y-3">
                          <p className="font-sans text-sm text-slate-300 leading-relaxed font-semibold">
                            Resumen de la Guía:
                          </p>
                          <p className="font-sans text-xs text-slate-400 leading-relaxed">
                            {selectedChapter.description}
                          </p>
                        </div>

                        <div className="space-y-3 pt-2">
                          <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-200">
                            ¿Qué aprenderás en esta lectura?
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-slate-950/30 p-3 rounded-xl border border-white/5 text-xs text-slate-350 space-y-1">
                              <span className="font-bold text-rose-300 block">✓ Explicación de Métodos</span>
                              <span>Paso a paso estructurado con ilustraciones precisas de ganchillo.</span>
                            </div>
                            <div className="bg-slate-950/30 p-3 rounded-xl border border-white/5 text-xs text-slate-350 space-y-1">
                              <span className="font-bold text-rose-300 block">✓ Recomendación Práctica</span>
                              <span>Consejos de tensión del hilo para que no queden huecos feos.</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Download Section button */}
                      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-left leading-tight text-xs text-slate-400">
                          <span className="block font-bold text-slate-300">Tienes el Manual Completo habilitado</span>
                          <span className="block mt-0.5">Puedes descargarlo de inmediato para leer sin internet.</span>
                        </div>
                        <button
                          onClick={() => simulateDownload(selectedChapter.title)}
                          className="cursor-pointer bg-rose-500 hover:bg-rose-600 text-white font-sans font-extrabold text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shrink-0 shadow-lg shadow-rose-500/10"
                        >
                          <Download className="h-4 w-4 shrink-0" />
                          <span>Descargar Guía Ilustrada (PDF)</span>
                        </button>
                      </div>
                    </div>
                  );
                }

                if (selectedPattern) {
                  const checkListRounds = checkedRounds[selectedPattern.id] || {};
                  
                  return (
                    <div className="space-y-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={selectedPattern.image} 
                              alt={selectedPattern.name} 
                              referrerPolicy="no-referrer"
                              className="w-14 h-14 rounded-2xl object-cover border border-white/10"
                            />
                            <div className="text-left">
                              <span className="font-mono text-[9px] bg-rose-500/10 text-rose-400 font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block leading-none">
                                Patrón Amigurumi {selectedPattern.difficulty}
                              </span>
                              <h2 className="font-sans font-black text-rose-100 text-xl sm:text-2xl mt-1 block">
                                {selectedPattern.name}
                              </h2>
                            </div>
                          </div>

                          <button
                            onClick={() => simulateDownload(selectedPattern.name)}
                            className="cursor-pointer bg-white/10 hover:bg-white/15 text-white font-sans font-bold text-xs py-2 px-3.5 rounded-xl border border-white/10 transition-colors flex items-center gap-1.5 shrink-0"
                          >
                            <Download className="h-3.5 w-3.5 text-rose-400" />
                            <span>Descargar Receta (.PDF)</span>
                          </button>
                        </div>

                        {/* Specs grid */}
                        <div className="grid grid-cols-3 gap-2 bg-slate-950/70 p-3.5 rounded-2xl border border-white/5 text-center shrink-0">
                          <div className="border-r border-white/5">
                            <span className="text-[10px] text-slate-500 uppercase block font-mono">Altura Final</span>
                            <span className="text-xs sm:text-sm font-sans font-bold text-white block mt-0.5">{selectedPattern.height}</span>
                          </div>
                          <div className="border-r border-white/5">
                            <span className="text-[10px] text-slate-500 uppercase block font-mono">Ganchillo</span>
                            <span className="text-xs sm:text-sm font-sans font-bold text-white block mt-0.5">{selectedPattern.hookSize}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase block font-mono">Dificultad</span>
                            <span className="text-xs sm:text-sm font-sans font-bold text-amber-200 block mt-0.5">{selectedPattern.difficulty}</span>
                          </div>
                        </div>

                        <div className="space-y-1 text-left">
                          <p className="font-sans text-xs sm:text-sm text-slate-300 italic">
                            "{selectedPattern.description}"
                          </p>
                        </div>

                        {/* Interactive round tracker check lists */}
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-sans font-black text-xs text-slate-200 uppercase tracking-wider">
                              📖 Recetario Paso a Paso (Plan de Vueltas)
                            </h4>
                            <span className="text-[10px] font-mono text-rose-400 font-bold">
                              {Object.values(checkListRounds).filter(Boolean).length} / {simulatedRounds.length} teñidos
                            </span>
                          </div>

                          <div className="space-y-1.5 max-h-36 overflow-y-auto bg-slate-950/40 p-3 rounded-xl border border-white/5">
                            {simulatedRounds.map((round) => {
                              const isChecked = !!checkListRounds[round.num];
                              return (
                                <button
                                  key={round.num}
                                  onClick={() => toggleRound(selectedPattern.id, round.num)}
                                  className="w-full text-left p-2 rounded-lg flex items-center gap-3 hover:bg-slate-900 border border-transparent transition-all"
                                >
                                  <div className="shrink-0">
                                    <div className={`h-4.5 w-4.5 rounded border flex items-center justify-center transition-all ${
                                      isChecked 
                                        ? "bg-rose-500 border-rose-500 text-white" 
                                        : "border-slate-700 bg-slate-950"
                                    }`}>
                                      {isChecked && <Check className="h-3 w-3" />}
                                    </div>
                                  </div>
                                  <span className={`font-sans text-xs leading-none ${isChecked ? "line-through text-slate-500" : "text-slate-350"}`}>
                                    <strong className="text-slate-100 mr-1">Vta {round.num}:</strong>
                                    {round.text}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* Download Section button */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
                        <div className="text-left text-xs text-slate-500 flex items-center gap-1">
                          <Sparkles className="h-4 w-4 text-amber-300" />
                          <span>Manto, cabello, detalles y ensamble vienen graficados con fotos HD.</span>
                        </div>
                        <button
                          onClick={() => simulateDownload(selectedPattern.name)}
                          className="cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-sans font-black text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-rose-500/10"
                        >
                          <Download className="h-4 w-4 shrink-0" />
                          <span>Descargar Patrón Completo (.PDF)</span>
                        </button>
                      </div>
                    </div>
                  );
                }

                // Default Empty State fallback
                return (
                  <div className="text-center py-10 space-y-4">
                    <HelpCircle className="h-10 w-10 text-slate-400 mx-auto animate-pulse" />
                    <p className="text-sm font-sans text-slate-400">Selecciona algún patrón o capítulo en el índice izquierdo para comenzar a tejer.</p>
                  </div>
                );
              })()}

            </div>
          </>
        ) : (
          /* TAB 2: DOWNLOAD THE COMPLETE MANUAL COMBINED PDF */
          <div className="col-span-12 bg-slate-900 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col space-y-6 text-left">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 flex-wrap gap-2">
              <div>
                <h3 className="font-sans font-black text-white text-lg sm:text-xl">
                  Acceso Total al Manual Digital PDF (Las 12 Recetas del Recetario)
                </h3>
                <p className="font-sans text-slate-400 text-xs mt-0.5">
                  Haz clic en el botón de abajo para descargar el libro completo con todas las explicaciones de ganchillo religioso.
                </p>
              </div>
              <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-white/5 text-[10px] sm:text-xs font-mono text-rose-400">
                📥 Descargados en esta sesión: <strong>{downloadedCount} archivos</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Manual Core Details Box */}
              <div className="bg-slate-950/70 p-5 rounded-2xl border border-white/5 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-400 font-bold block">
                    Libro Digital unificado
                  </span>
                  <h4 className="font-sans font-bold text-white text-base">
                    Manual De Amigurumis Religiosos Paso A Paso
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    Un único archivo integrado en alta definición listo para imprimir. Contiene explicaciones y listas exactas de materiales necesarios para las 12 figuras sagradas.
                  </p>
                </div>
                <button
                  onClick={() => simulateDownload("Libro Completo - 12 Amigurumis Religiosos")}
                  className="cursor-pointer w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-sans font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-rose-500/10"
                >
                  <Download className="h-4.5 w-4.5 text-white shrink-0" />
                  <span>Descargar Manual Completo Unificado (.PDF)</span>
                </button>
              </div>

              {/* Printable specs box */}
              <div className="bg-slate-950/70 p-5 rounded-2xl border border-white/5 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-2 text-xs text-slate-300">
                  <h5 className="font-sans font-bold text-slate-100 uppercase tracking-widest text-[10px] font-mono">Especificaciones del Documento</h5>
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>12 Patrones detallados con fotos a color paso a paso.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Guía visual completa de inicio para tejer de cero absoluto.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Formato optimizado A4 para impresión económica.</span>
                  </p>
                </div>
                
                <div className="bg-slate-900 border border-white/10 p-3 rounded-xl flex items-center gap-2.5">
                  <div className="p-2 bg-rose-500/10 border border-rose-500/10 text-rose-400 rounded-lg shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-left leading-tight text-[10px] text-slate-400">
                    <strong className="text-white block">Licencia Comercial Plena:</strong>
                    Puedes tejer y vender físicamente los 12 diseños con total libertad comercial en Latinoamérica.
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Classroom helpful footer details */}
      <div className="max-w-6xl w-full text-center text-slate-500 text-[10px] sm:text-xs pt-4 border-t border-white/5 shrink-0 mb-8">
        📌 Material provisto con derechos comerciales autorizados por la Maestra Ana Valentina Lima. Queda prohibida su reventa del formato PDF.
      </div>

      {/* Floating Interactive Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-80 bg-slate-900 border border-emerald-500/30 text-emerald-100 p-4 rounded-2xl shadow-2xl flex items-start gap-3 backdrop-blur-md animate-fade-in">
          <span className="text-xl shrink-0">✨</span>
          <div className="text-left font-sans">
            <p className="text-xs font-bold text-white uppercase tracking-wider block">Descarga Exitosa</p>
            <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">{toastMessage}</p>
          </div>
        </div>
      )}

    </div>
  );
}
