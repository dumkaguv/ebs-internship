import { FormInstance } from "antd";
import { create } from "zustand";

interface AddCourseFormState {
  form: FormInstance | null;
  currentStep: number;

  setForm: (form: FormInstance) => void;
  setCurrentStep: (step: number) => void;
}

export const useAddCourseFormStore = create<AddCourseFormState>((set) => ({
  form: null,
  currentStep: 1,

  setForm: (form) => set({ form: form }),
  setCurrentStep: (step) => set({ currentStep: step }),
}));
