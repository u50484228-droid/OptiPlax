import React from 'react';
import { TESTIMONIALS } from '../data/optiplaxData';
import { Star, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Real Customer Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 font-['Outfit',sans-serif] tracking-tight">
            Trusted by Daily Screen Users & Night Drivers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Read how regular daily nutritional reinforcement helped real customers maintain ocular ease, comfort, and focus.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-base leading-snug">
                  "{review.title}"
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.author}</p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
                <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {review.usedPeriod}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Policy Disclaimer */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-3 rounded-xl bg-slate-100 border border-slate-200/80 text-xs text-slate-500">
          <p>
            * Disclaimer: Experiences and feedback are personal to each user. Results may vary depending on individual diet, baseline macular pigment density, lifestyle factors, and consistency of daily use.
          </p>
        </div>
      </div>
    </section>
  );
};
