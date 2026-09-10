import React from 'react';
import { Briefcase, MapPin, Award, CheckCircle, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/catalog';

export default function CaseStudies() {
  return (
    <section id="projects" className="py-20 bg-[#060e18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
            Featured GCC Marine Projects & Deliveries
          </h2>
          <p className="text-slate-400 text-sm">
            Discover how our combined rigging, sheet metal, shipyard engineering, and chemical expertise deliver rapid turnaround for international shipowners and offshore operators.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((project, idx) => (
            <div 
              key={idx}
              className="bg-navy-900/80 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-2xl"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
                    {project.vertical}
                  </span>
                  <div className="flex items-center text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-heading uppercase mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-slate-400 font-semibold mb-3">
                  Client: <span className="text-slate-200">{project.client}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Metrics Badge Row */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div className="text-xs font-mono font-bold text-amber-400">{metric.split(' ')[0]}</div>
                    <div className="text-[10px] text-slate-400 truncate">{metric.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
