import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FooterProps {
  onOpenReferences?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReferences }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string; content: string[] }> = {
    contact: {
      title: 'Contact Support',
      content: [
        'Our dedicated OptiPlax™ care specialists are available 24/7 to answer your questions, coordinate logistics, or provide guarantee assistance.',
        'Product Inquiries & Manufacturer Assistance: support@northvale.com.br',
        'Official Order & Fulfillment Portal: BuyGoods Customer Support Desk (available 24 hours a day, 7 days a week).',
        'Toll-Free U.S. Phone Support: 1-800-482-6719 (Monday through Friday, 9:00 AM – 5:00 PM EST).',
        'Corporate Headquarters: 1209 Orange St, Wilmington, DE 19801, USA.',
      ],
    },
    references: {
      title: 'Scientific Research Citations',
      content: [
        'OptiPlax™ is formulated in strict accordance with published literature on marine bio-actives, Astaxanthin carotenoids, and microalgal nutrition.',
        'All 17 peer-reviewed citations and clinical trials can be reviewed directly in our Scientific References section above.',
      ],
    },
    terms: {
      title: 'Terms Of Use',
      content: [
        'By accessing this website, you agree to comply with and be bound by all applicable terms of use and local laws.',
        'The content on this website is for informational and educational purposes only and is not intended to replace professional medical consultations.',
        'Prices, bundle promotions, and bonuses are subject to stock availability and may be updated without prior notice.',
      ],
    },
    disclaimer: {
      title: 'Health & Advertising Disclaimer',
      content: [
        'Statements on this website have not been evaluated by the Food and Drug Administration (FDA).',
        'Products are not intended to diagnose, treat, cure, or prevent any disease.',
        'Results may vary. The information provided is not a substitute for advice from a licensed medical healthcare provider.',
        'This site is not part of Google, Inc. or Alphabet, Inc. Additionally, this site is NOT endorsed by Google in any way.',
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      content: [
        'We value and respect your privacy. We implement 256-bit SSL encryption across all data transfer points.',
        'We do not sell, rent, or trade your personal data with unaffiliated third parties.',
        'Cookies may be used to analyze campaign performance and improve user experience in accordance with Google Ads guidelines.',
      ],
    },
    shipping: {
      title: 'Shipping Policy',
      content: [
        'Domestic U.S. orders are processed within 24 to 48 business hours and shipped via USPS or FedEx directly from our clean U.S. fulfillment facility.',
        'Orders within the United States typically arrive within 3 to 7 business days.',
        'All 3-bottle and 6-bottle orders receive 100% Free Shipping.',
      ],
    },
    refund: {
      title: 'Refund Policy & 60-Day Guarantee',
      content: [
        'OptiPlax comes with a 100% money-back guarantee for a full 60 days.',
        'If you are not thoroughly satisfied for any reason, simply contact our support team within 60 days of purchase for an immediate refund of your purchase price.',
      ],
    },
  };

  return (
    <footer className="bg-[#142850] text-slate-300 text-xs py-10 border-t border-blue-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Navigation Bar - Exact match to Image 11 bottom */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white font-semibold text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => setActiveLegalModal('contact')}
            className="hover:text-blue-300 transition-colors"
          >
            Contact
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={() => {
              if (onOpenReferences) {
                onOpenReferences();
              } else {
                setActiveLegalModal('references');
              }
            }}
            className="hover:text-blue-300 transition-colors cursor-pointer"
          >
            References
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={() => setActiveLegalModal('terms')}
            className="hover:text-blue-300 transition-colors"
          >
            Terms Of Use
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={() => setActiveLegalModal('disclaimer')}
            className="hover:text-blue-300 transition-colors"
          >
            Disclaimer
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={() => setActiveLegalModal('privacy')}
            className="hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={() => setActiveLegalModal('shipping')}
            className="hover:text-blue-300 transition-colors"
          >
            Shipping Policy
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={() => setActiveLegalModal('refund')}
            className="hover:text-blue-300 transition-colors"
          >
            Refund Policy
          </button>
        </div>

        {/* Support Links - Exact match to Image 11 */}
        <div className="space-y-1.5 text-center text-xs text-slate-300">
          <p>
            For Product Support, please contact the vendor{' '}
            <button
              type="button"
              onClick={() => setActiveLegalModal('contact')}
              className="text-blue-300 underline hover:text-white"
            >
              here
            </button>
            .
          </p>
          <p>
            For Order Support, please contact BuyGoods{' '}
            <button
              type="button"
              onClick={() => setActiveLegalModal('contact')}
              className="text-blue-300 underline hover:text-white"
            >
              here
            </button>
            .
          </p>
        </div>

        {/* FDA Statements & Disclaimers - Exact match to Image 11 */}
        <div className="space-y-3 text-[11px] leading-relaxed text-slate-400 text-center max-w-4xl mx-auto pt-2">
          <p>
            Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
          </p>
          <p>
            BuyGoods is the retailer of products on this site. BuyGoods® is a registered trademark of BuyGoods Inc., a Delaware corporation located at 1209 Orange Street, Wilmington DE 19801, USA and used by permission. BuyGoods&rsquo; role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
          </p>
          <p>
            This site is not a part of the Google website or Google Inc. Additionally, this site is NOT endorsed by Google in any way.
          </p>
        </div>

        {/* Copyright notice - Exact match to Image 11 */}
        <div className="pt-4 border-t border-blue-900/80 text-center text-[11px] text-slate-400">
          <p>Copyright © 2025 OptiPlax. All Rights Reserved.</p>
        </div>

      </div>

      {/* Legal Modal Popup */}
      {activeLegalModal && legalContent[activeLegalModal] && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white text-slate-900 rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900">
                {legalContent[activeLegalModal].title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {legalContent[activeLegalModal].content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-6 py-2 rounded-full bg-[#1b3b75] text-white text-xs font-bold hover:bg-[#142c5a] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
