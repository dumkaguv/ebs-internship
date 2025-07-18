import { Card, Flex, List, Skeleton } from "antd";

interface Props {
  count?: number;
}

export const CourseListSkeletons = ({ count = 6 }: Props) => {
  return (
    <List
      dataSource={Array.from({ length: count }, (_, index) => ({ key: index }))}
      grid={{
        column: 3,
        gutter: [16, 40],
      }}
      renderItem={() => (
        <List.Item>
          <Card
            cover={
              <Skeleton.Image
                active
                style={{ height: 250, width: 300, objectFit: "cover" }}
              />
            }
          >
            <Flex
              vertical
              gap={12}
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
