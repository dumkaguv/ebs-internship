import { PlayCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Form,
  message,
  Spin,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { Upload as UploadIcon } from "@/assets";
import { useState } from "react";

const MAX_SIZE_MB = 500;

const onBeforeUpload = (file: File): boolean => {
  const isMp4 = file.type === "video/mp4";
  if (!isMp4) {
    message.error("Only .mp4 videos are allowed!");
  }

  const isUnderLimit = file.size / 1024 / 1024 < MAX_SIZE_MB;
  if (!isUnderLimit) {
    message.error(`Video must be smaller than ${MAX_SIZE_MB}MB!`);
  }

  return isMp4 && isUnderLimit;
};

export const UploadVideo = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps["onChange"] = (info) => {
    const file = info.file.originFileObj as File;

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setVideoUrl(previewUrl);
    }

    if (info.file.status === "uploading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const { styles } = useCourseAddFormStep2Styles();

  return (
    <Form.Item
      name="video"
      valuePropName="file"
      rules={[{ required: true, message: "Please upload a video" }]}
    >
      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={5}>Course Trailer</Typography.Title>
        <Flex gap={16}>
          <Flex gap={24}>
            {videoUrl ? (
              <video
                src={videoUrl}
                width={230}
                height={140}
                controls
              />
            ) : (
              <div className={styles.uploadWrapper}>
                {loading ? (
                  <Spin />
                ) : (
                  <PlayCircleOutlined className={styles.uploadPhotoIcon} />
                )}
              </div>
            )}
            <Flex
              vertical
              gap={24}
              align="start"
            >
              <Typography.Paragraph>
                Students who watch a well-made promo video are 5X more likely to
                enroll in your course. We've seen that statistic go up to 10X
                for exceptionally awesome videos.
              </Typography.Paragraph>
              <Upload
                id="video"
                showUploadList={false}
                beforeUpload={onBeforeUpload}
                onChange={handleChange}
              >
                <Button
                  type="primary"
                  loading={loading}
                  icon={<UploadIcon fill="transparent" />}
                  iconPosition="end"
                >
                  Upload Video
                </Button>
              </Upload>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Form.Item>
  );
};
