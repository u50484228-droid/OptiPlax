import React, { useState } from 'react';
import { INGREDIENTS } from '../data/optiplaxData';
import { X, Check } from 'lucide-react';
import kelpImage from '../assets/images/kelp_seaweed_forest_1789911309015.jpg';
import wakameImage from '../assets/images/wakame_seaweed_fresh_1789911383731.jpg';
import astaxanthinImage from '../assets/images/astaxanthin_pure_red_1789911397768.jpg';
import chlorellaImage from '../assets/images/chlorella_pure_green_1789911411189.jpg';
import eckloniaCavaImage from '../assets/images/ecklonia_cava_harvest_1789911524766.jpg';

interface IngredientItem {
  id: string;
  name: string;
  cardPosition: 'left' | 'right';
  imageUrl: string;
  altText: string;
  description: string;
}

const INGREDIENTS_LIST: IngredientItem[] = [
  {
    id: 'kelp',
    name: 'Kelp',
    cardPosition: 'right',
    imageUrl: kelpImage,
    altText: 'Natural underwater kelp seaweed forest with golden fronds and sunlight',
    description: 'A nutrient-dense brown seaweed rich in natural iodine, polyphenols, and trace ocean minerals that support ocular cellular metabolism and tissue detox.'
  },
  {
    id: 'wakame',
    name: 'Wakame',
    cardPosition: 'left',
    imageUrl: wakameImage,
    altText: 'Fresh natural dark green wakame seaweed with silky ocean fronds',
    description: 'Celebrated for its fucoxanthin carotenoids and protective antioxidants that assist cellular defense against digital screen strain and oxidative degradation.'
  },
  {
    id: 'astaxanthin',
    name: 'Astaxanthin',
    cardPosition: 'right',
    imageUrl: astaxanthinImage,
    altText: 'Pure deep crimson red astaxanthin natural carotenoid extract',
    description: 'One of nature\'s most potent antioxidants, clinically researched for its ability to cross the blood-retina barrier, soothe eye fatigue, and maintain capillary blood flow.'
  },
  {
    id: 'chlorella',
    name: 'Chlorella',
    cardPosition: 'left',
    imageUrl: chlorellaImage,
    altText: 'Pure organic dark emerald green chlorella microalgae powder and tablets',
    description: 'A freshwater green microalga brimming with chlorophyll, RNA/DNA nucleic acids, and bioavailable micronutrients for internal cleansing and cellular rejuvenation.'
  },
  {
    id: 'ecklonia-cava',
    name: 'Ecklonia Cava',
    cardPosition: 'right',
    imageUrl: eckloniaCavaImage,
    altText: 'Authentic botanical Ecklonia Cava brown marine seaweed ribbons and pure phlorotannin extract powder on dark slate',
    description: 'Contains rare marine phlorotannin polyphenols with half-lives up to 12 hours, providing extended free-radical defense compared to common land plants.'
  }
];

interface IngredientsSectionProps {
  onOpenAllIngredients?: () => void;
}

export const IngredientsSection: React.FC<IngredientsSectionProps> = ({ onOpenAllIngredients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="ingredients" className="py-14 sm:py-20 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Exact match to Image 2 */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            In every capsule of OptiPlax you&rsquo;ll find:
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            An optimally dosed proprietary <strong className="font-semibold text-slate-900">blend of nourishing ingredients</strong> that have been carefully combined to complement each other, including:
          </p>
        </div>

        {/* 5 Alternating Ingredient Showcases - Exact match to Images 2, 3, 4 */}
        <div className="space-y-10 sm:space-y-14">
          {INGREDIENTS_LIST.map((item) => {
            const isCardRight = item.cardPosition === 'right';

            return (
              <div
                key={item.id}
                className="relative max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border border-slate-200/80 bg-white group"
              >
                {/* Photographic Showcase Container */}
                <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for card contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid White Card Label - Matching screenshots */}
                  <div
                    className={`absolute bottom-6 ${
                      isCardRight ? 'right-0 sm:right-6' : 'left-0 sm:left-6'
                    } z-10`}
                  >
                    <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-xl px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-4 min-w-[200px] sm:min-w-[240px]">
                      {isCardRight ? (
                        <>
                          <div className="w-10 sm:w-12 h-[2px] bg-slate-800 flex-shrink-0" />
                          <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight font-['Outfit',sans-serif]">
                            {item.name}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight font-['Outfit',sans-serif]">
                            {item.name}
                          </span>
                          <div className="w-10 sm:w-12 h-[2px] bg-slate-800 flex-shrink-0" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA Button - Exact match to Image 4: "See All Ingredients" */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            id="btn-see-all-ingredients"
            onClick={() => {
              if (onOpenAllIngredients) {
                onOpenAllIngredients();
              } else {
                setIsModalOpen(true);
              }
            }}
            className="inline-flex items-center justify-center bg-[#1b3b75] hover:bg-[#142c5a] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            See All Ingredients
          </button>
        </div>

      </div>

      {/* Comprehensive Nutritional Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit',sans-serif]">
                  Full OptiPlax™ Ingredient Profile
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Audited Marine, Botanical &amp; Carotenoid Formulation
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {INGREDIENTS.map((ing, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {ing.name}{' '}
                        <span className="text-xs font-normal text-slate-500">
                          ({ing.commonName})
                        </span>
                      </h4>
                      <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md mt-1">
                        {ing.role}
                      </span>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <Check className="w-3 h-3" /> Standardized
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {ing.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                100% Non-GMO • Stimulant-Free • cGMP US Facility
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto bg-[#1b3b75] text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-[#142c5a]"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
