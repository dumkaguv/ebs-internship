import { Card, Flex, Typography } from "antd";
import {
  FormChangePassword,
  FormMainInfo,
} from "@/features/settings/components";

export const SettingsPage = () => {
  return (
    <Flex
      vertical
      gap={36}
    >
      <Card>
        <Flex
          vertical
          gap={24}
          className="w-full"
        >
          <Typography.Title level={4}>Account Settings</Typography.Title>
          <FormMainInfo />
        </Flex>
      </Card>

      <Card>
        <Flex
          vertical
          gap={24}
          className="w-full"
        >
          <Typography.Title level={4}>Change Password</Typography.Title>

          <FormChangePassword />
        </Flex>
      </Card>
    </Flex>
  );
};
