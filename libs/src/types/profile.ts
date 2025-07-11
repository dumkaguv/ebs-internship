export interface Profile {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  created_at: string;
  onboarding_completed: number;
  email_verified: boolean;
  interests: string[];
  avatar: string;
  roles: string[];
  permissions: string[];
  path_avatar: string;
  notification_channels: unknown;
}
