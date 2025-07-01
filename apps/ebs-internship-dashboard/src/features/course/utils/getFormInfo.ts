import { LOCAL_STORAGE } from "@libs";

export const getFormInfo = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM);

  return stored ? (JSON.parse(stored) as Record<string, string>) : {};
};
