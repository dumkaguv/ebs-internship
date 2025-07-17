export interface Topic {
  id: number;
  title: string;
  lesson_id: number;
  active: boolean;
  preview: boolean;
  topicable_id: number;
  topicable_type: string;
  summary?: string | null;
  introduction?: string | null;
  description?: string | null;
  order: number;
  json?: unknown;
  can_skip: boolean;
  duration?: number | null;
}
