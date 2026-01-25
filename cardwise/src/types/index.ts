export interface AnnualFee {
  currency: string;
  principal: number;
  supplementary: number;
  waivedFirstYear: boolean;
  waiverConditions?: string;
}

export interface Requirements {
  minIncome: {
    amount: number;
    currency: string;
    period: 'month' | 'annum';
  };
  age: {
    principal: number;
    supplementary: number;
  };
  eligibleGroups?: string[];
}

export interface CashbackCategory {
  name: string;
  rate: number;
  cap?: number;
  minSpend?: number;
}

export interface Benefits {
  cashback?: {
    maxRate: number;
    cappedAmount?: number;
    categories: CashbackCategory[];
    baseRate?: number;
  };
  miles?: {
    earnRate: string;
  };
  travel?: {
    loungeAccess?: string;
    insurance?: string;
  };
  features?: string[];
}

export interface Promotion {
  title: string;
  startDate: string;
  endDate: string;
  gift: string;
  conditions: string[];
}

export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  country: 'MY' | 'SG';
  type: 'cashback' | 'miles' | 'rewards';
  image: string;

  // New structured data
  fees: AnnualFee;
  requirements: Requirements;
  benefits: Benefits;
  promotion?: Promotion;

  // Legacy/Display fields (kept for compatibility or easy display)
  highlights: string[];
  pros: string[];
  cons: string[];
  rating: number;
  applyUrl: string;
  featured: boolean;
}
