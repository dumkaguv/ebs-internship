import { User } from "@libs";
import { Button, Card, Flex, Typography } from "antd";
import { useOutletContext } from "react-router-dom";
import { useUserDashboardStyles } from "./UserDashboardStyles";
import {
  CheckSquareOutlined,
  PlayCircleOutlined,
  TrophyOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";

interface OutletContext {
  data: User;
}

const dashboardBanners = [
  {
    icon: <PlayCircleOutlined style={{ fontSize: 30 }} />,
    number: 957,
    text: "Enrolled Courses",
    color: "#f1f5f9",
  },
  {
    icon: <CheckSquareOutlined style={{ fontSize: 30 }} />,
    number: 6,
    text: "Active Courses",
    color: "#EAECF0",
  },
  {
    icon: <TrophyOutlined style={{ fontSize: 30 }} />,
    number: 951,
    text: "Completed Courses",
    color: "#cbd5e1",
  },
  {
    icon: <UsergroupDeleteOutlined style={{ fontSize: 30 }} />,
    number: 241,
    text: "Course Instructors",
    color: "#98A2B3",
  },
];

const dashboardLectures = [
  {
    subtitle: "Supply chain its components",
    title: "Introduction",
    img: "https://www.myfitnesschat.com/wp-content/uploads/2019/03/pexels-photo-1509428.jpeg",
  },
  {
    subtitle: "Principles of Supply Chain Management",
    title: "Level 2",
    img: "https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
  },
  {
    subtitle: "Clasification of logistics",
    title: "Final Test in logistics",
    img: "https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
  },
  {
    subtitle: "Benefits of using logistics systems",
    title: "End of course",
    img: "https://www.myfitnesschat.com/wp-content/uploads/2019/03/pexels-photo-1509428.jpeg",
  },
];

export const UserDashboard = () => {
  const { styles } = useUserDashboardStyles();
  const { data } = useOutletContext<OutletContext>();

  return (
    <Flex
      vertical
      gap={40}
    >
      <Typography.Title level={3}>Welcome {data?.name}</Typography.Title>

      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Flex
          justify="flex-start"
          wrap
          gap={10}
        >
          {dashboardBanners.map((banner, index) => (
            <Flex
              key={index}
              gap={20}
              style={{ backgroundColor: banner.color }}
              className={styles.banner}
              vertical
              align="center"
            >
              {banner.icon}
              <Flex
                vertical
                align="center"
              >
                <Typography.Title level={5}>{banner.number}</Typography.Title>
                <Typography.Paragraph>{banner.text}</Typography.Paragraph>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={4}>
          Let's start learning, {data?.first_name}
        </Typography.Title>

        <Flex
          gap={20}
          wrap
        >
          {dashboardLectures.map((lecture, index) => (
            <Card
              key={index}
              className={styles.cardContainer}
            >
              <img
                width="100%"
                height={200}
                src={lecture.img}
                alt={lecture.title}
              />
              <Typography.Paragraph>{lecture.subtitle}</Typography.Paragraph>
              <Typography.Title level={5}>{lecture.title}</Typography.Title>
              <Button
                block
                type="primary"
              >
                Watch Lecture
              </Button>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
