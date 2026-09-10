import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, ShieldAlert, Globe 
} from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'rigging',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#07111e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>24/7 Port Technical Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
            Connect With Our Marine Engineering Desk
          </h2>
          <p className="text-slate-400 text-sm">
            Whether you require emergency anchor chain delivery at anchorage, custom laser cutting of marine brackets, or full voyage ship repair mobilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Branch Offices & 24/7 Hotline */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 24/7 Emergency Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-navy-800 to-navy-900 border border-amber-500/30 shadow-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-navy-900 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                    24/7 Duty Marine Engineer
                  </span>
                  <div className="text-xl font-black text-white font-heading">
                    +971 6 528 4900
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct mobile line to port boarding officers for urgent vessel parts, chain certificate issuance, and chemical bunker supply.
              </p>
            </div>

            {/* UAE Head Office */}
            <div className="p-5 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm font-heading uppercase">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Sharjah & Dubai Headquarters (UAE)</span>
              </div>
              <p className="text-xs text-slate-300">
                Industrial Area 13, Near Port Khalid & Hamriyah Freezone, Sharjah, United Arab Emirates.
              </p>
              <div className="text-xs text-slate-400 pt-1">
                Email: <span className="text-slate-200">uae@muruganmarine.com</span>
              </div>
            </div>

            {/* Oman Heavy Engineering Hub */}
            <div className="p-5 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm font-heading uppercase">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Sohar & Muscat Engineering Yard (Oman)</span>
              </div>
              <p className="text-xs text-slate-300">
                Sohar Industrial City (Madayn), Phase 5, Adjacent to Port of Sohar, Sultanate of Oman.
              </p>
              <div className="text-xs text-slate-400 pt-1">
                Email: <span className="text-slate-200">oman@muruganmarine.com</span>
              </div>
            </div>

          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-navy-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-lg font-bold text-white uppercase font-heading mb-1">
              Send Direct Message / Procurement Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our technical sales team will review your specifications and reply with a complete technical quote.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white uppercase font-heading">
                  Message Transmitted Successfully
                </h4>
                <p className="text-xs text-slate-300">
                  Thank you. A duty sales engineer has been assigned and will contact you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-3 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="purchaser@vesselcorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-3 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Contact Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 55 987 6543"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-3 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Division of Interest</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-3 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="rigging">Marine Rigging & Chains (Roma)</option>
                      <option value="fabrication">CNC Metal Laser & Bending (Safari)</option>
                      <option value="offshore">Shipyard & Afloat Repairs (MFE Oman)</option>
                      <option value="chemicals">Marine Chemicals & Solvents (Oasis)</option>
                      <option value="general">Comprehensive Fleet Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-semibold">Inquiry Scope / Technical Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter required sizes, certifications, delivery port, or estimated docking schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-3 focus:border-amber-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-900 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
