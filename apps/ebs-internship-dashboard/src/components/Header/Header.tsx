import { Button, Flex, Layout, Typography } from "antd";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@libs";
import { NotificationDrawer } from "@/features/notifications";
import { getPageTitle } from "@/utils";
import { useHeaderStyles } from "./HeaderStyles";
import { RoutesEnum } from "@/config/routesEnum";

const { Header } = Layout;

export const AppHeader = () => {
  const { pathname } = useLocation();
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { styles } = useHeaderStyles();

  const isCoursePage = pathname.startsWith("/courses") && Boolean(id);

  const { data: courseTitle, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: () => Api.courses.fetchCourseDetails(id ?? ""),
    enabled: isCoursePage,
    select: (data) => data.title,
  });

  const title = isLoading
    ? "Loading..."
    : courseTitle
    ? `Course — ${courseTitle}`
    : getPageTitle(pathname);

  return (
    <Header>
      <Flex
        align="center"
        justify="space-between"
      >
        <Flex
          align="center"
          gap={8}
        >
          <Typography.Title
            level={3}
            className={styles.title}
          >
            {title}
          </Typography.Title>
        </Flex>

        <Flex
          gap={20}
          align="center"
        >
          <Button
            type="primary"
            onClick={() => navigate(RoutesEnum.COURSES.ADD)}
          >
            Add Course
          </Button>
          <NotificationDrawer />
        </Flex>
      </Flex>
    </Header>
  );
};
