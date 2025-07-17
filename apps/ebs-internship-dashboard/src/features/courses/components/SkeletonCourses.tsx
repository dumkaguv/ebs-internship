import { Row, Col, Card, Skeleton, Flex } from "antd";
interface Props {
  count?: number;
}

export const SkeletonCourses = ({ count = 6 }: Props) => {
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
          style={{ width: 398, marginBottom: 16 }}
        >
          <Flex
            vertical
            gap={8}
          >
            <Skeleton.Node
              active
              style={{ width: 66, height: 34 }}
            />
            <Skeleton.Node
              active
              style={{ width: 200, height: 30 }}
            />
            <Skeleton.Node
              active
              style={{ width: "100%", height: 5 }}
            />
            <Row justify={"space-between"}>
              <Col>
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 2, width: [100, 100] }}
                />
              </Col>
              <Col>
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 2, width: [100, 100] }}
                />
              </Col>
              <Col>
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 2, width: [100, 100] }}
                />
              </Col>
            </Row>
            <Row justify={"space-between"}>
              <Col>
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 2, width: [100, 100] }}
                />
              </Col>
              <Col>
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 2, width: [100, 100] }}
                />
              </Col>
              <Col>
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 2, width: [100, 100] }}
                />
              </Col>
            </Row>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};
