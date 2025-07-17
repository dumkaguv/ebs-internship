import { Card, List, Skeleton } from "antd";

interface Props {
  count?: number;
}

export const WishListItemCardSkeletonList = ({ count = 4 }: Props) => {
  return (
    <List
      grid={{ gutter: [16, 16], column: 4 }}
      dataSource={Array.from({ length: count }, (_, index) => ({ key: index }))}
      renderItem={(item) => (
        <List.Item key={item.key}>
          <Card>
            <Skeleton.Image
              style={{ width: 270, height: 160 }}
              active
            />
            <Skeleton
              active
              style={{ marginTop: 16 }}
              paragraph={{ rows: 4 }}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};
