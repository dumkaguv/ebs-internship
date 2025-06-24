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
import { FC, useState } from "react";
import { User } from "@/types/user";
import { changeUserSettings } from "@/features/userProfile/api/changeUserSettings";
import { uploadUserAvatar } from "@/features/userProfile/api/uploadUserAvatar";

interface Props {
  data: User;
}

const UserProfileImageForm: FC<Props> = ({ data }) => {
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
    const uploadedUrl = await uploadUserAvatar(imageFile);
    await changeUserSettings({ avatar: uploadedUrl });
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
          align="center"
        >
          <Form.Item
            label={
              <Typography.Title level={4}>Add/Change Image</Typography.Title>
            }
            name="avatar"
            className={styles.formItem}
          >
            <Input
              placeholder="Enter image label"
              className={styles.inputForm}
            />
          </Form.Item>
          <Upload
            beforeUpload={handlePreview}
            showUploadList={false}
            accept="image/*"
          >
            <Button className={styles.uploadButton}>Upload Image</Button>
          </Upload>
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

export default UserProfileImageForm;
