import { useState } from 'react';
import { stoneCoatedLayers, upvcLayers } from '../../data/layers';
import { Layers, ShieldCheck } from 'lucide-react';

export default function LayerVisualizer() {
  const [selectedTech, setSelectedTech] = useState('stone'); // 'stone' or 'upvc'
  const [activeLayer, setActiveLayer] = useState(0);

  const currentLayers = selectedTech === 'stone' ? stoneCoatedLayers : upvcLayers;
  const currentActiveLayer = currentLayers[activeLayer] || currentLayers[0];

  const handleTechChange = (tech) => {
    setSelectedTech(tech);
    setActiveLayer(0);
  };

  return (
    <div className="mt-8 sm:mt-12">
      {/* Technology selector tabs */}
      <div className="mb-8 flex justify-center">
        <div className="grid w-full max-w-2xl gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm sm:grid-cols-2">
          <button
            type="button"
            onClick={() => handleTechChange('stone')}
            aria-pressed={selectedTech === 'stone'}
            className={`flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
              selectedTech === 'stone'
                ? 'text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            style={selectedTech === 'stone' ? { backgroundColor: '#0e323a' } : {}}
          >
            <Layers size={15} />
            <span>Stone-coated steel</span>
          </button>
          <button
            type="button"
            onClick={() => handleTechChange('upvc')}
            aria-pressed={selectedTech === 'upvc'}
            className={`flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
              selectedTech === 'upvc'
                ? 'text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            style={selectedTech === 'upvc' ? { backgroundColor: '#0e323a' } : {}}
          >
            <ShieldCheck size={15} />
            <span>Layered UPVC</span>
          </button>
        </div>
      </div>

      <div className="grid min-w-0 items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Layer Selection Column */}
        <div className="grid min-w-0 gap-2.5 sm:gap-3 lg:col-span-5 lg:max-h-[520px] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1">
          {currentLayers.map((layer, idx) => (
            <button
              key={layer.name}
              type="button"
              onClick={() => setActiveLayer(idx)}
              aria-pressed={activeLayer === idx}
              className={`min-w-0 w-full rounded-xl border p-3 text-left transition-all sm:p-4 ${
                activeLayer === idx
                  ? 'border-[#0995c2] bg-cyan-50/70 shadow-sm ring-2 ring-[#0995c2]'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex min-w-0 items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white shadow-xs shrink-0"
                    style={{ backgroundColor: layer.color }}
                  >
                    {layer.step}
                  </span>
                  <h4 className="min-w-0 break-words font-heading text-sm font-semibold leading-5 text-slate-900">{layer.name}</h4>
                </div>
                <span className="text-[13px] font-bold font-mono text-[#0995c2] shrink-0">{layer.thickness}</span>
              </div>
              {activeLayer === idx && (
                <p className="mt-2.5 pl-10 text-xs leading-relaxed text-slate-700 font-normal">{layer.desc}</p>
              )}
            </button>
          ))}
        </div>

        {/* Animated roof sheet cutaway */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="bg-slate-50 px-5 pt-5 sm:px-7 sm:pt-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Animated product cutaway</span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-slate-900 sm:text-xl">
                    {selectedTech === 'stone' ? 'Stone-coated steel sheet' : 'UPVC roofing sheet'}
                  </h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {currentLayers.length} layers
                </span>
              </div>
              <svg viewBox="0 0 560 360" role="img" aria-label={`${selectedTech === 'stone' ? 'Stone-coated steel' : 'UPVC'} sheet layers, shown separated in an animated cutaway`} className="mx-auto block h-auto w-full max-w-[560px] overflow-visible py-2 sm:py-5">
                <defs>
                  <linearGradient id="sheetEdge" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".8"/><stop offset="1" stopColor="#0f172a" stopOpacity=".25"/></linearGradient>
                  <pattern id="stoneGranules" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill={currentLayers[0].color}/><circle cx="2" cy="2" r="1" fill="#fff" opacity=".8"/><circle cx="6" cy="5" r="1.2" fill="#0f172a" opacity=".48"/></pattern>
                  <filter id="sheetLift" x="-20%" y="-40%" width="150%" height="200%"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0f172a" floodOpacity=".16"/></filter>
                </defs>
                {currentLayers.map((layer, idx) => {
                  const gap = currentLayers.length === 9 ? 30 : 54;
                  const top = (selectedTech === 'stone' ? 16 : 55) + idx * gap + (activeLayer === idx ? -8 : 0);
                  const profile = selectedTech === 'upvc'
                    ? 'M64 0 L104 0 L112 -12 L128 -12 L136 0 L176 0 L184 -12 L200 -12 L208 0 L248 0 L256 -12 L272 -12 L280 0 L320 0 L328 -12 L344 -12 L352 0 L392 0 L400 -12 L416 -12 L424 0 L464 0'
                    : 'M64 0 Q84 -5 104 0 Q124 -5 144 0 Q164 -5 184 0 Q204 -5 224 0 Q244 -5 264 0 Q284 -5 304 0 Q324 -5 344 0 Q364 -5 384 0 Q404 -5 424 0 Q444 -5 464 0';
                  return (
                    <g
                      key={`${selectedTech}-${layer.name}`}
                      className="roof-layer-position cursor-pointer"
                      style={{ transform: `translateY(${top}px)` }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Show details for ${layer.name}`}
                      aria-pressed={activeLayer === idx}
                      onClick={() => setActiveLayer(idx)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setActiveLayer(idx);
                        }
                      }}
                    >
                      <g className="roof-layer" style={{ animationDelay: `${idx * 90}ms` }} filter={activeLayer === idx ? 'url(#sheetLift)' : undefined} opacity={activeLayer === idx ? 1 : 0.82}>
                        <path d={`${profile} L464 18 L64 18 Z`} fill={selectedTech === 'stone' && idx === 0 ? 'url(#stoneGranules)' : layer.color} stroke={activeLayer === idx ? '#0891b2' : '#fff'} strokeWidth={activeLayer === idx ? 2.5 : 1.25} strokeLinejoin="round" />
                        <path d="M64 18 L464 18 L490 31 L90 31 Z" fill={layer.color} opacity=".72" />
                        <path d="M464 0 L490 13 L490 31 L464 18 Z" fill="url(#sheetEdge)" />
                        <path d={profile} fill="none" stroke="white" strokeOpacity=".42" strokeWidth="1.5" />
                        <circle cx="38" cy="12" r="13" fill={activeLayer === idx ? '#0e323a' : '#64748b'} />
                        <text x="38" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">{layer.step.slice(-2)}</text>
                      </g>
                    </g>
                  );
                })}
                <path d="M75 336 H470" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 7" />
                <text x="272" y="354" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Select a layer to see it lift out</text>
              </svg>
            </div>
            <div className="min-w-0 p-4 sm:p-7" aria-live="polite" aria-atomic="true">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                    {selectedTech === 'stone' ? 'Stone-coated steel' : 'Multi-layer UPVC'} · Layer {currentActiveLayer.step}
                  </span>
                  <h3 className="mt-1 break-words font-heading text-lg font-bold text-slate-900 sm:text-2xl">{currentActiveLayer.name}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">{currentActiveLayer.desc}</p>
                </div>
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {currentActiveLayer.thickness}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
