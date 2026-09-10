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
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-navy-900 via-[#071322] to-[#050b14]">
      {/* Background Graphic Grid / Atmospheric Glow */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Operations & Class Approval Pill */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-amber-400 font-semibold">24/7 Port Berth Dispatch</span>
              <span className="text-slate-600">•</span>
              <span>UAE & Oman Maritime Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] font-heading">
              Heavy Marine Rigging, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Precision CNC Metal Works
              </span> <br />
              & Offshore Chemicals
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Supplying certified <strong>Galvanized DIN 766 & G80 Chains</strong>, 15kW <strong>CNC Fiber Laser Fabrication</strong>, ASME certified <strong>Ship Repairs</strong>, and IMO approved <strong>Marine Chemical Solvents</strong> across major GCC shipping ports.
            </p>

            {/* Search Input Bar */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto lg:mx-0 relative flex items-center">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search chains (DIN 766, G80), laser cutting, bow shackles, descalers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-32 py-3.5 bg-navy-800/90 border border-slate-700 focus:border-amber-500 rounded-xl text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-xl"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center space-x-1"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-900 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>Browse Product Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenRFQ}
                className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 hover:border-slate-600 transition-all flex items-center space-x-2 shadow-lg"
              >
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>Request Custom Quote</span>
              </button>
            </div>

            {/* Quick trust tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DNV & Lloyd's Proof Tested</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ASME & AWS Certified Welders</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>IMO / Marpol Annex Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Capability Showcase Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-800/60 to-slate-900/90 border border-slate-700/80 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-4">
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                    Industrial Capabilities Matrix
                  </h3>
                  <p className="text-sm font-semibold text-white">4 Unified Core Divisions</p>
                </div>
                <div className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded text-[11px] font-mono font-bold">
                  GCC STOCKED
                </div>
              </div>

              {/* Division Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center space-x-2 text-amber-400 mb-1">
                    <Anchor className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Roma Rigging</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    DIN 766 Calibrated & G80 chains, wire ropes, D-shackles.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center space-x-2 text-blue-400 mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Safari Metal</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    15kW Laser cutting, 400T bending, marine brackets.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                    <Flame className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">MFE Oman</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Ship repair, piping spools, class coded welding afloat.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-violet-500/40 transition-colors">
                  <div className="flex items-center space-x-2 text-violet-400 mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Oasis Chem</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    HD-90 degreasers, descalers, oil spill dispersants.
                  </p>
                </div>
              </div>

              {/* Operational Stats Counter */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xl font-black text-amber-400 font-heading">3,500+</div>
                  <div className="text-[10px] text-slate-400 uppercase">Vessels Supplied</div>
                </div>
                <div>
                  <div className="text-xl font-black text-white font-heading">45,000 T</div>
                  <div className="text-[10px] text-slate-400 uppercase">Steel Fabricated</div>
                </div>
                <div>
                  <div className="text-xl font-black text-cyan-400 font-heading">&lt; 45 Min</div>
                  <div className="text-[10px] text-slate-400 uppercase">Port Mobilization</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
