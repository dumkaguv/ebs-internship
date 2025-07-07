import { FileImageOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Form,
  Image,
  message,
  Spin,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { useState } from "react";
import { Upload as UploadIcon } from "@/assets";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { useAddCourseFormStore } from "@/features/course/stores";
import { FileType } from "@/features/course/stores/courseAddFormStore";

const MAX_SIZE_MB = 2;

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/JPEG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < MAX_SIZE_MB;
  if (!isLt2M) {
    message.error(`Image must smaller than ${MAX_SIZE_MB}MB!`);
  }

  return isJpgOrPng && isLt2M;
};

export const UploadPhoto = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const { setPhotoFile } = useAddCourseFormStore();

  const { styles } = useCourseAddFormStep2Styles();

  const handleChange: UploadProps["onChange"] = (info) => {
    const photoOriginFile = info.file.originFileObj as FileType;
    const status = info.file.status;

    if (status === "uploading") {
      setLoading(true);
      return;
    }

    if (status === "done") {
      getBase64(photoOriginFile, (url) => {
        setLoading(false);
        setImageUrl(url);
        setPhotoFile(photoOriginFile);
      });
    }
  };

  return (
    <Form.Item
      name="photo"
      rules={[{ required: true, message: "Please upload a photo" }]}
    >
      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={5}>Course Thumbnail</Typography.Title>
        <Flex gap={16}>
          <Flex gap={24}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={230}
                height={220}
                className={styles.uploadedImage}
              />
            ) : (
              <div className={styles.uploadWrapper}>
                {loading ? (
                  <Spin />
                ) : (
                  <FileImageOutlined className={styles.uploadPhotoIcon} />
                )}
              </div>
            )}
            <Flex
              vertical
              gap={24}
              align="start"
            >
              <Typography.Paragraph>
                Upload your course Thumbnail here. <b>Important guidelines</b>:
                1200x800 pixels or 12:8 Ratio. Supported format:{" "}
                <b>.jpg, .jpeg, or .png</b>
              </Typography.Paragraph>
              <Upload
                id="photo"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                <Button
                  type="primary"
                  loading={loading}
                  icon={<UploadIcon fill="transparent" />}
                  iconPosition="end"
                >
                  Upload Image
                </Button>
              </Upload>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Form.Item>
  );
};
