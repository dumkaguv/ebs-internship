import { LOCAL_STORAGE } from "@libs";
import { CourseFormData } from "../stores/courseAddFormStore";

const IGNORED_INPUTS = ["video", "photo"];

export const saveFormInfo = (form: Partial<CourseFormData>) => {
  const storedRaw = localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM);
  const stored = storedRaw ? JSON.parse(storedRaw) : {};

  const merged = { ...stored };

  for (const [key, value] of Object.entries(form)) {
    if (IGNORED_INPUTS.includes(key)) {
      if (!(key in stored) && value) {
        merged[key] = value;
      }
    } else {
      merged[key] = value;
    }
  }

  localStorage.setItem(LOCAL_STORAGE.COURSE_ADD_FORM, JSON.stringify(merged));
};
