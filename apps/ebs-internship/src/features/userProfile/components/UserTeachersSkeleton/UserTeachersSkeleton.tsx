import { Card, Flex, Skeleton } from "antd";

interface Props {
  count: number;
}

export const UserTeachersSkeleton = ({ count = 6 }: Props) => {
  const skeletonArray = Array.from({ length: count });

  return (
    <Flex
      wrap
      justify="flex-start"
      gap={12}
      align="flex-start"
    >
      {skeletonArray.map((_, index) => (
        <Card
          key={index}
          style={{ width: 213 }}
        >
          <Flex
            vertical
            gap={8}
          >
            <Skeleton.Image
              active
              style={{ width: "100%", height: 139 }}
            />
            <Skeleton.Node
              active
              style={{ width: "70%", height: 20 }}
            />
            <Skeleton.Node
              active
              style={{ width: "70%", height: 20 }}
            />
            <Skeleton.Node
              active
              style={{ width: "100%", height: 5 }}
            />
            <Skeleton.Node
              active
              style={{ width: "100%", height: 48 }}
            />
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};
