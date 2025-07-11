import {
  Button,
  Flex,
  Form,
  Image,
  Input,
  message,
  Typography,
  Upload,
} from "antd";
import { useUserProfileFormStyles } from "./UserProfileImageFormStyles";
import { useState } from "react";
import { Api } from "@libs";

export const UserProfileImageForm = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { styles } = useUserProfileFormStyles();

  const handlePreview = (file: File) => {
    if (!file.type.startsWith("image/")) {
      message.error("Only image files are allowed");
      return Upload.LIST_IGNORE;
    }

    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result as string);
    reader.readAsDataURL(file);

    setImageFile(file);
    return false;
  };

  const handleSave = async () => {
    if (!imageFile) {
      message.warning("Please upload an image");
      return;
    }
    const uploadedUrl = await Api.profile.uploadUserAvatar(imageFile);
    await Api.profile.changeUserSettings({ avatar: uploadedUrl });
    message.success("Image saved successfully!");
  };

  return (
    <Flex
      className={styles.imageContainer}
      vertical
    >
      <Flex
        gap={16}
        vertical
      >
        <Typography.Title level={4}>Image Preview</Typography.Title>

        <Flex
          className={styles.imagePreview}
          justify="center"
          align="center"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="avatar"
              className={styles.image}
            />
          ) : (
            <img
              className={styles.defaultImage}
              src="/images/Image.png"
              alt="defaultImage"
            />
          )}
        </Flex>
      </Flex>

      <Flex
        gap={16}
        vertical
        justify="flex-start"
        className={styles.uploadContainer}
      >
        <Flex
          gap={16}
          align="flex-end"
        >
          <Form.Item
            label={
              <Typography.Title level={4}>Add/Change Image</Typography.Title>
            }
            name="image_label"
            className={styles.formItem}
          >
            <Input
              placeholder="Enter image label"
              className={styles.inputForm}
            />
          </Form.Item>

          <Form.Item
            name="avatar"
            className={styles.formItem}
          >
            <Upload
              beforeUpload={handlePreview}
              showUploadList={false}
              accept="image/*"
            >
              <Button className={styles.uploadButton}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </Flex>
        <Button
          className={styles.saveImageButton}
          onClick={handleSave}
        >
          Save Image
        </Button>
      </Flex>
    </Flex>
  );
};
