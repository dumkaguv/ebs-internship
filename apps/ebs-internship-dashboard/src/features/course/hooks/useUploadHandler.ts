import { useState, useCallback } from "react";
import { message } from "antd";
import { getBase64 } from "@/utils";
import type {
  UploadChangeParam,
  UploadFile as AntdUploadFile,
} from "antd/es/upload/interface";
import { UploadFile } from "@/types";
import { useAddCourseFormStore } from "@/features/course/stores";

type TargetBase = "image" | "video";

interface UseUploadHandlerParams {
  targetBase: TargetBase;
  onFileSet: (file: UploadFile) => void;
}

interface UseUploadHandlerReturn {
  loading: boolean;
  previewUrl?: string | null;
  handleChange: (info: UploadChangeParam<AntdUploadFile>) => void;
  beforeUpload: (file: File) => boolean;
}

export const useUploadHandler = ({
  targetBase,
  onFileSet,
}: UseUploadHandlerParams): UseUploadHandlerReturn => {
  const { course } = useAddCourseFormStore();

  const [loading, setLoading] = useState(false);

  const setPreview = () => {
    if (targetBase === "image") {
      return course?.image_url;
    } else {
      return course?.video_url;
    }
  };

  const [previewUrl, setPreviewUrl] = useState(setPreview());

  const maxSizeMb = targetBase === "image" ? 2 : 500;

  const beforeUpload = (file: File): boolean => {
    let isValidType = false;

    if (targetBase === "image") {
      isValidType =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
      if (!isValidType) {
        message.error("You can only upload JPG/JPEG/PNG files!");
      }
    } else if (targetBase === "video") {
      isValidType = file.type === "video/mp4";
      if (!isValidType) {
        message.error("Only .mp4 videos are allowed!");
      }
    }

    const isUnderLimit = file.size / 1024 / 1024 < maxSizeMb;
    if (!isUnderLimit) {
      message.error(
        `${
          targetBase === "image" ? "Image" : "Video"
        } must be smaller than ${maxSizeMb}MB!`
      );
    }

    return isValidType && isUnderLimit;
  };

  const handleChange = useCallback(
    (info: UploadChangeParam<AntdUploadFile>) => {
      const file = info.file;
      const fileObj = file.originFileObj as UploadFile | undefined;
      const status = file.status;

      if (!fileObj) return;

      if (status === "uploading") {
        setLoading(true);
        if (targetBase === "video") {
          setPreviewUrl(URL.createObjectURL(fileObj));
        }
        return;
      }

      if (targetBase === "image") {
        if (status === "done") {
          getBase64(fileObj, (url) => {
            setPreviewUrl(url);
            setLoading(false);
            onFileSet(fileObj);
          });
        }
      } else if (targetBase === "video") {
        if (status === "done") {
          setLoading(false);
          onFileSet(fileObj);
        }
      }
    },
    [targetBase, onFileSet]
  );

  return { loading, previewUrl, handleChange, beforeUpload };
};
