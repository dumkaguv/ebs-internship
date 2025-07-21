import { Button, Flex, Image, message, Typography, Upload } from "antd";
import { useUserFormStyles } from "./UserImageFormStyles";
import { useEffect, useState } from "react";
import { uploadUserAvatar } from "@/features/userProfile/api";
import { User } from "@libs";
interface Props {
  data: User;
}

export const UserImageForm = ({ data }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>();
  const [imageFile, setImageFile] = useState<File | null>();
  const { styles } = useUserFormStyles();

  useEffect(() => {
    if (data?.avatar) {
      setImageUrl(data.avatar);
    }
  }, [data]);

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

    try {
      await uploadUserAvatar(imageFile);
      message.success("Image saved successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to save image");
    }
  };

  return (
    <Flex
      vertical
      gap={16}
      justify="space-between"
      className={styles.imageContainer}
    >
      <Flex
        gap={16}
        vertical
      >
        <Typography.Title level={4}>Image Preview</Typography.Title>

        <Flex
          vertical
          className={styles.imagePreview}
          justify="center"
          align="center"
          gap={10}
        >
          <Image
            src={imageUrl ?? "/images/Image.png"}
            alt="avatar"
            className={styles.image}
          />
          <Upload
            beforeUpload={handlePreview}
            showUploadList={false}
            accept="image/*"
          >
            <Button>Upload Image</Button>
          </Upload>
        </Flex>
      </Flex>

      <Button
        className={styles.saveImageButton}
        onClick={handleSave}
      >
        Save Image
      </Button>
    </Flex>
  );
};
