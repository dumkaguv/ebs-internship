import { Topic } from "./topic";

export interface Lesson {
  id: number;
  title: string;
  summary?: string | null;
  duration?: number | null;
  active: boolean;
  order: number;
  course_id: number;
  active_from?: string | null;
  active_to?: string | null;
  lessons: Lesson[];
  topics: Topic[];
}
