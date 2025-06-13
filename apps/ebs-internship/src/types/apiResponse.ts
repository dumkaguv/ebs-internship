export interface ApiResponse<T> {
  data: T;
  meta?: Meta;
  message: string;
  success: boolean;
}

export interface Link {
  url?: string | null;
  label: string;
  active: boolean;
}

export interface Meta {
  meta: {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url?: string | null;
    path: string;
    per_page: number;
    prev_page_url?: string | null;
    to: number;
    total: number;
  };
}
