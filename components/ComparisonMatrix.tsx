import React from 'react';
import { Check, X } from 'lucide-react';

interface MatrixRow {
  feature: string;
  optionA: string | boolean;
  optionB: string | boolean;
  verdict?: string;
}

interface ComparisonMatrixProps {
  title: string;
  optionAName: string;
  optionBName: string;
  rows: MatrixRow[];
}

export default function ComparisonMatrix({
  title,
  optionAName,
  optionBName,
  rows,
}: ComparisonMatrixProps) {
  const renderValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-4 h-4 text-[#10B981] mx-auto" />
      ) : (
        <X className="w-4 h-4 text-[#EF4444] mx-auto" />
      );
    }
    return <span>{val}</span>;
  };

  return (
    <div className="my-8 rounded-2xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] overflow-hidden text-left">
      <div className="p-4 sm:p-5 bg-[#FAF8F2] border-b border-[var(--border-color)]">
        <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-[var(--border-color)] bg-white">
              <th className="py-3 px-4 font-bold text-[var(--text-dark)] w-2/5">
                Feature / Dimension
              </th>
              <th className="py-3 px-4 font-bold text-center text-[var(--text-dark)] w-3/10 bg-[#FAF8F2]/50">
                {optionAName}
              </th>
              <th className="py-3 px-4 font-bold text-center text-[var(--text-dark)] w-3/10">
                {optionBName}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#FAF8F2]/40 transition-colors">
                <td className="py-3 px-4 text-[var(--text-dark)] font-medium">
                  {row.feature}
                </td>
                <td className="py-3 px-4 text-center text-[var(--text-muted)] bg-[#FAF8F2]/30">
                  {renderValue(row.optionA)}
                </td>
                <td className="py-3 px-4 text-center text-[var(--text-muted)]">
                  {renderValue(row.optionB)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
