// 9-Layer Stone-Coated Steel Cross-Section (from Official Brochure PDF 1 Page 5)
export const stoneCoatedLayers = [
  {
    step: '01',
    name: 'Protective Overglaze',
    color: '#0995c2',
    thickness: '0.05 mm',
    desc: 'Clear acrylic resin protective overglaze. Enhances luster, bonds surface basalt granules, and shields against UV radiation and atmospheric pollutants.'
  },
  {
    step: '02',
    name: 'Natural Basalt Stone Granules',
    color: '#4a5568',
    thickness: '0.60 mm',
    desc: 'Ceramic-sintered natural volcanic basalt rock granules. Delivers vibrant, non-fading architectural colors, superior scratch resistance, and acoustic rain decibel dampening.'
  },
  {
    step: '03',
    name: 'Acrylic Base Coat',
    color: '#0e323a',
    thickness: '0.25 mm',
    desc: 'High-viscosity acrylic polymer adhesive matrix. Permanently embeds the basalt mineral granules to the steel core, resistant to UV embrittlement and freeze-thaw cycles.'
  },
  {
    step: '04',
    name: 'Acrylic Primer Coating',
    color: '#1e5460',
    thickness: '0.05 mm',
    desc: 'Precision adhesion conversion primer. Creates an unbreakable chemical bond between the organic base coat and the metallic zinc-aluminium alloy barrier.'
  },
  {
    step: '05',
    name: 'AuxyShield PVDF Barrier Coating',
    color: '#0995c2',
    thickness: '0.15 mm',
    desc: 'High-grade Polyvinylidene Fluoride (PVDF) weather shield. Provides impenetrable resistance against severe coastal salt fog, acid rain, and equatorial solar heat.'
  },
  {
    step: '06',
    name: 'Aluminium-Zinc Alloy Coating (Top)',
    color: '#718096',
    thickness: '0.10 mm',
    desc: '55% Al-Zn Galvalume alloy protective barrier. Provides sacrificial galvanic corrosion protection, preventing rust creeping even under deep scratches.'
  },
  {
    step: '07',
    name: 'High-Strength Steel Core',
    color: '#2d3748',
    thickness: '0.45 mm',
    desc: 'Premium structural cold-rolled steel base. Delivers extraordinary tensile strength, impact resistance against hail, and 180+ mph hurricane wind uplift hold.'
  },
  {
    step: '08',
    name: 'Aluminium-Zinc Alloy Coating (Bottom)',
    color: '#718096',
    thickness: '0.10 mm',
    desc: 'Underside Al-Zn Galvalume barrier. Ensures complete dual-sided galvanic rust defense against internal condensation and high-humidity attic spaces.'
  },
  {
    step: '09',
    name: 'Protective Underside Primer',
    color: '#133f48',
    thickness: '0.05 mm',
    desc: 'Chemical sealant underside finish. Shields the steel from interior humidity, caustic fumes, and ambient building pollutants.'
  }
];

// 4-Layer UPVC Composite Structure (from Official Brochure PDF 2 Page 5)
export const upvcLayers = [
  {
    step: '01',
    name: 'ASA Ultra-Weather Shield',
    color: '#0995c2',
    thickness: '0.20 mm',
    desc: 'Surface co-extruded with Acrylonitrile Styrene Acrylate. Blocks 99.8% UV radiation, preventing surface chalking, brittleness, and thermal color fade for decades.'
  },
  {
    step: '02',
    name: 'High-Density UPVC Structural Armor',
    color: '#0e323a',
    thickness: '1.80 mm',
    desc: 'High-rigidity unplasticized polyvinyl chloride reinforced with impact modifiers. Delivers load-bearing toughness resisting foot traffic and heavy hail impacts.'
  },
  {
    step: '03',
    name: 'Micro-Cellular Thermal & Sound Buffer',
    color: '#1e5460',
    thickness: '0.35 mm',
    desc: 'Closed-cell micro-porous acoustic core. Dampens torrential Kerala monsoon rain noise by up to 30 dB and minimizes radiant heat conduction into interior rooms.'
  },
  {
    step: '04',
    name: 'Anti-Abrasion Chemical Sealant Base',
    color: '#0c2930',
    thickness: '0.15 mm',
    desc: 'Chemically resilient bottom shield. Repels caustic industrial vapors, moisture condensation, and tropical humidity from indoor spaces.'
  }
];

// Default exported layers (defaults to 9-layer stone coated)
export const layersData = stoneCoatedLayers;

export const comparisonData = [
  {
    feature: 'Corrosion Resistance in Coastal & Saline Air',
    oxyflo: '100% Rust-Proof (Dual Al-Zn & UPVC options)',
    metal: 'Corrodes and rusts at cuts and fasteners in 2-4 yrs',
    asbestos: 'Porous, absorbs moisture, cracks and spalls'
  },
  {
    feature: 'Acoustic Rain Decibel Dampening',
    oxyflo: '30 dB Sound Buffer (Silent during monsoons)',
    metal: 'High acoustic drumming resonance (Deafening)',
    asbestos: 'Moderate acoustic absorption, brittle'
  },
  {
    feature: 'Thermal Heat Insulation & Solar Comfort',
    oxyflo: 'AuxyShield & Micro-Cellular Heat Barrier (8-10°C Cooler)',
    metal: 'Extremely high heat conductor (Oven effect inside)',
    asbestos: 'Moderate insulation, releases toxic fibers'
  },
  {
    feature: 'Official Performance Warranty',
    oxyflo: '10-Year Comprehensive Factory Warranty',
    metal: 'Limited 1-2 years (excludes coastal rust)',
    asbestos: 'No certified warranty provided'
  },
  {
    feature: 'Health, Safety & Environmental Integrity',
    oxyflo: '100% Asbestos-Free, Non-Toxic & Recyclable',
    metal: 'High carbon footprint to refine and paint',
    asbestos: 'Class 1 Carcinogenic health hazard (Banned worldwide)'
  },
  {
    feature: 'Weathering & Hurricane Wind Resistance',
    oxyflo: 'Interlocking Clasp Tested to 180+ mph Winds',
    metal: 'Prone to tearing and wind flutter around screws',
    asbestos: 'Shatters easily during high-velocity wind storms'
  }
];
