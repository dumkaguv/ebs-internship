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
              style={{ width: 133, height: 133 }}
            />
            <Flex
              vertical
              gap={8}
            >
              <Skeleton.Node
                active
                style={{ width: 220, height: 26 }}
              />

              <Skeleton.Node
                active
                style={{ width: 180, height: 26 }}
              />

              <Skeleton.Node
                active
                style={{ width: 80, height: 26 }}
              />
            </Flex>
          </Flex>
        </List.Item>
      )}
    />
  );
};
