import { Section, Container } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../api/fetchCategories";
import { Card, Flex, List, Typography } from "antd";
import styles from "./topCategories.module.scss";

const TopCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <Container>
      <Section
        title="Top Categories"
        endAdornment={<Link to={RoutesEnum.COURSES}>See All</Link>}
      >
        <List
          grid={{ gutter: 16, column: 4 }}
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={categories?.slice(0, 4)}
          renderItem={(category) => (
            <List.Item style={{ marginBottom: 0 }}>
              <Card className={styles.card}>
                <Flex
                  vertical
                  align="center"
                >
                  <div className={styles.cardIconWrapper}>
                    <img
                      src={category.icon}
                      className={styles.cardIcon}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <Typography.Title
                    className={styles.cardTitle}
                    level={3}
                  >
                    {category.name}
                  </Typography.Title>
                  <Typography.Text>{category.count} Courses</Typography.Text>
                </Flex>
              </Card>
            </List.Item>
          )}
        />
      </Section>
    </Container>
  );
};

export default TopCategories;
