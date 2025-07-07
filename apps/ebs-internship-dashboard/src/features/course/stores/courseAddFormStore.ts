import { FormInstance, GetProp, UploadProps } from "antd";
import { create } from "zustand";

export type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

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
  photoFile: FileType | null;
  videoFile: FileType | null;

  setForm: (form: FormInstance<CourseFormData>) => void;
  setCurrentStep: (step: number) => void;
  setPhotoFile: (file: FileType) => void;
  setVideoFile: (file: FileType) => void;
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
