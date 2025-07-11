import { ApiRoutes } from "@/config/api-routes";
import type { UploadFile } from "@/types";
import { CreatedFile } from "@/types/createdFile";
import { axiosInstance } from "@libs";
import type { ApiResponse } from "@libs/types";

interface UploadFilesParams {
  target: string;
  file: File | UploadFile;
}

export const uploadFiles = async (body: UploadFilesParams) => {
  try {
    const formData = new FormData();
    formData.append("target", body.target);
    formData.append("file[]", body.file);

    const response = await axiosInstance.post<ApiResponse<CreatedFile[]>>(
      ApiRoutes.FILES.UPLOAD,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.data[0];
  } catch (e) {
    console.log(e);
    return;
  }
};
