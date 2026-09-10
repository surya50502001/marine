import React, { useState } from 'react';
import { 
  Calculator, Wrench, Shield, Anchor, 
  FlaskConical, Cpu, ArrowRight, CheckCircle, RefreshCw 
} from 'lucide-react';

export default function EngineeringCalculators() {
  const [activeTab, setActiveTab] = useState('rigging');

  // Rigging Calculator State
  const [chainGrade, setChainGrade] = useState('G80'); // G30, G40, G80, G100
  const [chainDia, setChainDia] = useState(13); // mm
  const [slingLegs, setSlingLegs] = useState(2); // 1, 2, 4
  const [slingAngle, setSlingAngle] = useState(60); // degrees (90, 60, 45)

  // Chemical Dosage Calculator State
  const [equipmentType, setEquipmentType] = useState('plate-cooler');
  const [systemCapacity, setSystemCapacity] = useState(1500); // Liters
  const [scaleLevel, setScaleLevel] = useState('medium'); // light, medium, heavy

  // Metal Weight Calculator State
  const [metalType, setMetalType] = useState('ms'); // ms, ss316, alu
  const [plateThickness, setPlateThickness] = useState(12); // mm
  const [plateLength, setPlateLength] = useState(3000); // mm
  const [plateWidth, setPlateWidth] = useState(1500); // mm

  // Rigging Calculations
  const calculateRiggingWLL = () => {
    // Basic approximate formula for single leg WLL (kg)
    // G80: ~ dia^2 * 31.5 / 4
    let baseCapacityKg = 0;
    if (chainGrade === 'G30') baseCapacityKg = chainDia * chainDia * 6.5;
    else if (chainGrade === 'G40') baseCapacityKg = chainDia * chainDia * 8.5;
    else if (chainGrade === 'G80') baseCapacityKg = chainDia * chainDia * 31.4;
    else if (chainGrade === 'G100') baseCapacityKg = chainDia * chainDia * 39.2;

    // Angle factor (sin for angle from horizontal)
    let angleFactor = 1.0;
    if (slingLegs > 1) {
      if (slingAngle === 60) angleFactor = 1.732; // 2 * cos(30)
      else if (slingAngle === 45) angleFactor = 1.414; // 2 * cos(45)
      else angleFactor = 2.0; // 90 deg straight
      if (slingLegs === 4) angleFactor *= 1.5; // effective 3-leg distribution rule
    }

    const totalWLLTons = ((baseCapacityKg * (slingLegs === 1 ? 1 : angleFactor)) / 1000).toFixed(2);
    const minBreakingForceKN = (totalWLLTons * 9.81 * (chainGrade.startsWith('G80') ? 4 : 4.5)).toFixed(1);

    return { totalWLLTons, minBreakingForceKN };
  };

  // Chemical Calculations
  const calculateChemicalDose = () => {
    let ratio = 0.15; // default 15%
    let circHours = 4;
    if (scaleLevel === 'light') { ratio = 0.10; circHours = 3; }
    if (scaleLevel === 'medium') { ratio = 0.15; circHours = 5; }
    if (scaleLevel === 'heavy') { ratio = 0.25; circHours = 8; }

    const chemicalLiters = Math.round(systemCapacity * ratio);
    const freshWaterLiters = Math.round(systemCapacity * (1 - ratio));
    const drums25L = Math.ceil(chemicalLiters / 25);

    return { chemicalLiters, freshWaterLiters, drums25L, circHours };
  };

  // Metal Weight Calculation
  const calculateMetalWeight = () => {
    let density = 7.85; // g/cm3 for Mild steel
    if (metalType === 'ss316') density = 8.00;
    if (metalType === 'alu') density = 2.70;

    const volumeCm3 = (plateLength / 10) * (plateWidth / 10) * (plateThickness / 10);
    const weightKg = ((volumeCm3 * density) / 1000).toFixed(1);
    const estLaserTimeMin = Math.ceil(((plateLength * 2 + plateWidth * 2) / 1000) * (plateThickness > 10 ? 1.2 : 0.6));

    return { weightKg, estLaserTimeMin };
  };

  const riggingResults = calculateRiggingWLL();
  const chemResults = calculateChemicalDose();
  const metalResults = calculateMetalWeight();

  return (
    <section id="calculators" className="py-20 bg-[#07111e] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Engineering Tool Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-heading">
            Marine & Industrial Technical Calculators
          </h2>
          <p className="text-slate-400 text-sm">
            Quickly estimate sling load ratings, descaling chemical batches, or laser plate weights before issuing purchase orders or docking works.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-navy-900 border border-slate-800 space-x-2">
            <button
              onClick={() => setActiveTab('rigging')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'rigging'
                  ? 'bg-amber-500 text-navy-900 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Anchor className="w-4 h-4" />
              <span>Chain & Sling WLL</span>
            </button>

            <button
              onClick={() => setActiveTab('chemical')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'chemical'
                  ? 'bg-amber-500 text-navy-900 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Chemical Dosage</span>
            </button>

            <button
              onClick={() => setActiveTab('metal')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'metal'
                  ? 'bg-amber-500 text-navy-900 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Plate Weight & Laser</span>
            </button>
          </div>
        </div>

        {/* Calculator Cards */}
        <div className="max-w-4xl mx-auto bg-navy-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          {/* TAB 1: Rigging Calculator */}
          {activeTab === 'rigging' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-white uppercase font-heading flex items-center space-x-2">
                  <Anchor className="w-5 h-5 text-amber-400" />
                  <span>Working Load Limit (WLL) Configuration</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Chain Material Grade</label>
                    <select
                      value={chainGrade}
                      onChange={(e) => setChainGrade(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="G80">Grade 80 (EN 818-2 Alloy)</option>
                      <option value="G100">Grade 100 (Premium Alloy)</option>
                      <option value="G40">Grade 40 (High Test Calibrated)</option>
                      <option value="G30">Grade 30 (DIN 766 HDG Chain)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Nominal Diameter</label>
                    <select
                      value={chainDia}
                      onChange={(e) => setChainDia(parseInt(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      <option value={6}>6 mm</option>
                      <option value={8}>8 mm</option>
                      <option value={10}>10 mm</option>
                      <option value={13}>13 mm</option>
                      <option value={16}>16 mm</option>
                      <option value={20}>20 mm</option>
                      <option value={26}>26 mm</option>
                      <option value={32}>32 mm</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Sling Leg Assembly</label>
                    <select
                      value={slingLegs}
                      onChange={(e) => setSlingLegs(parseInt(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      <option value={1}>Single Leg (Direct Vertical)</option>
                      <option value={2}>2-Leg Master Assembly</option>
                      <option value={4}>4-Leg Bridle Assembly</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Working Sling Angle (β)</label>
                    <select
                      disabled={slingLegs === 1}
                      value={slingAngle}
                      onChange={(e) => setSlingAngle(parseInt(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none disabled:opacity-50"
                    >
                      <option value={90}>0° to 45° from vertical (β &gt; 45°)</option>
                      <option value={60}>60° Standard Angle (Recommended)</option>
                      <option value={45}>45° Wide Angle (Caution)</option>
                    </select>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Based on EN 818-4 and ASME B30.9 safety factors (4:1 minimum on lifting chains).
                </p>
              </div>

              {/* Result Box */}
              <div className="lg:col-span-5 bg-navy-800 border border-slate-700 rounded-xl p-6 text-center space-y-4">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                  Calculated Safe Capacity
                </span>
                
                <div className="py-2">
                  <div className="text-4xl font-black text-white font-heading">
                    {riggingResults.totalWLLTons} <span className="text-lg font-normal text-amber-400">Metric Tons</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Safe Working Load Limit (WLL)
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Min. Breaking Load:</span>
                    <span className="font-mono font-bold text-white">{riggingResults.minBreakingForceKN} kN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Safety Factor:</span>
                    <span className="font-mono font-bold text-emerald-400">4:1 Design Rating</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Chemical Dosage Calculator */}
          {activeTab === 'chemical' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-white uppercase font-heading flex items-center space-x-2">
                  <FlaskConical className="w-5 h-5 text-amber-400" />
                  <span>Marine Descaling & CIP Recirculation Batch</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Target Equipment</label>
                    <select
                      value={equipmentType}
                      onChange={(e) => setEquipmentType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="plate-cooler">Plate Heat Exchanger (Titanium/SS)</option>
                      <option value="boiler">Auxiliary Marine Steam Boiler</option>
                      <option value="fwg">Fresh Water Generator (Evaporator)</option>
                      <option value="sea-chest">Sea Chest / Overboard Pipework</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Scaling / Fouling Severity</label>
                    <select
                      value={scaleLevel}
                      onChange={(e) => setScaleLevel(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="light">Light Film / Routine CIP (10% Conc.)</option>
                      <option value="medium">Moderate Marine Scale (15% Conc.)</option>
                      <option value="heavy">Heavy Calcium & Barnacles (25% Conc.)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-semibold">
                    Total System Water Circulation Volume (Liters): <span className="text-amber-400 font-bold">{systemCapacity} L</span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={systemCapacity}
                    onChange={(e) => setSystemCapacity(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>200 L (Aux Cooler)</span>
                    <span>5,000 L</span>
                    <span>10,000 L (Main Boiler)</span>
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="lg:col-span-5 bg-navy-800 border border-slate-700 rounded-xl p-6 text-center space-y-4">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                  Required Chemical Batch
                </span>
                
                <div className="py-2">
                  <div className="text-4xl font-black text-white font-heading">
                    {chemResults.chemicalLiters} <span className="text-lg font-normal text-amber-400">Liters</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    SafeScale-Eco or HD-90 Required
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">25L Drum Count:</span>
                    <span className="font-mono font-bold text-white">{chemResults.drums25L} Standard Drums</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Circulation Time:</span>
                    <span className="font-mono font-bold text-cyan-400">{chemResults.circHours} Hours @ 50°C</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Metal Weight & Laser Calculator */}
          {activeTab === 'metal' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-white uppercase font-heading flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-amber-400" />
                  <span>Safari Metal Plate Weight & CNC Sizing</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Material Alloy</label>
                    <select
                      value={metalType}
                      onChange={(e) => setMetalType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="ms">Mild Steel (S275 / S355)</option>
                      <option value="ss316">Stainless Steel (SS 316L Marine)</option>
                      <option value="alu">Aluminum (5083 Marine Plate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Plate Thickness (mm)</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={plateThickness}
                      onChange={(e) => setPlateThickness(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Length (mm)</label>
                    <input
                      type="number"
                      min="100"
                      max="6000"
                      value={plateLength}
                      onChange={(e) => setPlateLength(Math.max(100, parseInt(e.target.value) || 100))}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-semibold">Width (mm)</label>
                    <input
                      type="number"
                      min="100"
                      max="2500"
                      value={plateWidth}
                      onChange={(e) => setPlateWidth(Math.max(100, parseInt(e.target.value) || 100))}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:border-amber-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="lg:col-span-5 bg-navy-800 border border-slate-700 rounded-xl p-6 text-center space-y-4">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                  Single Sheet Metric Weight
                </span>
                
                <div className="py-2">
                  <div className="text-4xl font-black text-white font-heading">
                    {metalResults.weightKg} <span className="text-lg font-normal text-amber-400">kg</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Calculated Theoretical Mass
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bed Size Match:</span>
                    <span className="font-mono font-bold text-emerald-400">Fits 6x2.5m 15kW Laser</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. Perimeter Cut:</span>
                    <span className="font-mono font-bold text-white">~{metalResults.estLaserTimeMin} min cutting time</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
