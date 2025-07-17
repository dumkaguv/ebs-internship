import { Upload as UploadIcon } from "@/assets";
import {
  Button,
  Flex,
  Typography,
  Image,
  Upload,
  message,
  UploadProps,
} from "antd";
import { useUploadPhotoStyles } from "./UploadPhotoStyles";
import { useAuthStore } from "@libs";
import type { UploadFile } from "@/types";
import { useState } from "react";
import { getBase64 } from "@/utils";

const MAX_LIMIT_PHOTO_SIZE_MB = 4;

const beforeUpload = (file: UploadFile) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/jpg" ||
    file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isUnderLimit = file.size / 1024 / 1024 < MAX_LIMIT_PHOTO_SIZE_MB;
  if (!isUnderLimit) {
    message.error(`Image must smaller than ${MAX_LIMIT_PHOTO_SIZE_MB}MB!`);
  }

  return isJpgOrPng && isUnderLimit;
};

export const UploadPhoto = () => {
  const { profile } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const { styles } = useUploadPhotoStyles();

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as UploadFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <Flex className={styles.uploadPhotoWrapper}>
      <Flex
        vertical
        gap={24}
      >
        <div className={styles.imageWrapper}>
          <Image
            className={styles.profileImage}
            height={200}
            width={200}
            src={imageUrl || profile?.avatar}
            preview={false}
            alt="Profile photo"
          />
          <Upload
            beforeUpload={beforeUpload}
            onChange={handleChange}
            showUploadList={false}
            className={styles.imageUploadButton}
          >
            <Button
              type="text"
              icon={<UploadIcon fill="transparent" />}
              loading={loading}
            >
              Upload Photo
            </Button>
          </Upload>
        </div>

        <Typography.Text className={styles.imageText}>
          Image size should be under 2 MB and image ration needs to be 1:1
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
