export interface PricingPackage {
  id: string;
  name: string;
  bottlesCount: number;
  bonusBottlesCount?: number;
  supplyDays: number;
  pricePerBottle: number;
  totalPrice: number;
  shippingCost: number; // 0 for free
  savingsLabel: string;
  isBestValue?: boolean;
  isMostPopular?: boolean;
  badgeText?: string;
  freeBonusText?: string;
  checkoutUrl: string;
}

export interface Ingredient {
  name: string;
  commonName: string;
  role: string;
  description: string;
  benefitTag: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  quote: string;
  verifiedPurchase: boolean;
  usedPeriod: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ComplianceRule {
  id: string;
  rule: string;
  status: 'PASS' | 'FLAGGED';
  implementationNote: string;
}
