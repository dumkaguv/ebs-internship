export interface Coupon {
  id: number;
  name: string;
  code: string;
  type: string;
  active: boolean;
  active_from: string;
  active_to: string;
  limit_usage: number;
  limit_per_user: number;
  min_cart_price: number;
  max_cart_price: number;
  amount: number;
  included_products: number[];
  excluded_products: number[];
  users: [];
  included_categories: number[];
  excluded_categories: number[];
  exclude_promotions: boolean;
  usages: number;
}
