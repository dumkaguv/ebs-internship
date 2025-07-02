import { LOCAL_STORAGE } from "@libs";

interface FormInitialValues {
  lessons?: Array<{
    topics: Array<{
      title?: string;
      description?: string;
      summary?: string;
      duration?: number;
      order?: number;
      active?: boolean;
      preview?: boolean;
    } | null>;
  }>;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const getFormInfo = (): FormInitialValues => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE.COURSE_ADD_FORM);

    if (!stored) {
      return {
        lessons: [{ topics: [null] }],
        description: "",
      };
    }

    const parsedData = JSON.parse(stored);
    const isArray = Array.isArray(parsedData);

    const lessons = isArray
      ? parsedData.length > 0 && parsedData[0]?.lessons
        ? parsedData[0].lessons
        : [{ topics: [null] }]
      : parsedData?.lessons ?? [{ topics: [null] }];

    const description = isArray
      ? parsedData[0]?.description ?? ""
      : parsedData?.description ?? "";

    return {
      lessons,
      description,
      ...(isArray ? parsedData[0] : parsedData),
    };
  } catch (error) {
    console.error("Error parsing localStorage data:", error);

    return {
      lessons: [{ topics: [null] }],
      description: "",
    };
  }
};
