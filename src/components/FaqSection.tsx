import React, { useState } from 'react';
import { SALES_PAGE_FAQS } from '../data/optiplaxData';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title - Exact match to Images 8 & 9 */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 7 Accordions */}
        <div className="space-y-3.5">
          {SALES_PAGE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-900 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base md:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-blue-700" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-600" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to order */}
        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#1b3b75] hover:bg-[#142c5a] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-transform active:scale-95"
          >
            Ready to Try OptiPlax? Click Here
          </a>
        </div>

      </div>
    </section>
  );
};
