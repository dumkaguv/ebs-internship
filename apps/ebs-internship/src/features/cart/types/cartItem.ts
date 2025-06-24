import { Product } from "@/types";

export interface CartItem {
  id: number;
  product_id: number;
  product_type: string;
  product: Product;
  price: number;
  price_with_tax: number;
  quantity: number;
  subtotal: number;
  total: number;
  tax_rate: number;
  tax: number;
  total_with_tax: number;
  discount: number;
}
