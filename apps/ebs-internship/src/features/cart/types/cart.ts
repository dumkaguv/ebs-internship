import { CartItem } from "./cartItem";

export interface Cart {
  total: number;
  subtotal: number;
  tax: number;
  items: CartItem[];
  total_with_tax: number;
  additional_discount: number;
  total_prediscount: number;
  coupon?: string;
  coupon_type?: string;
}
