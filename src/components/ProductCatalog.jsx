import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Plus, Check, Eye, ShieldCheck, 
  Layers, ChevronRight, Download, Sparkles, AlertCircle 
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

  // Synchronize when parent vertical changes
  React.useEffect(() => {
    if (selectedVertical) {
      setActiveCategory(selectedVertical);
      setSelectedSubCategory('all');
    }
  }, [selectedVertical]);

  // Extract all subcategories
  const subCategories = useMemo(() => {
    const list = products
      .filter(p => activeCategory === 'all' || p.category === activeCategory)
      .map(p => p.subCategory);
    return ['all', ...Array.from(new Set(list))];
  }, [activeCategory]);

  // Filtered product items
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
    <section id="catalog" className="py-20 bg-navy-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Product & Engineering Index</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
              Certified Marine & Industrial Catalog
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Select standard specifications or configure bespoke sizes for anchor windlasses, high-tonnage lifting slings, CNC laser blanks, and vessel cleaning batches.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by standard or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 text-xs focus:outline-none focus:border-amber-500 shadow-inner"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 mb-6">
          <button
            onClick={() => { setActiveCategory('all'); setSelectedSubCategory('all'); onSelectVertical('all'); }}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-navy-900 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Products & Services ({products.length})
          </button>

          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => { setActiveCategory(v.id); setSelectedSubCategory('all'); onSelectVertical(v.id); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === v.id
                  ? 'bg-amber-500 text-navy-900 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Subcategory Pills */}
        {subCategories.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-slate-400 font-medium flex items-center mr-1">
              <Filter className="w-3.5 h-3.5 mr-1 text-slate-500" />
              Subcategory:
            </span>
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedSubCategory === sub
                    ? 'bg-slate-700 text-amber-400 border border-amber-500/50'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
                }`}
              >
                {sub === 'all' ? 'All Types' : sub}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">No products matching your filter criteria.</p>
            <p className="text-slate-500 text-xs mt-1">Try clearing search keywords or choosing another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => {
              const inRFQ = isItemInRFQ(prod.id);

              return (
                <div 
                  key={prod.id}
                  className="bg-navy-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-navy-900/50"
                >
                  {/* Image & Badges */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <img 
                      src={prod.image} 
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-navy-900/90 backdrop-blur-sm text-amber-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-amber-500/30">
                        {prod.standard}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        GCC Stock Ready
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 text-slate-300 text-[11px] font-medium">
                      Material: <span className="text-slate-100 font-semibold">{prod.material}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                        {prod.subCategory}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1 font-heading leading-tight">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3 italic">
                        {prod.tagline}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                        {prod.features.slice(0, 2).map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                            <span className="line-clamp-2">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onOpenProductModal(prod)}
                        className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-slate-700"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>View Specs</span>
                      </button>

                      <button
                        onClick={() => onAddToRFQ(prod)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                          inRFQ
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-amber-500 hover:bg-amber-400 text-navy-900 shadow-md shadow-amber-500/20'
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
                            <span>Add to RFQ</span>
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
