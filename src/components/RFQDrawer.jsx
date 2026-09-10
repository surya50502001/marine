import React, { useState } from 'react';
import { 
  X, Trash2, Plus, Minus, Send, CheckCircle2, 
  FileText, MapPin, Calendar, Building, Phone, Mail, 
  Download, Printer, Sparkles 
} from 'lucide-react';
import { ports } from '../data/catalog';

export default function RFQDrawer({ isOpen, onClose, rfqItems, onUpdateQuantity, onRemoveItem, onClearRFQ }) {
  if (!isOpen) return null;

  const [destinationPort, setDestinationPort] = useState(ports[0].name);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vesselName, setVesselName] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  const handleSubmitRFQ = (e) => {
    e.preventDefault();
    if (rfqItems.length === 0) {
      alert("Please add at least one product or service to your RFQ.");
      return;
    }
    const generatedRFQ = `RFQ-MRG-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedRFQ);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearRFQ();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-2xl bg-navy-900 border-l border-slate-700 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 bg-navy-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading uppercase">
                Request for Quotation (RFQ) Builder
              </h3>
              <p className="text-xs text-slate-400">
                {rfqItems.length} item(s) selected for GCC Port Supply
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {submitted ? (
            /* Success View */
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Quotation Request Successfully Transmitted
                </span>
                <h3 className="text-2xl font-black text-white font-heading uppercase mt-1">
                  RFQ Reference: {rfqNumber}
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  Our marine engineering desk at <strong>{destinationPort}</strong> has received your inquiry. A formal proforma invoice with mill test certifications will be dispatched to <strong>{email || 'your email'}</strong> within 60 minutes.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto font-mono text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Vessel/Rig:</span>
                  <span className="text-white font-bold">{vesselName || 'Direct Yard Collection'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Port of Delivery:</span>
                  <span className="text-amber-400 font-bold">{destinationPort}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Items:</span>
                  <span className="text-white font-bold">{rfqItems.reduce((a, b) => a + b.quantity, 0)} Units / Packs</span>
                </div>
              </div>

              <div className="flex justify-center space-x-3 pt-4">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-2 border border-slate-700"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>Print RFQ Summary</span>
                </button>

                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-900 text-xs font-bold uppercase tracking-wider"
                >
                  Start New RFQ
                </button>
              </div>
            </div>
          ) : (
            /* Items & Form View */
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                    Selected Items & Materials
                  </h4>
                  {rfqItems.length > 0 && (
                    <button
                      onClick={onClearRFQ}
                      className="text-[11px] text-red-400 hover:text-red-300 flex items-center space-x-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                {rfqItems.length === 0 ? (
                  <div className="p-8 text-center bg-slate-950/60 rounded-xl border border-slate-800 text-slate-400 text-xs space-y-2">
                    <p>Your RFQ cart is currently empty.</p>
                    <p className="text-[11px] text-slate-500">
                      Browse our Rigging Chains, Metal Fab, Ship Repairs, or Chemicals and click "Add to RFQ".
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {rfqItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1">
                          <div className="text-xs font-bold text-white font-heading">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-amber-400 font-mono">
                            {item.variant 
                              ? Object.entries(item.variant).slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(' | ')
                              : item.standard}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 bg-navy-900 border border-slate-700 px-2 py-1 rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-0.5 text-slate-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-white w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-0.5 text-slate-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Inquiry Submission Form */}
              <form onSubmit={handleSubmitRFQ} className="space-y-4 pt-4 border-t border-slate-800">
                <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                  Vessel & Delivery Destination
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Target GCC Port / Yard *
                    </label>
                    <select
                      value={destinationPort}
                      onChange={(e) => setDestinationPort(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      {ports.map((p, idx) => (
                        <option key={idx} value={p.name}>
                          {p.name} ({p.country})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Vessel Name / IMO / Rig (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. MT Gulf Pioneer (IMO 948210)"
                      value={vesselName}
                      onChange={(e) => setVesselName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Marine Shipping LLC"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Capt. Rajesh Sharma"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@shipping.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                    Technical Drawings / Specific Scope of Work Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify lengths, test certificates required (ABS, DNV, MTC 3.1), or custom laser cutting dxf instructions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={rfqItems.length === 0}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-900 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official RFQ to Duty Officer</span>
                </button>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
