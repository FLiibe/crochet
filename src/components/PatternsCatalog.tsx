/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pattern } from "../types";
import { PATTERNS_CATALOG } from "../data";

interface PatternsCatalogProps {
  onUnlockClick: () => void;
}

export default function PatternsCatalog({ onUnlockClick }: PatternsCatalogProps) {
  return (
    <section 
      className="w-full py-16 px-4 bg-white border-b border-rose-50"
      id="patterns-catalog-section"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            Diseños y Biblioteca de Patrones
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Descubre los Hermosos Modelos Religiosos Incluidos
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Recibirás patrones limpios, paso a paso con fotos en alta definición listos para imprimir o visualizar en tu celular. Explora los hermosos diseños a continuación:
          </p>
        </div>

        {/* Patterns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4" id="patterns-grid">
          {PATTERNS_CATALOG.map((pattern) => (
            <div 
              key={pattern.id}
              className="group bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-rose-200 transition-all flex flex-col justify-between"
              id={`pattern-card-${pattern.id}`}
            >
              {/* Photo Area without overlay badges */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={pattern.image} 
                  alt={pattern.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text copy */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <h3 className="font-sans font-black text-lg sm:text-xl text-slate-900 group-hover:text-rose-600 transition-colors">
                    {pattern.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[50px]">
                    {pattern.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase CTA at the bottom of the catalog */}
        <div className="text-center pt-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUnlockClick();
            }}
            className="cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-sans font-black text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-lg shadow-rose-500/10 hover:shadow-xl hover:shadow-rose-500/20 transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            id="catalog-unlock-cta"
          >
            <span>Quiero el Manual Completo</span>
          </button>
        </div>

      </div>
    </section>
  );
}
