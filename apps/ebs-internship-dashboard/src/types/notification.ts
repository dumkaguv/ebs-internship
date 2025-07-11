export interface Notification<T = unknown> {
  id: string;
  data: T[];
  notifiable_id: number;
  notifiable_type: string;
  type: string;
  event: string;
  created_at: string;
  updated_at: string;
  read_at?: string;
}
