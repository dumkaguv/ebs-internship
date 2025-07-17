export interface OrderItem {
  price: number;
  quantity: number;
  subtotal: number;
  tax: number;
  total: number;
  total_with_tax: number;
  order_id: number;
  product_id: number;
  product_type: string;
}
