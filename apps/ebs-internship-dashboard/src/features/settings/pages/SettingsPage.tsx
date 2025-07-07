import { Card, Flex, Typography } from "antd";
import { FormMainInfo } from "@/features/settings/components";

export const SettingsPage = () => {
  return (
    <Card>
      <Flex gap={32}>
        <Flex
          vertical
          gap={24}
          className="w-full"
        >
          <Typography.Title level={4}>Account Settings</Typography.Title>
          <FormMainInfo />
        </Flex>
      </Flex>
    </Card>
  );
};
