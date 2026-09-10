import React from 'react';
import { 
  Anchor, Cpu, Ship, FlaskConical, ArrowUpRight, 
  CheckCircle, Sparkles, Layers, ShieldAlert 
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
    <section id="verticals" className="py-20 bg-[#060e18] relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Maritime & Industrial Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
            Four Core Engineering & Supply Verticals
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
                className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-navy-800/90 border-amber-500 shadow-xl shadow-amber-500/10 -translate-y-1' 
                    : 'bg-navy-900/60 hover:bg-navy-800/70 border-slate-800 hover:border-slate-700 hover:-translate-y-1'
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${v.color} text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {v.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    {v.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2 font-heading">
                    {v.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-4">
                    {v.description}
                  </p>
                </div>

                {/* Bottom Call to Action */}
                <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-200'}>
                    {isSelected ? 'Viewing Products' : 'Explore Category'}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-500 text-navy-900' : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'}`}>
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
