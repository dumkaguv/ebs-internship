import { Section, Container } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, Flex, Image, List, Typography } from "antd";
import { useTopCategoriesStyles } from "./TopCategoriesStyles";
import { Api } from "@libs";

export const TopCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: Api.categories.fetchCategories,
  });

  const { styles } = useTopCategoriesStyles();

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
            <List.Item>
              <Card className={styles.topCategoriesCard}>
                <Flex
                  vertical
                  align="center"
                >
                  <div className={styles.topCategoriesIconWrapper}>
                    <Image
                      src={category.icon}
                      className={styles.topCategoriesIcon}
                      width={40}
                      height={40}
                      preview={false}
                      alt=""
                    />
                  </div>
                  <Flex
                    gap={10}
                    vertical
                  >
                    <Typography.Title level={3}>
                      {category.name}
                    </Typography.Title>
                    <Typography.Text>{category.count} Courses</Typography.Text>
                  </Flex>
                </Flex>
              </Card>
            </List.Item>
          )}
        />
      </Section>
    </Container>
  );
};
