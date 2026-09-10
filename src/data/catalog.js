export const verticals = [
  {
    id: "rigging",
    title: "Marine Rigging & Lifting",
    subtitle: "Roma Enterprises Standard",
    badge: "Tested & Certified",
    icon: "Anchor",
    color: "from-amber-500 to-orange-600",
    description: "High-tensile galvanized chains, alloy lifting chains G80/G100, wire ropes, shackles, turnbuckles, and marine mooring hardware with Mill Test Certificates."
  },
  {
    id: "fabrication",
    title: "Custom Metal & CNC Fabrication",
    subtitle: "Safari Metal Precision",
    badge: "Up to 30mm Laser",
    icon: "Cpu",
    color: "from-blue-500 to-cyan-600",
    description: "CNC fiber laser cutting, CNC hydraulic bending, marine grade stainless steel (316L), structural steel skids, and heavy-duty offshore industrial metalwork."
  },
  {
    id: "offshore",
    title: "Offshore & Shipyard Engineering",
    subtitle: "MFE Oman Capability",
    badge: "Class Approved (DNV/ABS)",
    icon: "Ship",
    color: "from-emerald-500 to-teal-600",
    description: "Afloat vessel repairs, piping pre-fabrication, certified hull welding, crane load testing, and emergency 24/7 voyage engineering across GCC ports."
  },
  {
    id: "chemicals",
    title: "Marine & Industrial Chemicals",
    subtitle: "Oasis Chemical Formulations",
    badge: "IMO / Marpol Compliant",
    icon: "FlaskConical",
    color: "from-violet-500 to-purple-600",
    description: "Heavy-duty degreasers, marine descalers, boiler water treatments, cargo hold cleaners, fuel additives, and eco-friendly oil spill dispersants."
  }
];

export const products = [
  // 1. Rigging & Chains (Roma Enterprises reference)
  {
    id: "prod-galv-chain-din766",
    category: "rigging",
    subCategory: "Chains",
    name: "Hot Dip Galvanized Short Link Chain (DIN 766)",
    tagline: "Calibrated Windlass & Marine Anchor Chain",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    standard: "DIN 766 / ISO 4565",
    material: "Grade 30 / Grade 40 Carbon Steel",
    finish: "Hot Dip Galvanized (HDG > 80 microns)",
    features: [
      "Calibrated links designed smoothly for electric & hydraulic windlasses",
      "Superior salt-water corrosion resistance with high-thickness zinc coating",
      "Individually proof load tested with 100% calibration check",
      "Supplied in standard 50m/100m drums or custom continuous lengths"
    ],
    specs: [
      { size: "6 mm", pitch: "18.5 mm", width: "20.0 mm", wll: "400 kg", breakingLoad: "1,600 kg", weight: "0.80 kg/m" },
      { size: "8 mm", pitch: "24.0 mm", width: "26.0 mm", wll: "800 kg", breakingLoad: "3,200 kg", weight: "1.40 kg/m" },
      { size: "10 mm", pitch: "28.0 mm", width: "34.0 mm", wll: "1,250 kg", breakingLoad: "5,000 kg", weight: "2.30 kg/m" },
      { size: "12 mm", pitch: "36.0 mm", width: "40.0 mm", wll: "1,800 kg", breakingLoad: "7,200 kg", weight: "3.25 kg/m" },
      { size: "14 mm", pitch: "41.0 mm", width: "47.0 mm", wll: "2,500 kg", breakingLoad: "10,000 kg", weight: "4.40 kg/m" },
      { size: "16 mm", pitch: "47.0 mm", width: "54.0 mm", wll: "3,200 kg", breakingLoad: "12,800 kg", weight: "5.70 kg/m" }
    ],
    inStock: true,
    certifications: ["Mill Test Certificate (MTC)", "Lloyd's / DNV on request", "Proof Test 2.5x WLL"]
  },
  {
    id: "prod-g80-alloy-chain",
    category: "rigging",
    subCategory: "Chains",
    name: "Grade 80 (G80) High-Tensile Alloy Lifting Chain",
    tagline: "Heavy-Duty Overhead Lifting & Rigging (EN 818-2)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    standard: "EN 818-2 / ASTM A391",
    material: "20Mn2 Alloy Steel (Heat Treated & Tempered)",
    finish: "Black Oxidized / Painted Yellow / Electrophoretic",
    features: [
      "Engineered specifically for certified overhead crane slings and marine lashing",
      "Safety Factor 4:1 with outstanding elongation resistance (> 20%)",
      "Embossed manufacturer batch code and G80 markings every meter",
      "Compatible with Clevis sling hooks, master links, and hammerlocks"
    ],
    specs: [
      { size: "7 mm", pitch: "21 mm", width: "24.5 mm", wll: "1,500 kg", breakingLoad: "6,000 kg", weight: "1.10 kg/m" },
      { size: "8 mm", pitch: "24 mm", width: "28.0 mm", wll: "2,000 kg", breakingLoad: "8,000 kg", weight: "1.40 kg/m" },
      { size: "10 mm", pitch: "30 mm", width: "35.0 mm", wll: "3,150 kg", breakingLoad: "12,600 kg", weight: "2.20 kg/m" },
      { size: "13 mm", pitch: "39 mm", width: "45.5 mm", wll: "5,300 kg", breakingLoad: "21,200 kg", weight: "3.80 kg/m" },
      { size: "16 mm", pitch: "48 mm", width: "56.0 mm", wll: "8,000 kg", breakingLoad: "32,000 kg", weight: "5.70 kg/m" },
      { size: "20 mm", pitch: "60 mm", width: "70.0 mm", wll: "12,500 kg", breakingLoad: "50,000 kg", weight: "9.00 kg/m" }
    ],
    inStock: true,
    certifications: ["EN 818-2 Factory Test", "MPI Crack Inspected", "Third-party ABS/DNV Witness"]
  },
  {
    id: "prod-bow-shackle-g209",
    category: "rigging",
    subCategory: "Hardware",
    name: "High-Tensile Bow Shackle with Screw Pin (G-209)",
    tagline: "Forged Alloy Safety Lifting & Mooring Rigging",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    standard: "US Fed. Spec. RR-C-271D, Type IVA, Class 2",
    material: "Forged Alloy Steel Body with Alloy Pin",
    finish: "Hot Dip Galvanized Body, Powder Coated Red/Blue Pin",
    features: [
      "Deep bow geometry accommodates multiple sling eyes without pinch",
      "Safety factor 6:1 design limit",
      "WLL and batch code permanently stamped on body",
      "100% magnetic particle inspected during fabrication"
    ],
    specs: [
      { size: "1/2\" (12mm)", pinDia: "16 mm", wll: "2.00 Ton", breakingLoad: "12.0 Ton", weight: "0.33 kg" },
      { size: "5/8\" (16mm)", pinDia: "19 mm", wll: "3.25 Ton", breakingLoad: "19.5 Ton", weight: "0.65 kg" },
      { size: "3/4\" (20mm)", pinDia: "22 mm", wll: "4.75 Ton", breakingLoad: "28.5 Ton", weight: "1.07 kg" },
      { size: "7/8\" (22mm)", pinDia: "25 mm", wll: "6.50 Ton", breakingLoad: "39.0 Ton", weight: "1.64 kg" },
      { size: "1\" (25mm)", pinDia: "28 mm", wll: "8.50 Ton", breakingLoad: "51.0 Ton", weight: "2.28 kg" },
      { size: "1-1/4\" (32mm)", pinDia: "35 mm", wll: "12.00 Ton", breakingLoad: "72.0 Ton", weight: "4.31 kg" },
      { size: "1-1/2\" (38mm)", pinDia: "42 mm", wll: "17.00 Ton", breakingLoad: "102.0 Ton", weight: "7.89 kg" }
    ],
    inStock: true,
    certifications: ["Proof Load 2x WLL", "MTC EN 10204 3.1"]
  },
  {
    id: "prod-wire-rope-slings",
    category: "rigging",
    subCategory: "Wire Ropes",
    name: "Steel Wire Rope & Custom Flemish Eye Slings (6x36 WS)",
    tagline: "Heavy Marine Crane Hoist & Winch Cables",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    standard: "EN 12385-4 / API 9A / ISO 2408",
    material: "EIPS / EEIPS Galvanized Steel (IWRC Steel Core)",
    finish: "Class A Heavy Galvanized or Bright Lubricated",
    features: [
      "Equal lay Warrington-Seale construction offers flexibility & fatigue life",
      "Steel Core (IWRC) ensures high crushing resistance on multilayer drums",
      "In-house 1000-Ton hydraulic swaging for seamless Flemish eyes with thimbles",
      "Supplied on heavy wooden or steel reels with tagging"
    ],
    specs: [
      { size: "12 mm", construction: "6x36 WS + IWRC", minBreakingLoad: "98.5 kN", weight: "0.61 kg/m" },
      { size: "16 mm", construction: "6x36 WS + IWRC", minBreakingLoad: "175.0 kN", weight: "1.08 kg/m" },
      { size: "20 mm", construction: "6x36 WS + IWRC", minBreakingLoad: "274.0 kN", weight: "1.69 kg/m" },
      { size: "24 mm", construction: "6x36 WS + IWRC", minBreakingLoad: "394.0 kN", weight: "2.43 kg/m" },
      { size: "32 mm", construction: "6x36 WS + IWRC", minBreakingLoad: "700.0 kN", weight: "4.32 kg/m" }
    ],
    inStock: true,
    certifications: ["Tensile Test Certificate", "DNV / BV Witness on Request"]
  },

  // 2. Metal Fabrication (Safari Metal reference)
  {
    id: "prod-laser-cutting-cnc",
    category: "fabrication",
    subCategory: "CNC Cutting",
    name: "High-Precision CNC Fiber Laser Cutting Services",
    tagline: "Safari Metal Quality – 15kW Bed (Up to 30mm Plate)",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    standard: "ISO 9013-1 / DIN EN ISO 2768",
    material: "Mild Steel, Stainless Steel (304/316L), Aluminum & Brass",
    finish: "Burr-free nitrogen / oxygen assist edge",
    features: [
      "15,000 Watt ultra-high-speed fiber laser bed handling up to 6000mm x 2500mm sheets",
      "Clean bevel cutting, hole perforation, and intricate marine bracket nesting",
      "Tight tolerance accuracy of ±0.05 mm for rapid downstream assembly",
      "Fast turnaround prototype to mass structural production in Sharjah & Dubai"
    ],
    specs: [
      { capability: "Mild Steel (MS)", maxThickness: "30 mm", tolerance: "±0.08 mm", bedCapacity: "6.0m x 2.5m" },
      { capability: "Stainless Steel (SS 304/316L)", maxThickness: "25 mm (Nitrogen Clean Cut)", tolerance: "±0.05 mm", bedCapacity: "6.0m x 2.5m" },
      { capability: "Aluminum (5083 Marine Grade)", maxThickness: "20 mm", tolerance: "±0.08 mm", bedCapacity: "4.0m x 2.0m" },
      { capability: "Brass & Copper", maxThickness: "12 mm", tolerance: "±0.05 mm", bedCapacity: "3.0m x 1.5m" }
    ],
    inStock: true,
    certifications: ["ISO 9001:2015", "CMM Dimensional Inspection Report"]
  },
  {
    id: "prod-press-brake-bending",
    category: "fabrication",
    subCategory: "Forming",
    name: "CNC Press Brake Sheet Metal Bending & Shearing",
    tagline: "400-Ton Hydraulic Multi-Axis Bending",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    standard: "DIN 6935",
    material: "Carbon Steel, Hardox, Stainless Steel 316, Galvanized Iron",
    finish: "Scratch-free urethane tooling available",
    features: [
      "400-Ton, 4-meter bending bed equipped with laser angle measurement system",
      "Custom channel profiles, U-beams, Z-sections, and offshore cable trays",
      "CNC crowning compensation ensures uniform angle along full 4-meter length",
      "CAD/CAM 3D folding simulation eliminates material collision and wastage"
    ],
    specs: [
      { feature: "Bending Tonnage", spec: "400 Metric Tons" },
      { feature: "Maximum Bend Length", spec: "4,200 mm" },
      { feature: "Max Plate Thickness", spec: "16 mm Mild Steel / 12 mm SS" },
      { feature: "Axis Control", spec: "7-Axis CNC Backgauge (X, R, Z1, Z2, Y1, Y2, V)" }
    ],
    inStock: true,
    certifications: ["Dimensional Inspection Protocol", "Material Traceability MTC"]
  },
  {
    id: "prod-marine-structural-skids",
    category: "fabrication",
    subCategory: "Structures",
    name: "Custom Offshore Marine Skids & Pressure Vessel Tanks",
    tagline: "DNV 2.7-1 & ASME IX Certified Offshore Units",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
    standard: "DNV 2.7-1 / EN 12079 / ASME Sec. VIII Div 1",
    material: "S355J2+N / ASTM A36 / SS316L / Super Duplex",
    finish: "Marine Epoxy 3-Coat Paint System (C5-M ISO 12944)",
    features: [
      "Complete design, FEA structural calculation, welding, and NDT inspection",
      "Engineered for offshore pump skids, generator containers, and chemical dosing frames",
      "Certified 4-point pad eye lifting lugs tested to 2.5x design weight",
      "Hot-dip galvanized internal grates with explosion-proof grounding lugs"
    ],
    specs: [
      { type: "Offshore Container Skid", maxPayload: "25,000 kg", rating: "DNV 2.7-1 / ISO 10855", nptWelding: "100% NDT (MPI + UT)" },
      { type: "Marine Exhaust Silencer", material: "SS 316L", rating: "IMO Tier III", pressure: "Up to 10 Bar" },
      { type: "Bunkering Hose Reel Skid", drive: "Pneumatic/Hydraulic", capacity: "4\" x 50m Hose", cert: "Zone 1 ATEX" }
    ],
    inStock: true,
    certifications: ["DNV 2.7-1 Type Approval", "WPS/PQR ASME Sec IX", "Full NDT Package"]
  },

  // 3. Offshore & Shipyard Engineering (MFE Oman reference)
  {
    id: "prod-ship-afloat-repairs",
    category: "offshore",
    subCategory: "Ship Repair",
    name: "24/7 Port & Afloat Marine Engineering Services",
    tagline: "MFE Oman Standard – Rapid Voyage & Anchorage Repairs",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    standard: "IACS (International Association of Classification Societies)",
    material: "Marine Hull Grade A/AH36/DH36 & Cu-Ni / GRE Piping",
    finish: "Full Class Society Sign-off (Lloyd's, DNV, ABS, BV, RINA)",
    features: [
      "Rapid mobilization teams available 24/7 at Sohar, Muscat, Salalah, Sharjah & Jebel Ali",
      "Hull plate cropping and insert welding with class-certified welders (6G/4G)",
      "Main engine overhaul, turbocharger reconditioning, and auxiliary pump servicing",
      "Underwater inspection support and sea chest blanking / overboard valve overhaul"
    ],
    specs: [
      { service: "Hull Steel Renewal", responseTime: "Under 4 Hours", capacity: "Up to 50 Tons / Call", class: "DNV / ABS / BV / LR" },
      { service: "Pipe Fabrication & Spooling", responseTime: "Same Day", materials: "Carbon, SS316, Cu-Ni, Duplex", rating: "ANSI 150 - 2500#" },
      { service: "Hydraulic Deck Machinery", responseTime: "Immediate", coverage: "Winches, Cranes, Windlasses", testing: "Bollard Pull / Proof Load" },
      { service: "Boiler & Heat Exchanger Retubing", responseTime: "24h Shift", capacity: "Full Retube & Hydrotest", cert: "Class Witnessed" }
    ],
    inStock: true,
    certifications: ["ISO 9001, ISO 14001, ISO 45001", "Class Approved Welding Workshop"]
  },
  {
    id: "prod-marine-pipe-spooling",
    category: "offshore",
    subCategory: "Piping",
    name: "Certified High-Pressure Marine Piping Pre-Fabrication",
    tagline: "Ballast Water Treatment (BWTS) & Fuel Line Spools",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    standard: "ASME B31.3 / ASME B31.1 / DIN 2448",
    material: "ASTM A106 Gr.B, Stainless Steel 316L, CuNi 90/10",
    finish: "Hot Dip Galvanized, Internal Rubber Lined or Epoxy Coated",
    features: [
      "Precision 3D Laser Scanning of vessel engine room for 100% fit-up guarantee",
      "TIG + SMAW + FCAW certified welding by 6GR qualified technicians",
      "Hydrostatic testing up to 400 Bar witnessed by class surveyors",
      "Fast delivery directly to ship berthed at any GCC port"
    ],
    specs: [
      { pipeSize: "1/2\" to 24\" NB", schedule: "SCH 40 / 80 / 160 / XXS", pressureRating: "Up to 400 Bar", test: "100% Radiography / Hydro" }
    ],
    inStock: true,
    certifications: ["ASME ‘U’ Stamp Compliance", "Class WPS/PQR Records"]
  },

  // 4. Marine & Industrial Chemicals (Oasis Chemical reference)
  {
    id: "prod-chem-heavy-degreaser",
    category: "chemicals",
    subCategory: "Cleaning & Degreasing",
    name: "HD-90 Marine Heavy-Duty Solvent & Engine Degreaser",
    tagline: "Oasis Chemical Formulation – Emulsifying Bilge & Engine Cleaner",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    standard: "IMO Approved / MARPOL Annex I & II Compliant",
    material: "Biodegradable surfactant & aromatic solvent blend",
    finish: "Non-corrosive to mild steel, cast iron, and bronze",
    features: [
      "Rapidly breaks down baked-on heavy fuel oil (HFO), grease, carbon, and sludge",
      "Fast separating formula allows easy oily water separator (OWS) bilge discharge",
      "Safe for use in engine room tank tops, bulkheads, machinery frames, and deck tools",
      "Available in 25-liter drums, 208-liter barrels, and 1000-liter IBC totes"
    ],
    specs: [
      { property: "Specific Gravity", value: "0.86 ± 0.02 @ 20°C" },
      { property: "Flash Point", value: "> 65°C (Safe for shipboard use)" },
      { property: "pH (1% solution)", value: "7.0 – 8.5 (Neutral)" },
      { property: "Recommended Dilution", value: "Pure for heavy grease, 1:5 to 1:10 for general cleaning" }
    ],
    inStock: true,
    certifications: ["MSDS / SDS Included", "IMO Tank Cleaning Approval", "Marpol Annex V Compliant"]
  },
  {
    id: "prod-chem-marine-descaler",
    category: "chemicals",
    subCategory: "Water Treatment",
    name: "SafeScale-Eco Marine Rust & Hard Water Descaler",
    tagline: "Inhibited Acidic Heat Exchanger & Boiler Scale Dissolver",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    standard: "ASTM G31 Corrosion Tested",
    material: "Inhibited Organic / Inorganic Acid Base with Wetting Agents",
    finish: "Corrosion inhibitor protects base metals (Steel, Copper, Brass)",
    features: [
      "Effortlessly dissolves calcium carbonate, rust, barnacles, algae, and mineral scales",
      "Formulated with special metal passivating inhibitors preventing acid attack on base metals",
      "Used for main engine fresh water generators, condenser tubes, sea chests & plate coolers",
      "Includes color indicator: changes color when neutralizing capacity is exhausted"
    ],
    specs: [
      { property: "Appearance", value: "Clear Reddish Liquid" },
      { property: "Specific Gravity", value: "1.15 ± 0.03" },
      { property: "Recommended Concentration", value: "10% to 25% in fresh water circulation" },
      { property: "Temperature Range", value: "Ambient up to 60°C" }
    ],
    inStock: true,
    certifications: ["ASTM C871 Compliant", "Full Safety Data Sheet"]
  },
  {
    id: "prod-chem-oil-spill-dispersant",
    category: "chemicals",
    subCategory: "Environmental",
    name: "EcoDisperse Marine Oil Spill Dispersant (Type 1 / Type 2/3)",
    tagline: "IMO / EPA Approved Eco-Friendly Hydrocarbon Neutralizer",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    standard: "IMO Resolution MEPC / ROPME Approved",
    material: "Non-toxic biodegradable surfactants & oxygenated solvents",
    finish: "Low aquatic toxicity & zero heavy petroleum distillates",
    features: [
      "Transforms thick oil slicks into microscopic droplets for rapid natural biodegradation",
      "Can be applied undiluted or diluted 1:10 with seawater using spray boom kits",
      "Mandatory safety compliance item for oil tankers, bunkering barges, and offshore rigs",
      "Long shelf life (> 5 years) in sealed marine grade poly drums"
    ],
    specs: [
      { property: "Toxicity Rating", value: "LC50 > 10,000 ppm (Practically Non-Toxic)" },
      { property: "Efficiency", value: "> 85% Dispersant Efficiency Index" },
      { property: "Flash Point", value: "> 75°C" },
      { property: "Application Ratio", value: "1 part dispersant to 10-20 parts spilled oil" }
    ],
    inStock: true,
    certifications: ["ROPME GCC Certification", "IMO Level 1 & 2 Approved", "Clean Seas Compliant"]
  }
];

export const ports = [
  {
    name: "Sharjah Port Khalid & Hamriyah",
    country: "UAE",
    dispatchTime: "45 Minutes",
    services: ["Chains & Rigging Yard", "Metal Fabrication Shop", "Chemical Warehousing", "24/7 Berth Dispatch"],
    contact: "+971 6 528 4900"
  },
  {
    name: "Port of Jebel Ali & Dubai Maritime City",
    country: "UAE",
    dispatchTime: "1 Hour",
    services: ["Voyage Ship Repair", "Rigging Delivery", "Engine Spares & Degreasers", "Offshore Skids"],
    contact: "+971 4 881 2244"
  },
  {
    name: "Port of Sohar & Freezone",
    country: "Oman",
    dispatchTime: "1.5 Hours",
    services: ["MFE Heavy Fabrication", "Pipe Spool Pre-fab", "Class Welding", "Afloat Overhauls"],
    contact: "+968 2685 0000"
  },
  {
    name: "Port of Fujairah (Offshore Anchorage)",
    country: "UAE",
    dispatchTime: "2 Hours (Launch Boat)",
    services: ["Bunkering Chemical Supplies", "Anchor Chain Replacement", "Offshore Lifeline Rigging"],
    contact: "+971 9 222 8888"
  },
  {
    name: "Port of Salalah & Duqm Drydock",
    country: "Oman",
    dispatchTime: "24/7 Mobile Team",
    services: ["Hull Structure Inserts", "High Capacity Crane Slings", "Tank Descaling Passivation"],
    contact: "+968 2321 9000"
  },
  {
    name: "Mina Saqr & Ras Al Khaimah Ports",
    country: "UAE",
    dispatchTime: "1 Hour",
    services: ["Barge Rigging & Towing Chains", "Sheet Metal Hopper Liners", "Aggregate Conveyor Rigging"],
    contact: "+971 7 205 6000"
  }
];

export const caseStudies = [
  {
    title: "Offshore Jack-Up Rig Crane Boom Rigging Overhaul",
    location: "Hamriyah Free Zone, Sharjah",
    client: "Tier-1 Offshore Drilling Contractor",
    vertical: "Rigging & Lifting",
    description: "Engineered and supplied 1200 meters of 32mm IWRC galvanized crane wire ropes along with G80 four-leg master assemblies and custom proof-load tested bow shackles. Completed 100% NDT inspection and delivered Lloyd's certified package in under 48 hours.",
    metrics: ["1,200m Cable Installed", "120-Ton Proof Tested", "Zero Downtime Reported"]
  },
  {
    title: "Custom 316L Stainless Exhaust Silencers & Skids",
    location: "Dubai Maritime City",
    client: "Luxury Superyacht & Tug Operator",
    vertical: "Safari Metal Fabrication",
    description: "Utilized 15kW CNC Laser cutting and 400-Ton CNC Press Brake to manufacture 4 complex double-walled exhaust silencers in 316L stainless steel with CNC flanged connection ports and vibration damping brackets.",
    metrics: ["±0.05mm Precision", "100% Helium Leak Tested", "Delivered 3 Days Ahead"]
  },
  {
    title: "Emergency Afloat Hull Insert & BWTS Pipe Spooling",
    location: "Port of Sohar, Sultanate of Oman",
    client: "International Bulk Carrier (65,000 DWT)",
    vertical: "MFE Oman Marine Engineering",
    description: "Deployed 24/7 certified coded welding teams to execute 14-ton hull bottom plate renewal afloat under DNV surveyor supervision while simultaneously pre-fabricating 80 meters of 10-inch Cu-Ni ballast water pipe spools.",
    metrics: ["14 Tons Steel Renewed", "DNV Surveyor Passed", "5 Days Turnaround"]
  },
  {
    title: "Eco-Descaling & Chemical Passivation of Plate Coolers",
    location: "Fujairah Anchorage",
    client: "Product Tanker Fleet",
    vertical: "Oasis Chemical Solutions",
    description: "Delivered 2,500 liters of SafeScale-Eco and HD-90 Degreaser via supply launch boat. Restored thermal efficiency by 38% across titanium central coolers without requiring equipment dismantling.",
    metrics: ["38% Heat Efficiency Gain", "Zero Metal Loss", "Marpol Compliant Disposal"]
  }
];
