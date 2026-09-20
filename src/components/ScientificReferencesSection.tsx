import React, { useState } from 'react';
import { SCIENTIFIC_REFERENCES } from '../data/optiplaxData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ScientificReferencesSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedReferences = isExpanded
    ? SCIENTIFIC_REFERENCES
    : SCIENTIFIC_REFERENCES.slice(0, 8);

  return (
    <section id="references" className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Grey Journal / Media Logos Strip - Exact match to Image 11 top */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 py-6 border-b border-slate-200 opacity-60 grayscale hover:grayscale-0 transition-all">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-800">
            healthline
          </span>
          <span className="font-sans text-lg sm:text-xl font-black tracking-tighter text-slate-900">
            ScienceDirect
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-normal lowercase text-slate-900">
            nature
          </span>
          <div className="flex items-center gap-1 text-slate-900">
            <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight">frontiers</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-slate-100 px-1 py-0.5 rounded">
              Science News
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center my-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit',sans-serif]">
            Scientific References
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Peer-reviewed research and clinical citations supporting the ingredients in OptiPlax™
          </p>
        </div>

        {/* Two-Column Numbered Citations - Exact match to Image 11 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
          {displayedReferences.map((ref) => (
            <div key={ref.id} className="flex items-start gap-2">
              <span className="font-bold text-slate-900 flex-shrink-0 w-5 text-right">
                {ref.id}.
              </span>
              <p>
                {ref.text}{' '}
                {ref.doi && (
                  <a
                    href={ref.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-900 break-all"
                  >
                    [Source]
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Toggle */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b3b75] hover:text-blue-900 py-2 px-4 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Show Fewer References</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>View All 17 References</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
