import { Category } from "./category";

export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  path_avatar?: string;
  url_avatar?: string;
  interests: Array<unknown>;
  categories: Category[];
  "Privacy Policy": boolean;
  bio?: string;
  address?: string;
  "Terms of Service": boolean;
}
