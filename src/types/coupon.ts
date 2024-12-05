export interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  validFrom: Date;
  validUntil: Date;
  maxUses: number;
  currentUses: number;
  minPurchaseAmount?: number;
  productIds?: string[];
  isActive: boolean;
}