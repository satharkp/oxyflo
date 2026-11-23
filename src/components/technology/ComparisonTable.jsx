import { Check } from 'lucide-react';
import { comparisonData } from '../../data/layers';

export default function ComparisonTable() {
  return (
    <div className="mt-20 overflow-hidden rounded-2xl border border-[#d4e4e9] bg-white shadow-sm">
      <div className="border-b border-[#d4e4e9] px-6 py-5" style={{ backgroundColor: '#0e323a' }}>
        <h3 className="font-heading text-lg font-extrabold text-white">
          Technical Head-to-Head: OxyFlo vs Conventional Materials
        </h3>
        <p className="text-xs text-cyan-200 font-medium">Comparing lab-tested structural, environmental, and thermal benchmarks.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-xs">
          <thead className="border-b border-[#d4e4e9] bg-[#eef6f9] text-[#0e323a] font-heading">
            <tr>
              <th className="p-4 font-bold md:p-5">Performance Metric</th>
              <th className="p-4 font-extrabold text-[#0e323a] md:p-5" style={{ backgroundColor: '#dff1f8' }}>
                OxyFlo Engineered Systems
              </th>
              <th className="p-4 font-bold text-[#4b656e] md:p-5">Conventional Metal / GI Sheet</th>
              <th className="p-4 font-bold text-[#4b656e] md:p-5">Legacy Asbestos / Cement Fiber</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#edf4f6]">
            {comparisonData.map((row) => (
              <tr key={row.feature} className="hover:bg-[#f6fafb] transition-colors">
                <td className="p-4 font-bold text-[#0e323a] md:p-5">{row.feature}</td>
                <td className="p-4 font-extrabold text-[#0e323a] md:p-5" style={{ backgroundColor: '#f0f9fd' }}>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-[#0995c2] shrink-0 font-bold" />
                    <span>{row.oxyflo}</span>
                  </div>
                </td>
                <td className="p-4 text-[#5a747d] font-medium md:p-5">{row.metal}</td>
                <td className="p-4 text-[#5a747d] font-medium md:p-5">{row.asbestos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
