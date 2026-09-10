import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Plus, Check, Eye, Layers, AlertCircle 
} from 'lucide-react';
import { products, verticals } from '../data/catalog';

export default function ProductCatalog({ 
  selectedVertical, 
  onSelectVertical, 
  onOpenProductModal, 
  onAddToRFQ,
  rfqItems 
}) {
  const [activeCategory, setActiveCategory] = useState(selectedVertical || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  React.useEffect(() => {
    if (selectedVertical) {
      setActiveCategory(selectedVertical);
      setSelectedSubCategory('all');
    }
  }, [selectedVertical]);

  const subCategories = useMemo(() => {
    const list = products
      .filter(p => activeCategory === 'all' || p.category === activeCategory)
      .map(p => p.subCategory);
    return ['all', ...Array.from(new Set(list))];
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCat = activeCategory === 'all' || product.category === activeCategory;
      const matchSub = selectedSubCategory === 'all' || product.subCategory === selectedSubCategory;
      const matchSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSub && matchSearch;
    });
  }, [activeCategory, selectedSubCategory, searchQuery]);

  const isItemInRFQ = (id) => rfqItems.some(item => item.id === id);

  return (
    <section id="catalog" className="py-20 bg-[#0d131f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Engineering Index
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
              Certified Marine & Industrial Products
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by standard or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#121a29] border border-[#1e293b] rounded-lg text-slate-200 text-xs focus:outline-none focus:border-amber-500 font-sans"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#1e293b] pb-4 mb-8">
          <button
            onClick={() => { setActiveCategory('all'); setSelectedSubCategory('all'); onSelectVertical('all'); }}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-[#070b12]'
                : 'bg-[#121a29] text-slate-300 hover:bg-[#162133] border border-[#1e293b]'
            }`}
          >
            All Items ({products.length})
          </button>

          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => { setActiveCategory(v.id); setSelectedSubCategory('all'); onSelectVertical(v.id); }}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === v.id
                  ? 'bg-amber-500 text-[#070b12]'
                  : 'bg-[#121a29] text-slate-300 hover:bg-[#162133] border border-[#1e293b]'
              }`}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Subcategory Pills */}
        {subCategories.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-slate-400 font-mono flex items-center mr-1">
              <Filter className="w-3.5 h-3.5 mr-1 text-slate-500" />
              Subcategory:
            </span>
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  selectedSubCategory === sub
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/50'
                    : 'bg-[#121a29] text-slate-400 hover:text-slate-200 border border-[#1e293b]'
                }`}
              >
                {sub === 'all' ? 'All Types' : sub}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-[#121a29] rounded-lg border border-[#1e293b]">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 font-semibold text-sm">No products found matching your filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => {
              const inRFQ = isItemInRFQ(prod.id);

              return (
                <div 
                  key={prod.id}
                  className="bg-[#121a29] rounded-xl border border-[#1e293b] hover:border-[#334155] overflow-hidden flex flex-col justify-between group transition-colors"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#070b12]">
                    <img 
                      src={prod.image} 
                      alt={prod.name}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" 
                    />
                    
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#070b12]/90 text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#1e293b]">
                        {prod.standard}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-[#070b12]/90 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#1e293b]">
                        Stock Ready
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 text-slate-300 text-[11px] font-mono bg-[#070b12]/80 px-2 py-0.5 rounded">
                      Material: <strong className="text-white">{prod.material}</strong>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                        {prod.category.toUpperCase()} DIVISION
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1 font-heading uppercase leading-tight">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-400 mb-4 font-sans">
                        {prod.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between gap-2">
                      <button
                        onClick={() => onOpenProductModal(prod)}
                        className="flex-1 py-2 px-3 bg-[#0d131f] hover:bg-[#162133] text-slate-200 rounded text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-[#1e293b] font-mono"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>View Specs</span>
                      </button>

                      <button
                        onClick={() => onAddToRFQ(prod)}
                        className={`py-2 px-3 rounded text-xs font-bold transition-all flex items-center space-x-1.5 font-mono ${
                          inRFQ
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-500 hover:bg-amber-400 text-[#070b12]'
                        }`}
                      >
                        {inRFQ ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>In RFQ</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Add RFQ</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
