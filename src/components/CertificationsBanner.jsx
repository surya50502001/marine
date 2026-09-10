import React from 'react';
import { ShieldCheck, Award, CheckCircle, FileCheck2 } from 'lucide-react';

export default function CertificationsBanner() {
  const certs = [
    { name: "DNV GL", type: "Class Marine Rigging & Offshore Lifting" },
    { name: "Lloyd's Register", type: "Hull & Pressure Vessel Certification" },
    { name: "ABS (American Bureau)", type: "Approved Welding Facility" },
    { name: "Bureau Veritas", type: "Marine Hardware & Chain Testing" },
    { name: "ISO 9001:2015", type: "Certified Quality Management" },
    { name: "IMO / MARPOL", type: "Annex I & II Approved Chemicals" },
    { name: "ASME 'U' & 'R' Stamp", type: "Pressure Vessel Fabrication" }
  ];

  return (
    <div className="bg-navy-900 border-t border-b border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono text-amber-400 uppercase font-bold tracking-widest">
            Third-Party Verified Quality & Compliance
          </span>
          <h3 className="text-xl font-black text-white font-heading uppercase mt-0.5">
            Class Society Approvals & International Standards
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {certs.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-3 text-center flex flex-col items-center justify-center space-y-1 hover:border-amber-500/40 transition-colors"
            >
              <Award className="w-5 h-5 text-amber-400 mb-0.5" />
              <div className="text-xs font-bold text-white font-mono">{c.name}</div>
              <div className="text-[10px] text-slate-400 leading-tight">{c.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
