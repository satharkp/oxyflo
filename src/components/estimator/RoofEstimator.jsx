import { useState, useMemo } from 'react';
import { Sliders, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RoofEstimator() {
  const [calcBuilding, setCalcBuilding] = useState('residential');
  const [calcArea, setCalcArea] = useState(3500);
  const [calcClimate, setCalcClimate] = useState('tropical');
  const [calcPitch, setCalcPitch] = useState('medium');

  const estimationResult = useMemo(() => {
    let recSystem = 'Roman Series Stone-Coated Architectural Tile (Auxylite / AuxyShield)';
    let sheetLength = 'Standard Interlocking Tiles';
    let tempDrop = '6°C – 8°C Ambient Reduction';
    let purlinRec = '370 mm engineered batten spacing';
    let profileType = 'Stone-Coated Galvalume 9-Layer';
    let sheetCount = Math.ceil((calcArea * 1.15) / 5.2);

    if (calcBuilding === 'industrial' || calcClimate === 'chemical') {
      recSystem = 'UPVC Trapezoidal Heavy-Duty Sheet (25mm Wave Height)';
      sheetLength = 'Custom Cut-to-Length';
      tempDrop = '8°C – 10°C Ambient Reduction';
      purlinRec = '60 cm – 70 cm structural purlin spacing';
      profileType = 'UPVC 4-Layer Composite';
      sheetCount = Math.ceil((calcArea * 1.1) / (1.05 * 4)); // based on 1050mm effective width
    } else if (calcBuilding === 'agriculture' || (calcPitch === 'low' && calcBuilding !== 'residential')) {
      recSystem = 'UPVC Spanish Wave Profile (28mm Wave Height)';
      sheetLength = '2.3mm / 2.5mm Gauge Profiles';
      tempDrop = '8°C – 10°C Ambient Reduction';
      purlinRec = '66 cm purlin spacing (Official Brochure Spec)';
      profileType = 'UPVC 4-Layer Composite';
      sheetCount = Math.ceil((calcArea * 1.12) / (0.96 * 3)); // based on 960mm effective width
    } else if (calcBuilding === 'commercial') {
      recSystem = 'New Bond Series Stone-Coated Architectural Profile';
      sheetLength = 'Modular Step-Lap Profiles';
      tempDrop = '7°C – 9°C Ambient Reduction';
      purlinRec = '370 mm engineered batten spacing';
      profileType = 'Stone-Coated Galvalume 9-Layer';
      sheetCount = Math.ceil((calcArea * 1.15) / 5.2);
    }

    const estimatedWeight = Math.round(calcArea * (profileType.includes('UPVC') ? 4.5 : 5.8));
    const co2Reduction = Math.round(calcArea * 0.084);

    return {
      recSystem,
      sheetLength,
      tempDrop,
      purlinRec,
      profileType,
      sheetCount,
      estimatedWeight,
      co2Reduction
    };
  }, [calcBuilding, calcArea, calcClimate, calcPitch]);

  return (
    <section className="bg-[#f5f8f8] py-16 sm:py-20" id="estimator">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0785ad]">
              Planning tool
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0e323a] sm:text-3xl">
              Start planning your roof
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 font-normal">
              Choose a building type and enter your roof area to get a preliminary profile recommendation.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600">
            <Sliders size={15} className="text-[#0785ad]" /> Preliminary estimate
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Configuration Controls */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-7">
            <h3 className="mb-6 font-heading text-lg font-bold text-[#0e323a]">Project details</h3>

            {/* Facility Type */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-[#29464d]">Building type</label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  { id: 'residential', label: 'Contemporary Residential / Villa' },
                  { id: 'commercial', label: 'Commercial Complex / Resort' },
                  { id: 'industrial', label: 'Industrial Warehouse / Factory' },
                  { id: 'agriculture', label: 'Terrace / Porch / Agro-Shed' },
                  { id: 'chemical', label: 'Coastal / Chemical Exposure' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCalcBuilding(t.id)}
                    aria-pressed={calcBuilding === t.id}
                    className={`rounded-xl border p-3 text-left text-xs font-bold transition ${
                      calcBuilding === t.id
                      ? 'border-[#0785ad] bg-cyan-50 text-[#0e323a] ring-1 ring-[#0785ad]'
                        : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Roof Area Slider */}
            <div className="mb-6">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <label htmlFor="roof-area" className="text-sm font-semibold text-[#29464d]">
                  Approximate roof area: <span className="font-bold text-[#0785ad]">{calcArea.toLocaleString()} sq ft</span>
                </label>
                <span className="text-xs text-slate-600 font-semibold">({Math.round(calcArea * 0.0929)} m²)</span>
              </div>
              <input
                type="range"
                id="roof-area"
                min="500"
                max="50000"
                step="250"
                value={calcArea}
                onChange={(e) => setCalcArea(Number(e.target.value))}
                className="w-full cursor-pointer h-2 bg-slate-200 rounded-lg accent-[#0995c2]"
              />
              <div className="mt-1.5 flex justify-between text-[11px] font-medium text-slate-500">
                <span>500 sq ft</span><span>50,000 sq ft</span>
              </div>
            </div>

            {/* Climate & Exposure */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-[#29464d]">Climate / exposure</label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  { id: 'tropical', label: 'Kerala Torrential Monsoon' },
                  { id: 'coastal', label: 'Coastal Saline Marine Fog' },
                  { id: 'high-uv', label: 'High Tropical Solar Heat' },
                  { id: 'chemical', label: 'Industrial Fumes & Chemical' },
                  { id: 'standard', label: 'Moderate Inland Climate' }
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCalcClimate(c.id)}
                    aria-pressed={calcClimate === c.id}
                    className={`rounded-xl border p-3 text-left text-xs font-bold transition ${
                      calcClimate === c.id
                      ? 'border-[#0785ad] bg-cyan-50 text-[#0e323a] ring-1 ring-[#0785ad]'
                        : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Roof Pitch */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#29464d]">Roof pitch / slope</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: 'Low Slope (5° - 15°)' },
                  { id: 'medium', label: 'Standard Sloping (15° - 30°)' },
                  { id: 'steep', label: 'High Pitch (30° - 50°)' }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setCalcPitch(p.id)}
                    aria-pressed={calcPitch === p.id}
                    className={`rounded-xl border p-3 text-center text-xs font-bold transition ${
                      calcPitch === p.id
                      ? 'border-[#0785ad] bg-cyan-50 text-[#0e323a] ring-1 ring-[#0785ad]'
                        : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimation Calculation Output Card */}
          <div
            className="flex flex-col justify-between rounded-2xl border border-white/10 p-5 text-white shadow-[0_16px_40px_rgba(6,23,27,0.16)] sm:p-7 lg:col-span-5"
            style={{ backgroundColor: '#06171b' }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-200">
                  Your starting point
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-200">
                  <ShieldCheck size={13} /> OxyFlo systems
                </span>
              </div>

              <div className="mt-6">
                <div className="text-sm font-medium text-slate-300">Recommended profile</div>
                <div className="mt-2 font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
                  {estimationResult.recSystem}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                  <CheckCircle2 size={13} /> {estimationResult.profileType}
                </div>
              </div>

              {/* Metrics grid */}
              <div className="mt-6 space-y-4 border-t border-white/15 pt-5 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-300">Approx. sheet count</span>
                  <span className="font-semibold text-cyan-200">
                    ~{estimationResult.sheetCount.toLocaleString()} units
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-300">Reference support spacing</span>
                  <span className="text-right font-semibold text-white">{estimationResult.purlinRec}</span>
                </div>
              </div>

              <div
                className="mt-6 rounded-xl border border-white/15 p-4 text-xs leading-5 text-slate-300"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              >
                <span className="font-semibold text-cyan-200">Planning note:</span> This result is an early estimate. Confirm sheet quantities, support spacing, and installation requirements with the OxyFlo team.
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href="#contact"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl py-3 text-center text-sm font-semibold text-white transition hover:bg-[#087b9e]"
                style={{ backgroundColor: '#078eb7' }}
              >
                <span>Request Quotation for this Configuration</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
