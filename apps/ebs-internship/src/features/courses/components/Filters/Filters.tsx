import { FilterOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";

const Filters = () => {
  return (
    <Flex gap={6} align="start">
      <FilterOutlined style={{ fontSize: 24 }} />
      <Typography.Text>Filter</Typography.Text>
    </Flex>
  );
};

export default Filters;
