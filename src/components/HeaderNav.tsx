/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Heart } from "lucide-react";

interface HeaderNavProps {
  onBuyClick: () => void;
  countdownMinutes: number;
  countdownSeconds: number;
}

export default function HeaderNav({ onBuyClick, countdownMinutes, countdownSeconds }: HeaderNavProps) {
  const formatTime = (min: number, sec: number) => {
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <header className="relative z-40 w-full" id="header-nav-container">
      {/* Dynamic Announcement Urgency Banner */}
      <div 
        className="w-full bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 py-2.5 px-4 text-center text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 animate-pulse shadow-md"
        id="announcement-banner"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-amber-200" />
        <span>¡OFERTA DE LANZAMIENTO SÓLO HOY! 75% DE DESCUENTO ADICIONAL —</span>
        <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold tracking-wider text-amber-100 border border-white/20">
          QUEDAN {formatTime(countdownMinutes, countdownSeconds)} MIN
        </span>
      </div>
    </header>
  );
}
