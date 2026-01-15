export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  country: 'MY' | 'SG';
  type: 'cashback' | 'miles' | 'rewards';
  image: string;
  annualFee: string;
  minIncome: string;
  signupBonus: string;
  cashbackRate: string | null;
  milesRate: string | null;
  highlights: string[];
  pros: string[];
  cons: string[];
  rating: number;
  applyUrl: string;
  featured: boolean;
}
