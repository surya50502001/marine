import React, { useState } from 'react';
import { 
  X, CheckCircle, ShieldCheck, Download, 
  ShoppingCart, FileText, Anchor, Layers, AlertCircle 
} from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToRFQ, isAlreadyInRFQ }) {
  if (!product) return null;

  const [selectedVariant, setSelectedVariant] = useState(
    product.specs && product.specs.length > 0 ? product.specs[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToRFQ(product, selectedVariant, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleDownloadDatasheet = () => {
    alert(`Generating Official Technical Datasheet for ${product.name} (${product.standard}). The PDF specification document is being prepared.`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-navy-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-navy-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
              {product.standard}
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              {product.subCategory}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Top Banner Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-56 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-2 left-2 right-2 bg-navy-900/90 backdrop-blur-sm p-2 rounded-lg text-[11px] text-slate-300 border border-slate-800">
                  <span className="text-amber-400 font-bold">Finish:</span> {product.finish}
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2 className="text-2xl font-black text-white font-heading uppercase">
                {product.name}
              </h2>
              <p className="text-xs text-amber-400 font-mono">
                {product.tagline}
              </p>
              <div className="text-xs text-slate-300 space-y-1">
                <p><strong className="text-white">Base Material:</strong> {product.material}</p>
                <p><strong className="text-white">Manufacturing Standard:</strong> {product.standard}</p>
                <p><strong className="text-white">Stock Availability:</strong> Immediate Dispatch (UAE & Oman Yards)</p>
              </div>

              {/* Certifications list */}
              <div className="pt-2">
                <div className="text-[11px] text-slate-400 font-semibold mb-1.5 flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                  Certification & Quality Assurance:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.certifications.map((cert, idx) => (
                    <span key={idx} className="bg-slate-800 text-slate-300 border border-slate-700 text-[10px] px-2 py-0.5 rounded font-mono">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          {product.specs && product.specs.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Engineering Sizing & Technical Matrix</span>
                </h4>
                <span className="text-xs text-slate-400">Click a row to select variant</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-navy-800 text-slate-200 uppercase font-mono text-[11px] border-b border-slate-700">
                    <tr>
                      {Object.keys(product.specs[0]).map((key) => (
                        <th key={key} className="py-2.5 px-4 font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </th>
                      ))}
                      <th className="py-2.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {product.specs.map((row, idx) => {
                      const isRowSelected = selectedVariant === row;
                      return (
                        <tr 
                          key={idx}
                          onClick={() => setSelectedVariant(row)}
                          className={`cursor-pointer transition-colors ${
                            isRowSelected ? 'bg-amber-500/10 text-amber-300 font-semibold' : 'hover:bg-slate-800/50'
                          }`}
                        >
                          {Object.values(row).map((val, cIdx) => (
                            <td key={cIdx} className="py-2.5 px-4 font-mono">
                              {val}
                            </td>
                          ))}
                          <td className="py-2.5 px-4 text-right">
                            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isRowSelected ? 'bg-amber-400 ring-4 ring-amber-400/20' : 'bg-slate-700'}`} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Engineering Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Technical Highlights & Performance Characteristics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sizing & RFQ Order Box */}
          <div className="p-4 rounded-xl bg-navy-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <span className="text-xs text-slate-400 block mb-1">Selected Configuration:</span>
              <div className="text-sm font-bold text-white font-mono">
                {selectedVariant 
                  ? Object.entries(selectedVariant).slice(0, 2).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' | ')
                  : 'Standard Batch Request'}
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <div className="flex items-center space-x-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
                <span className="text-xs text-slate-400">Qty:</span>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 bg-transparent text-white font-bold text-sm focus:outline-none text-center"
                />
              </div>

              <button
                onClick={handleAdd}
                className="px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-900 shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-1.5"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{addedNotice ? 'Added to RFQ!' : 'Add to RFQ'}</span>
              </button>

              <button
                onClick={handleDownloadDatasheet}
                className="p-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600 transition-colors"
                title="Download Specification PDF"
              >
                <Download className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
