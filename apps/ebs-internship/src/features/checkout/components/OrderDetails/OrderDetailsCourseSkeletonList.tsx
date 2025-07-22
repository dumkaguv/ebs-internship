import { Flex, List, Skeleton } from "antd";

interface Props {
  count?: number;
}

export const OrderDetailsCourseSkeletonList = ({ count = 3 }: Props) => {
  const skeletonArray = Array.from({ length: count }, (_, i) => ({ key: i }));

  return (
    <List
      dataSource={skeletonArray}
      grid={{ column: 1, gutter: [0, 12] }}
      renderItem={() => (
        <List.Item>
          <Flex gap={8}>
            <Skeleton.Image
              active
              style={{ width: 110, height: 110 }}
            />
            <Flex
              vertical
              gap={8}
            >
              <Skeleton.Node
                active
                style={{ width: 185, height: 25 }}
              />

              <Skeleton.Node
                active
                style={{ width: 170, height: 25 }}
              />

              <Skeleton.Node
                active
                style={{ width: 80, height: 25 }}
              />
            </Flex>
          </Flex>
        </List.Item>
      )}
    />
  );
};
