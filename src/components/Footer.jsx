import React from 'react';
import { Anchor, ShieldCheck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigateSection }) {
  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigateSection('hero')}>
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-navy-900 font-black text-xl">
                <Anchor className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-heading uppercase tracking-wider">
                  MURUGAN
                </span>
                <span className="text-xs text-amber-400 font-bold uppercase ml-1.5">
                  Marine LLC
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Integrated Marine & Offshore Engineering
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Consolidated GCC leader in Marine Rigging (DIN 766 & G80 Chains), High-Capacity CNC Sheet Metal Fabrication, Afloat Shipyard Repairs, and IMO-compliant Marine Chemical Formulations.
            </p>

            <div className="flex items-center space-x-2 text-[11px] text-amber-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2015 & DNV / Lloyd's Registered Supplier</span>
            </div>
          </div>

          {/* Quick Links: Core Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Core Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-amber-400 transition-colors">
                  Galvanized & G80 Chains
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-amber-400 transition-colors">
                  CNC Laser Cutting & Bending
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-amber-400 transition-colors">
                  Offshore Shipyard Repairs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-amber-400 transition-colors">
                  Marine Degreasers & Descalers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-amber-400 transition-colors">
                  Wire Rope Slings & Shackles
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Port Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              GCC Port Operations
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigateSection('ports')} className="hover:text-amber-400">Port Khalid & Hamriyah (Sharjah)</button></li>
              <li><button onClick={() => onNavigateSection('ports')} className="hover:text-amber-400">Jebel Ali & Dubai Maritime City</button></li>
              <li><button onClick={() => onNavigateSection('ports')} className="hover:text-amber-400">Port of Sohar & Freezone (Oman)</button></li>
              <li><button onClick={() => onNavigateSection('ports')} className="hover:text-amber-400">Port of Fujairah Anchorage</button></li>
              <li><button onClick={() => onNavigateSection('ports')} className="hover:text-amber-400">Salalah & Duqm Drydock</button></li>
            </ul>
          </div>

          {/* Contact Fast Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Emergency Dispatch
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-mono font-bold">+971 6 528 4900</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>sales@muruganmarine.com</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Sharjah Ind. Area 13, UAE & Sohar Port, Oman</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Murugan Marine & Offshore Solutions LLC. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-400">Terms of Supply</a>
            <span>•</span>
            <a href="#cert" className="hover:text-slate-400">Quality Certifications</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
