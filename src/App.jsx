import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerticalsOverview from './components/VerticalsOverview';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import EngineeringCalculators from './components/EngineeringCalculators';
import PortCoverageMap from './components/PortCoverageMap';
import CaseStudies from './components/CaseStudies';
import CertificationsBanner from './components/CertificationsBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RFQDrawer from './components/RFQDrawer';
import { products } from './data/catalog';

export default function App() {
  const [selectedVertical, setSelectedVertical] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [rfqItems, setRfqItems] = useState([
    {
      id: "prod-galv-chain-din766",
      name: "Hot Dip Galvanized Short Link Chain (DIN 766)",
      standard: "DIN 766 (10 mm - 50m Drum)",
      quantity: 2,
      variant: { size: "10 mm", wll: "1,250 kg" }
    },
    {
      id: "prod-chem-heavy-degreaser",
      name: "HD-90 Marine Heavy-Duty Solvent Degreaser",
      standard: "IMO Approved (208L Drum)",
      quantity: 4,
      variant: { packing: "208L Steel Drum" }
    }
  ]);

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVertical = (verticalId) => {
    setSelectedVertical(verticalId);
    handleNavigateSection('catalog');
  };

  const handleSearchSubmit = (query) => {
    handleNavigateSection('catalog');
  };

  const handleAddToRFQ = (product, variant = null, quantity = 1) => {
    setRfqItems(prev => {
      const existingIdx = prev.findIndex(item => item.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            standard: product.standard,
            quantity: quantity,
            variant: variant || (product.specs && product.specs[0] ? product.specs[0] : null)
          }
        ];
      }
    });
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setRfqItems(prev => prev.map(item => item.id === itemId ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (itemId) => {
    setRfqItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleClearRFQ = () => {
    setRfqItems([]);
  };

  return (
    <div className="min-h-screen bg-[#070e17] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-navy-900">
      {/* Header & Sticky Nav */}
      <Navbar
        rfqItems={rfqItems}
        onOpenRFQ={() => setIsRFQOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSearchSubmit={handleSearchSubmit}
          onExploreCatalog={() => handleNavigateSection('catalog')}
          onOpenRFQ={() => setIsRFQOpen(true)}
        />

        {/* Certifications Bar */}
        <CertificationsBanner />

        {/* 4 Core Verticals Showcase */}
        <VerticalsOverview
          selectedVertical={selectedVertical}
          onSelectVertical={handleSelectVertical}
        />

        {/* Dynamic Product Catalog */}
        <ProductCatalog
          selectedVertical={selectedVertical}
          onSelectVertical={setSelectedVertical}
          onOpenProductModal={(product) => setActiveModalProduct(product)}
          onAddToRFQ={handleAddToRFQ}
          rfqItems={rfqItems}
        />

        {/* Technical Calculators */}
        <EngineeringCalculators />

        {/* GCC Port Coverage Map */}
        <PortCoverageMap
          onOpenRFQ={() => setIsRFQOpen(true)}
        />

        {/* Case Studies & Offshore Project Gallery */}
        <CaseStudies />

        {/* Contact & 24/7 Port Support */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Product Sizing & Specs Modal */}
      {activeModalProduct && (
        <ProductDetailModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onAddToRFQ={handleAddToRFQ}
          isAlreadyInRFQ={rfqItems.some(item => item.id === activeModalProduct.id)}
        />
      )}

      {/* RFQ Slide-over Builder */}
      <RFQDrawer
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        rfqItems={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearRFQ={handleClearRFQ}
      />
    </div>
  );
}
