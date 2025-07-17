import { ApiRoutes, getApiUrlById } from "@/config/api-routes";
import { ApiResponse, axiosInstance, Course } from "@libs";
import QueryString from "qs";

export interface UpdateCourseBody {
  id?: number;
  title?: string;
  summary?: string;
  image_path?: string;
  video_path?: string;
  image_url?: string;
  video_url?: string;
  duration?: string;
  scorm_sco_id?: number;
  status?: string;
  subtitle?: string;
  language?: string;
  description?: string;
  level?: string;
  poster_path?: string;
  poster_url?: string;
  active_from?: string;
  active_to?: string;
  hours_to_complete?: number;
  findable?: boolean;
  target_group?: string;
  teaser_url?: string;
  public?: boolean;
  fields?: unknown;
}

interface UpdateCourseParams {
  categories?: number[];
  tags?: string[];
  authors?: number[];
}

export const updateCourse = async (
  courseId: number,
  body?: UpdateCourseBody,
  params?: UpdateCourseParams
) => {
  try {
    const response = await axiosInstance.post<ApiResponse<Course>>(
      getApiUrlById(ApiRoutes.COURSES, courseId),
      body,
      {
        params,
        paramsSerializer: {
          serialize: (params) =>
            QueryString.stringify(params, {
              arrayFormat: "brackets",
              encode: false,
            }),
        },
      }
    );

    return response.data.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
