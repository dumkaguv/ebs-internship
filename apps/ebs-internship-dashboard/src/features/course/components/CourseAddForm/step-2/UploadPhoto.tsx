import { FileImageOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Image, Spin, Typography, Upload } from "antd";
import { Upload as UploadIcon } from "@/assets";
import { useCourseAddFormStep2Styles } from "./CourseAddFormStep2Styles";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useUploadHandler } from "@/features/course/hooks";

export const UploadPhoto = () => {
  const { setPhotoFile } = useAddCourseFormStore();

  const {
    loading,
    previewUrl: imageUrl,
    handleChange,
    beforeUpload,
  } = useUploadHandler({
    targetBase: "image",
    onFileSet: setPhotoFile,
  });

  const { styles } = useCourseAddFormStep2Styles();

  return (
    <Form.Item name="photo">
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
