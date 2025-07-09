import { Course } from "@libs";
import { create } from "zustand";

export interface CourseFormData {
  title: string;
  subtitle: string;
  categories: number[];
  tags: number[];
  topic: string;
  language: string;
  level: string;
  duration: number;
  description: string;
  teach: string[];
  audience: string[];
  requirements: string[];
  lessons: Lesson[];
}

interface Lesson {
  title: string;
  topics?: Topic[];
}

interface Topic {
  title: string;
  description: string;
  summary: string;
  introduction: string;
  duration: number;
  order: number;
  active: boolean;
  preview: boolean;
}

interface AddCourseFormState {
  course: Course | null;
  currentStep: number;

  setCurrentStep: (step: number) => void;
  setCourse: (course: Course) => void;
}

export const useAddCourseFormStore = create<AddCourseFormState>((set) => ({
  course: null,
  currentStep: 1,

  setCurrentStep: (step) => set({ currentStep: step }),
  setCourse: (course) => set({ course: course }),
}));
