import React from 'react';
import { Leaf, ZapOff, CheckCircle2, ShieldCheck } from 'lucide-react';

export const FeatureBadges: React.FC<{ className?: string }> = ({ className = '' }) => {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Formula',
      desc: 'Plant & marine botanicals',
    },
    {
      icon: ZapOff,
      title: 'No Stimulants',
      desc: 'Gentle, zero caffeine or jitters',
    },
    {
      icon: CheckCircle2,
      title: 'Easy To Use',
      desc: '1 convenient daily capsule',
    },
    {
      icon: ShieldCheck,
      title: 'Non-GMO',
      desc: 'Pure, audited ingredients',
    },
  ];

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 ${className}`}>
      {features.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-2 shadow-xs">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800 tracking-tight leading-snug">
              {item.title}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 leading-tight">
              {item.desc}
            </span>
          </div>
        );
      })}
    </div>
  );
};
