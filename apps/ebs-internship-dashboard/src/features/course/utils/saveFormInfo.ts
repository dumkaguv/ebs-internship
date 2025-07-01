import { LOCAL_STORAGE } from "@libs";

interface Props {
  form: Record<string, string>;
}

const IGNORED_INPUTS = ["video", "photo"];

export const saveFormInfo = (form: Props) => {
  const cleared = Object.fromEntries(
    Object.entries(form).filter(([key]) => !IGNORED_INPUTS.includes(key))
  );

  localStorage.setItem(LOCAL_STORAGE.COURSE_ADD_FORM, JSON.stringify(cleared));
};
