import React, { useState, useEffect } from 'react';
import { 
  Anchor, Phone, Mail, Clock, ShoppingCart, 
  Menu, X, ShieldCheck, ChevronDown, Compass,
  MapPin, FileText, Wrench
} from 'lucide-react';

export default function Navbar({ rfqItems, onOpenRFQ, onNavigateSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalRFQCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-navy-900 border-b border-slate-800 text-xs text-slate-300 transition-all duration-300 ${isScrolled ? 'py-1 hidden md:block' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-amber-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 GCC Emergency Marine Dispatch</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Sharjah • Dubai • Sohar • Muscat • Salalah</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="tel:+97165284900" className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold text-slate-200">+971 6 528 4900</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a href="mailto:quotes@muruganmarine.com" className="hidden sm:flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>sales@muruganmarine.com</span>
            </a>
            <div className="flex items-center space-x-1 bg-navy-800 px-2 py-0.5 rounded border border-slate-700 text-[11px] text-amber-400 font-mono">
              <ShieldCheck className="w-3 h-3" />
              <span>ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800/80 py-3' : 'bg-navy-900/90 backdrop-blur-sm py-4 border-b border-slate-800/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigateSection('hero')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20 text-navy-900 font-black text-xl border border-amber-400/40">
              <Anchor className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase font-heading">
                  MURUGAN
                </span>
                <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  Marine
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                Rigging • Fabrication • Offshore • Chemicals
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => onNavigateSection('verticals')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-all flex items-center space-x-1"
            >
              <span>Core Verticals</span>
            </button>

            <button 
              onClick={() => onNavigateSection('catalog')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-all flex items-center space-x-1"
            >
              <span>Product Catalog</span>
            </button>

            <button 
              onClick={() => onNavigateSection('calculators')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-all flex items-center space-x-1"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-400 mr-1" />
              <span>Technical Tools</span>
            </button>

            <button 
              onClick={() => onNavigateSection('ports')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-all flex items-center space-x-1"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400 mr-1" />
              <span>GCC Ports Network</span>
            </button>

            <button 
              onClick={() => onNavigateSection('projects')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-all"
            >
              <span>Case Studies</span>
            </button>

            <button 
              onClick={() => onNavigateSection('contact')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-all"
            >
              <span>Contact</span>
            </button>
          </div>

          {/* Action CTAs & RFQ Cart */}
          <div className="flex items-center space-x-3">
            {/* RFQ Cart Button */}
            <button
              onClick={onOpenRFQ}
              className="relative p-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all flex items-center space-x-2 group"
              title="View RFQ Quote Builder"
            >
              <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-slate-200">RFQ Cart</span>
              {totalRFQCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-navy-900 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {totalRFQCount}
                </span>
              )}
            </button>

            {/* Request Fast Quote CTA */}
            <button
              onClick={onOpenRFQ}
              className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-amber-500 via-amber-450 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-900 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              Instant RFQ
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <button
            onClick={() => { onNavigateSection('verticals'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Core Verticals
          </button>
          <button
            onClick={() => { onNavigateSection('catalog'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Product Catalog
          </button>
          <button
            onClick={() => { onNavigateSection('calculators'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Engineering Calculators
          </button>
          <button
            onClick={() => { onNavigateSection('ports'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            GCC Ports Network
          </button>
          <button
            onClick={() => { onNavigateSection('projects'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Case Studies
          </button>
          <button
            onClick={() => { onNavigateSection('contact'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Contact & 24/7 Port Support
          </button>
          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => { onOpenRFQ(); setMobileMenuOpen(false); }}
              className="w-full py-3 text-center text-xs uppercase tracking-wider font-bold bg-amber-500 text-navy-900 rounded-lg shadow"
            >
              Open RFQ Quote Builder ({totalRFQCount} items)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
