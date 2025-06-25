export interface User {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_active: boolean;
  created_at: string;
  onboarding_completed: number;
  email_verified: boolean;
  interests: [];
  avatar: string;
  roles: string[];
  permissions: string[];
  path_avatar: string;
  "Privacy Policy": boolean;
  bio: string;
  address: string;
  "Terms of Service": boolean;
  notification_channels: null;
}
