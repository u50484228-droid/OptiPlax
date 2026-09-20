import React from 'react';
import { PricingPackage } from '../types';
import { ShieldCheck, ExternalLink, X, Lock } from 'lucide-react';
import optiplaxBottleImg from '../assets/images/optiplax_bottle_1789903985394.jpg';

interface CheckoutModalProps {
  pkg: PricingPackage | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ pkg, onClose }) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Proceeding to Official Checkout
          </h3>

          <p className="text-sm text-slate-600">
            You are being routed to the secure, 256-bit encrypted manufacturer order portal for <strong className="text-slate-900">OptiPlax™</strong>.
          </p>
        </div>

        {/* Order Details Summary Box */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <div className="flex items-center gap-4 pb-3 mb-3 border-b border-slate-200">
            <img
              src={optiplaxBottleImg}
              alt="OptiPlax Bottle"
              className="w-12 h-16 object-contain mix-blend-multiply drop-shadow-sm shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-black text-slate-900 text-base">
                OptiPlax™ ({pkg.bonusBottlesCount ? `${pkg.bottlesCount} + ${pkg.bonusBottlesCount} Bottles` : `${pkg.bottlesCount} Bottles`})
              </div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                {pkg.supplyDays} Days Vision Support Supply
              </p>
            </div>
          </div>
          <div className="flex justify-between font-bold text-slate-900">
            <span>Selected Package:</span>
            <span>{pkg.bonusBottlesCount ? `${pkg.bottlesCount} + ${pkg.bonusBottlesCount} Bottles` : `${pkg.bottlesCount} Bottles`}</span>
          </div>
          <div className="flex justify-between text-slate-600 text-xs">
            <span>Supply Duration:</span>
            <span>{pkg.supplyDays} Days Supply</span>
          </div>
          <div className="flex justify-between text-slate-600 text-xs">
            <span>Price Per Bottle:</span>
            <span className="font-semibold text-slate-900">${pkg.pricePerBottle} / bottle</span>
          </div>
          <div className="flex justify-between text-slate-600 text-xs">
            <span>Shipping:</span>
            <span className="font-semibold text-emerald-700">
              {pkg.shippingCost === 0 ? 'FREE Domestic U.S. Shipping' : '$9.99 Standard Shipping'}
            </span>
          </div>
          <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-base text-blue-900">
            <span>Total:</span>
            <span>${pkg.totalPrice + pkg.shippingCost}</span>
          </div>
        </div>

        {/* Guarantee note */}
        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>Covered by 60-Day 100% Money-Back Guarantee.</span>
        </div>

        {/* Action Button */}
        <div className="mt-6 space-y-3">
          <a
            href={pkg.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span>Continue to Official Secure Order Form</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-center text-slate-400">
            Official Checkout Target: buygoods.com • Safe, One-Time Billing
          </p>
        </div>
      </div>
    </div>
  );
};
