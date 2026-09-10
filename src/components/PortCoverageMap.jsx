import React, { useState } from 'react';
import { 
  Compass, MapPin, Clock, Phone, Ship, 
  CheckCircle2, ArrowRight, ShieldCheck, Anchor 
} from 'lucide-react';
import { ports } from '../data/catalog';

export default function PortCoverageMap({ onOpenRFQ }) {
  const [selectedPort, setSelectedPort] = useState(ports[0]);

  return (
    <section id="ports" className="py-20 bg-navy-900/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic GCC Maritime Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
            Port & Anchorage Mobilization Network
          </h2>
          <p className="text-slate-400 text-sm">
            Operating dedicated fabrication workshops, rigging yards, and chemical stock points within minutes of the Arabian Gulf and Sea of Oman major shipping hubs.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Port List Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 px-1">
              Select Port or Bunkering Hub:
            </h3>
            {ports.map((port, idx) => {
              const isSelected = selectedPort.name === port.name;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedPort(port)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected 
                      ? 'bg-navy-800 border-amber-500 shadow-lg shadow-amber-500/10' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isSelected ? 'bg-amber-500 text-navy-900' : 'bg-slate-800 text-slate-400'}`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight font-heading">
                        {port.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-0.5">
                        <span className="text-amber-400 font-semibold">{port.country}</span>
                        <span>•</span>
                        <span className="flex items-center text-emerald-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {port.dispatchTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-1 rounded-full ${isSelected ? 'bg-amber-400/20 text-amber-400' : 'text-slate-600'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Port Detail & Fleet Dispatch Card */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-navy-800 to-slate-900 rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-5">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                    Operational Deployment Hub
                  </span>
                  <h3 className="text-2xl font-black text-white font-heading uppercase mt-0.5">
                    {selectedPort.name}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-emerald-400 text-xs font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Mobilization: {selectedPort.dispatchTime}</span>
                </div>
              </div>

              {/* Services Available at Port */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-3">
                  On-Site Capabilities & Supply Facilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPort.services.map((srv, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="font-medium">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Hotline & Direct Port Dispatch CTA */}
              <div className="p-4 rounded-xl bg-navy-900 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Port Dispatch Duty Officer:</div>
                    <div className="text-sm font-black text-white font-mono">{selectedPort.contact}</div>
                  </div>
                </div>

                <button
                  onClick={onOpenRFQ}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-navy-900 transition-colors shadow-md flex items-center justify-center space-x-1.5"
                >
                  <Ship className="w-4 h-4" />
                  <span>Request Berth Delivery</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
