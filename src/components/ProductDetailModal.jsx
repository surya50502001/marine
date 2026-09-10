import React, { useState } from 'react';
import { 
  X, CheckCircle, ShieldCheck, Download, 
  ShoppingCart, Layers
} from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToRFQ }) {
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
      <div className="relative bg-[#121a29] border border-[#1e293b] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#121a29] px-6 py-4 border-b border-[#1e293b] flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className="px-2 py-0.5 rounded bg-[#0d131f] border border-[#1e293b] text-amber-400 text-xs font-mono font-bold">
              {product.standard}
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono font-semibold">
              {product.subCategory}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#0d131f] text-slate-400 hover:text-white transition-colors border border-[#1e293b]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#1e293b] bg-[#070b12] h-48 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-2">
              <h2 className="text-2xl font-bold text-white font-heading uppercase">
                {product.name}
              </h2>
              <p className="text-xs text-amber-400 font-mono">
                {product.tagline}
              </p>
              <div className="text-xs text-slate-300 space-y-1 pt-1 font-sans">
                <p><strong className="text-white font-mono">Material:</strong> {product.material}</p>
                <p><strong className="text-white font-mono">Finish:</strong> {product.finish}</p>
                <p><strong className="text-white font-mono">Standard:</strong> {product.standard}</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          {product.specs && product.specs.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Engineering Sizing & Technical Matrix</span>
              </h4>

              <div className="overflow-x-auto rounded border border-[#1e293b] bg-[#070b12]">
                <table className="w-full text-left text-xs text-slate-300 font-mono">
                  <thead className="bg-[#121a29] text-slate-200 uppercase font-mono text-[10px] border-b border-[#1e293b]">
                    <tr>
                      {Object.keys(product.specs[0]).map((key) => (
                        <th key={key} className="py-2 px-3 font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </th>
                      ))}
                      <th className="py-2 px-3 text-right">Select</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e293b]">
                    {product.specs.map((row, idx) => {
                      const isRowSelected = selectedVariant === row;
                      return (
                        <tr 
                          key={idx}
                          onClick={() => setSelectedVariant(row)}
                          className={`cursor-pointer transition-colors ${
                            isRowSelected ? 'bg-amber-500/10 text-amber-300 font-semibold' : 'hover:bg-[#121a29]'
                          }`}
                        >
                          {Object.values(row).map((val, cIdx) => (
                            <td key={cIdx} className="py-2 px-3">
                              {val}
                            </td>
                          ))}
                          <td className="py-2 px-3 text-right">
                            <span className={`inline-block w-2 h-2 rounded-full ${isRowSelected ? 'bg-amber-400' : 'bg-slate-700'}`} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Order Action Bar */}
          <div className="p-4 rounded bg-[#070b12] border border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 font-mono block">Selected Variant:</span>
              <div className="text-sm font-bold text-white font-mono">
                {selectedVariant 
                  ? Object.entries(selectedVariant).slice(0, 2).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' | ')
                  : 'Standard Batch Request'}
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <div className="flex items-center space-x-2 bg-[#121a29] px-3 py-1.5 rounded border border-[#1e293b]">
                <span className="text-xs text-slate-400 font-mono">Qty:</span>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 bg-transparent text-white font-mono font-bold text-sm focus:outline-none text-center"
                />
              </div>

              <button
                onClick={handleAdd}
                className="px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-[#070b12] transition-all flex items-center space-x-1.5 font-mono"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{addedNotice ? 'Added!' : 'Add to RFQ'}</span>
              </button>

              <button
                onClick={handleDownloadDatasheet}
                className="p-2.5 rounded bg-[#121a29] hover:bg-[#162133] text-slate-200 border border-[#1e293b] transition-colors"
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
