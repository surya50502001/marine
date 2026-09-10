import React from 'react';
import { 
  Anchor, Cpu, Ship, FlaskConical, ArrowUpRight 
} from 'lucide-react';
import { verticals } from '../data/catalog';

const iconMap = {
  Anchor: Anchor,
  Cpu: Cpu,
  Ship: Ship,
  FlaskConical: FlaskConical
};

export default function VerticalsOverview({ onSelectVertical, selectedVertical }) {
  return (
    <section id="verticals" className="py-20 bg-[#070b12] border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Consolidated Operations Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
            Four Core Industry Pillars
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Consolidating specialized marine hardware, heavy steel cutting & forming, shipyard afloat repair, and industrial chemical formulations under one trusted GCC umbrella.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v) => {
            const IconComponent = iconMap[v.icon] || Anchor;
            const isSelected = selectedVertical === v.id;

            return (
              <div
                key={v.id}
                onClick={() => onSelectVertical(v.id)}
                className={`rounded-xl p-6 transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#162133] border-amber-500' 
                    : 'bg-[#121a29] hover:bg-[#162133] border-[#1e293b] hover:border-[#334155]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#0d131f] border border-[#1e293b] flex items-center justify-center text-amber-400 font-bold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#0d131f] text-slate-300 border border-[#1e293b]">
                      {v.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    {v.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-bold text-white mb-2 font-heading uppercase">
                    {v.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-4">
                    {v.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#1e293b] mt-6 flex items-center justify-between text-xs font-mono font-semibold">
                  <span className={isSelected ? 'text-amber-400' : 'text-slate-400'}>
                    {isSelected ? 'Viewing Items' : 'Explore Category'}
                  </span>
                  <div className={`p-1 rounded ${isSelected ? 'bg-amber-500 text-[#070b12]' : 'bg-[#0d131f] text-slate-400'}`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
