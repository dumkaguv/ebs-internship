import { Flex, Skeleton } from "antd";
import { useCartItemStyles } from "./CartItemStyles";

interface Props {
  count?: number;
}

export const SkeletonCartItemList = ({ count = 3 }: Props) => {
  const { styles } = useCartItemStyles();

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <article
          key={index}
          className={styles.itemCard}
        >
          <Skeleton.Image
            style={{ width: 192, height: 108 }}
            active
          />

          <Flex
            justify="space-between"
            align="flex-start"
            gap={32}
            flex={1}
          >
            <Flex
              vertical
              gap={8}
              style={{ flex: 1 }}
            >
              <Skeleton.Input
                active
                size="small"
                style={{ width: 300, height: 20 }}
              />
              <Skeleton.Input
                active
                size="small"
                style={{ width: 200, height: 20 }}
              />
              <Skeleton.Input
                active
                size="small"
                style={{ width: "100%" }}
              />

              <Skeleton.Input
                active
                size="small"
                style={{ width: 150, height: 20 }}
              />
            </Flex>
            <Skeleton.Input
              active
              style={{ width: 80 }}
            />
          </Flex>
        </article>
      ))}
    </>
  );
};
