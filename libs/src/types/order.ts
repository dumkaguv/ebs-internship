import { OrderItem } from "./orderItem";

export interface Order {
  id: number;
  status: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  tax: number;
  created_at: string;
  user_id: number;
  client_name: string | null;
  client_email: string | null;
  client_street: string | null;
  client_street_number: string | null;
  client_postal: string | null;
  client_city: string | null;
  client_country: string | null;
  client_company: string | null;
  client_taxid: string | null;
}
