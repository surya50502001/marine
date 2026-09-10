import React, { useState } from 'react';
import { 
  Shield, Anchor, ArrowRight, Zap, CheckCircle2, 
  Search, Award, Clock, FileCheck, Layers, Cpu, Flame
} from 'lucide-react';

export default function Hero({ onSearchSubmit, onExploreCatalog, onOpenRFQ }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 bg-[#070b12]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Typographic Focus */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#121a29] border border-[#1e293b] px-3.5 py-1.5 rounded text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-amber-400 font-bold">24/7 PORT & ANCHORAGE DISPATCH</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">UAE & OMAN NETWORK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-heading uppercase">
              Heavy Marine Rigging, <br />
              <span className="text-amber-400 font-black">CNC Metal Works</span> <br />
              & Offshore Chemicals
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Supplying certified <strong>Galvanized DIN 766 & G80 Chains</strong> (Roma Reference), 15kW <strong>CNC Fiber Laser Cutting & Bending</strong> (Safari Metal Reference), ASME/Class certified <strong>Ship Repairs</strong> (MFE Oman Reference), and IMO approved <strong>Marine Chemical Solvents</strong> (Oasis Chemical Reference) across GCC shipping ports.
            </p>

            {/* Clean Search Input Bar */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto lg:mx-0 relative flex items-center">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search chains (DIN 766, G80), laser cutting, bow shackles, descalers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-28 py-3.5 bg-[#121a29] border border-[#1e293b] focus:border-amber-500 rounded-lg text-slate-100 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-amber-500 hover:bg-amber-400 text-[#070b12] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-1"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-[#070b12] transition-all flex items-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>Browse Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenRFQ}
                className="px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-[#121a29] hover:bg-[#162133] text-slate-100 border border-[#1e293b] hover:border-[#334155] transition-all flex items-center space-x-2"
              >
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>Request Custom Quote</span>
              </button>
            </div>

            {/* Quick trust tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DNV & Lloyd's Tested</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>6G Class Coded Welders</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>IMO MARPOL Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Solid Flat Capabilities Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#121a29] border border-[#1e293b] space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
                <div>
                  <span className="text-xs font-mono uppercase font-bold tracking-widest text-amber-400">
                    Capabilities Matrix
                  </span>
                  <p className="text-sm font-bold text-white font-heading uppercase">4 Integrated Divisions</p>
                </div>
                <div className="px-2 py-0.5 bg-[#0d131f] text-amber-400 border border-[#1e293b] rounded text-[10px] font-mono font-bold">
                  GCC IN-STOCK
                </div>
              </div>

              {/* Division Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#0d131f] rounded-lg border border-[#1e293b] hover:border-[#334155] transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2 text-amber-400 mb-1">
                    <Anchor className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase font-heading">Roma Rigging</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    DIN 766 & G80 chains, wire ropes, D-shackles.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0d131f] rounded-lg border border-[#1e293b] hover:border-[#334155] transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase font-heading">Safari Metal</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    15kW Laser cutting, 400T press brake bending.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0d131f] rounded-lg border border-[#1e293b] hover:border-[#334155] transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                    <Flame className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase font-heading">MFE Oman</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Ship repair, piping spools, class welding afloat.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0d131f] rounded-lg border border-[#1e293b] hover:border-[#334155] transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2 text-slate-300 mb-1">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase font-heading">Oasis Chem</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    HD-90 degreasers, descalers, oil spill kits.
                  </p>
                </div>
              </div>

              {/* Operational Stats */}
              <div className="pt-4 border-t border-[#1e293b] grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xl font-bold text-white font-mono">3,500+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Ship Calls</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-400 font-mono">45,000 T</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Fabricated</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-emerald-400 font-mono">&lt; 45 Min</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Dispatch</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
