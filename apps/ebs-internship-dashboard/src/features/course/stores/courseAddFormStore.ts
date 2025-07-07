import { FormInstance } from "antd";
import { create } from "zustand";
import type { UploadFile } from "@/types";

export interface CourseFormData {
  title: string;
  subtitle: string;
  categories: string[];
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
  duration: number;
  order: number;
  active: boolean;
  preview: boolean;
}

interface AddCourseFormState {
  form: FormInstance<CourseFormData> | null;
  currentStep: number;
  photoFile: UploadFile | null;
  videoFile: UploadFile | null;

  setForm: (form: FormInstance<CourseFormData>) => void;
  setCurrentStep: (step: number) => void;
  setPhotoFile: (file: UploadFile) => void;
  setVideoFile: (file: UploadFile) => void;
}

export const useAddCourseFormStore = create<AddCourseFormState>((set) => ({
  form: null,
  currentStep: 1,
  photoFile: null,
  videoFile: null,

  setForm: (form) => set({ form: form }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setPhotoFile: (file) => set({ photoFile: file }),
  setVideoFile: (file) => set({ videoFile: file }),
}));
