import { Course } from "@libs";
import { GetProp, UploadProps } from "antd";
import { create } from "zustand";

export type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface AddCourseFormState {
  course: Course | null;
  currentStep: number;
  photoFile: FileType | null;
  videoFile: FileType | null;

  setCurrentStep: (step: number) => void;
  setCourse: (course: Course) => void;
  setPhotoFile: (file: FileType) => void;
  setVideoFile: (file: FileType) => void;
}

export const useAddCourseFormStore = create<AddCourseFormState>((set) => ({
  course: null,
  currentStep: 1,
  photoFile: null,
  videoFile: null,

  setCurrentStep: (step) => set({ currentStep: step }),
  setCourse: (course) => set({ course: course }),
  setPhotoFile: (file) => set({ photoFile: file }),
  setVideoFile: (file) => set({ videoFile: file }),
}));
