import { Card, Flex, Skeleton } from "antd";

interface Props {
  count?: number;
}

export const UserCoursesSkeleton = ({ count = 6 }: Props) => {
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
          style={{ width: 298 }}
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
              style={{ width: "100%", height: 25 }}
            />
            <Skeleton.Node
              active
              style={{ width: "50%", height: 20 }}
            />
            <Skeleton.Node
              active
              style={{ width: "100%", height: 10 }}
            />
            <Flex justify="space-between">
              <Skeleton.Node
                active
                style={{ width: 140, height: 20 }}
              />
              <Skeleton.Node
                active
                style={{ width: 100, height: 20 }}
              />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};
