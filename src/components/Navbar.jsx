import React, { useState, useEffect } from 'react';
import { 
  Anchor, Phone, Mail, Clock, ShoppingCart, 
  Menu, X, ShieldCheck, MapPin, FileText, Wrench, Compass
} from 'lucide-react';

export default function Navbar({ rfqItems, onOpenRFQ, onNavigateSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalRFQCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#070b12]/95 backdrop-blur-md border-b border-[#1e293b]">
      {/* Top Bar */}
      <div className={`border-b border-[#1e293b]/60 text-[11px] text-slate-400 transition-all duration-300 ${isScrolled ? 'py-1 hidden md:block' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-amber-400 font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>24/7 GCC PORT MOBILIZATION ACTIVE</span>
            </div>
            <span className="hidden md:inline text-slate-700">/</span>
            <div className="hidden lg:flex items-center space-x-1 text-slate-400 font-mono text-[10px]">
              <span>SHARJAH • DUBAI • SOHAR • MUSCAT • SALALAH • FUJAIRAH</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <a href="tel:+97165284900" className="flex items-center space-x-1.5 text-slate-200 hover:text-amber-400 transition-colors font-bold">
              <Phone className="w-3 h-3 text-amber-500" />
              <span>+971 6 528 4900</span>
            </a>
            <span className="hidden sm:inline text-slate-700">/</span>
            <div className="flex items-center space-x-1 text-slate-300">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>ISO 9001:2015 / DNV VERIFIED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavigateSection('hero')}>
          <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-[#070b12] font-black text-xl group-hover:bg-amber-400 transition-colors">
            <Anchor className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-white uppercase font-heading">
                MURUGAN
              </span>
              <span className="text-[10px] font-mono font-semibold bg-[#121a29] text-amber-400 border border-[#1e293b] px-1.5 py-0.5 rounded uppercase">
                Marine
              </span>
            </div>
            <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase">
              Rigging • CNC Fabrication • Shipyard • Chemicals
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <button 
            onClick={() => onNavigateSection('verticals')}
            className="px-3.5 py-2 rounded-md hover:text-white hover:bg-[#121a29] transition-colors"
          >
            Core Divisions
          </button>

          <button 
            onClick={() => onNavigateSection('catalog')}
            className="px-3.5 py-2 rounded-md hover:text-white hover:bg-[#121a29] transition-colors"
          >
            Catalog & Specs
          </button>

          <button 
            onClick={() => onNavigateSection('calculators')}
            className="px-3.5 py-2 rounded-md hover:text-white hover:bg-[#121a29] transition-colors flex items-center"
          >
            <Wrench className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
            <span>Technical Tools</span>
          </button>

          <button 
            onClick={() => onNavigateSection('ports')}
            className="px-3.5 py-2 rounded-md hover:text-white hover:bg-[#121a29] transition-colors flex items-center"
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
            <span>Port Network</span>
          </button>

          <button 
            onClick={() => onNavigateSection('projects')}
            className="px-3.5 py-2 rounded-md hover:text-white hover:bg-[#121a29] transition-colors"
          >
            Projects
          </button>

          <button 
            onClick={() => onNavigateSection('contact')}
            className="px-3.5 py-2 rounded-md hover:text-white hover:bg-[#121a29] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Action CTAs & RFQ Cart */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenRFQ}
            className="relative p-2.5 bg-[#121a29] hover:bg-[#162133] text-slate-200 rounded-lg border border-[#1e293b] hover:border-[#334155] transition-all flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline text-xs font-mono font-bold">RFQ CART</span>
            {totalRFQCount > 0 && (
              <span className="bg-amber-500 text-[#070b12] font-mono font-bold text-[10px] px-1.5 py-0.2 rounded">
                {totalRFQCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenRFQ}
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold bg-amber-500 hover:bg-amber-400 text-[#070b12] transition-all"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            Instant RFQ
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#121a29] text-slate-300 hover:text-white border border-[#1e293b]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b12] border-b border-[#1e293b] px-6 py-4 space-y-2 text-sm font-semibold">
          <button
            onClick={() => { onNavigateSection('verticals'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-slate-300 hover:text-amber-400"
          >
            Core Divisions
          </button>
          <button
            onClick={() => { onNavigateSection('catalog'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-slate-300 hover:text-amber-400"
          >
            Product Catalog
          </button>
          <button
            onClick={() => { onNavigateSection('calculators'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-slate-300 hover:text-amber-400"
          >
            Technical Tools
          </button>
          <button
            onClick={() => { onNavigateSection('ports'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-slate-300 hover:text-amber-400"
          >
            GCC Ports Network
          </button>
          <button
            onClick={() => { onNavigateSection('projects'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-slate-300 hover:text-amber-400"
          >
            Projects
          </button>
          <button
            onClick={() => { onNavigateSection('contact'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-slate-300 hover:text-amber-400"
          >
            Contact
          </button>
          <button
            onClick={() => { onOpenRFQ(); setMobileMenuOpen(false); }}
            className="w-full py-2.5 bg-amber-500 text-[#070b12] font-bold uppercase rounded-lg text-xs mt-2"
          >
            Open RFQ Quote Builder ({totalRFQCount} items)
          </button>
        </div>
      )}
    </header>
  );
}
