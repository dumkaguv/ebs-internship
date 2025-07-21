import { Card, Flex, List, Skeleton } from "antd";

interface Props {
  count?: number;
}

export const CourseListSkeletons = ({ count = 6 }: Props) => {
  return (
    <List
      dataSource={Array.from({ length: count }, (_, index) => ({ key: index }))}
      grid={{
        gutter: [16, 40],
        xxl: 3,
        xl: 3,
        lg: 2,
        md: 2,
        sm: 1,
        xs: 1,
      }}
      renderItem={() => (
        <List.Item className="w-full">
          <Card
            cover={
              <Skeleton.Image
                active
                style={{ maxWidth: "unset", height: 240, width: "100%" }}
              />
            }
            className="w-full"
          >
            <Flex
              vertical
              gap={12}
              className="w-full"
            >
              <Skeleton
                active
                title={false}
                paragraph={{ rows: 1, width: "80%" }}
              />
              <Skeleton
                active
                title={false}
                paragraph={{ rows: 2 }}
              />
              <Skeleton.Button
                active
                style={{ width: 100 }}
              />
            </Flex>
          </Card>
        </List.Item>
      )}
    />
  );
};
