import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Spin, Typography, Upload } from "antd";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { Upload as UploadIcon } from "@/assets";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useUploadHandler } from "@/features/course/hooks";

export const UploadVideo = () => {
  const { setVideoFile } = useAddCourseFormStore();

  const {
    loading,
    previewUrl: videoUrl,
    handleChange,
    beforeUpload,
  } = useUploadHandler({
    targetBase: "video",
    onFileSet: setVideoFile,
  });

  const { styles } = useCourseAddFormStep2Styles();

  return (
    <Form.Item
      name="video"
      valuePropName="file"
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
                beforeUpload={beforeUpload}
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
