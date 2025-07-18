import { Skeleton, Flex } from "antd";

interface Props {
  count?: number;
}

export const LoadableCheckboxGroupListSkeleton = ({ count = 6 }: Props) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return (
    <Flex
      vertical
      gap={14}
    >
      <Skeleton.Input style={{ width: "100%" }} />
      {skeletons.map((key) => (
        <Flex
          key={key}
          align="center"
          gap={8}
        >
          <Skeleton.Avatar
            shape="square"
            size="small"
            style={{ borderRadius: 8 }}
            active
          />
          <Skeleton.Input
            style={{ width: 160 }}
            size="small"
            active
          />
        </Flex>
      ))}
      <Skeleton.Button
        size="large"
        style={{ width: 120 }}
      />
    </Flex>
  );
};
