import { Container, Section } from "@/components";
import { Api } from "@/services/apiClient";
import { LOCAL_STORAGE } from "@libs";
import { useQuery } from "@tanstack/react-query";
import { Flex, List, Typography } from "antd";
import { useState } from "react";
import {
  WishListItemCardSkeletonList,
  WishListItemCard,
} from "@/features/wishlist/components";

export const WishListPage = () => {
  const [coursesIds, setCoursesIds] = useState<number[]>(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.WISHLIST) ?? "[]")
  );

  const { data, isLoading } = useQuery({
    queryKey: ["wishlist", coursesIds],
    queryFn: () => Api.courses.fetchCourses({ ids: coursesIds, per_page: 200 }),
    enabled: coursesIds.length > 0,
    refetchOnWindowFocus: true,
  });
  const courses = data?.data;

  return (
    <Container>
      <Section>
        <Flex
          vertical
          gap={40}
        >
          <Typography.Title level={1}>
            WishList ({coursesIds.length} items)
          </Typography.Title>

          {isLoading ? (
            <WishListItemCardSkeletonList count={8} />
          ) : (
            <List
              grid={{ gutter: 16, column: 4 }}
              itemLayout="horizontal"
              dataSource={courses}
              locale={{ emptyText: null }}
              renderItem={(course) => (
                <List.Item>
                  <WishListItemCard
                    course={course}
                    coursesIds={coursesIds}
                    setCoursesIds={setCoursesIds}
                  />
                </List.Item>
              )}
            />
          )}
        </Flex>
      </Section>
    </Container>
  );
};
