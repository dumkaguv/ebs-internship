import { DownOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Input, Typography } from "antd";
import { useUserTeachersStyles } from "./UserTeachersStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchTutors } from "@/services/tutors";
import { PaginationComponent } from "@libs/components";
import { useState } from "react";

export const UserTeachers = () => {
  const { styles } = useUserTeachersStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery({ queryKey: ["tutors"], queryFn: fetchTutors });

  return (
    <Flex
      vertical
      gap={16}
      className={styles.teachersContainer}
    >
      <Typography.Title level={4}>Teachers ({data?.length})</Typography.Title>
      <Flex
        justify="space-between"
        align="center"
      >
        <Input.Search
          className={styles.inputSearch}
          placeholder="Search Teacher"
          size="large"
        />

        <Flex
          gap={15}
          align="center"
        >
          <Typography.Paragraph>Sort by</Typography.Paragraph>
          <Button>
            Relevence <DownOutlined />
          </Button>
          <Button>
            <img
              src="/icons/filter.svg"
              alt="filterIcon"
            />
            Filter
          </Button>
        </Flex>
      </Flex>

      <Flex
        gap={24}
        align="stretch"
      >
        {data?.map((teacher) => (
          <Card
            key={teacher.id}
            className={styles.teacherCard}
          >
            <img
              height={200}
              src={teacher.url_avatar}
              alt={teacher.first_name}
              className={styles.teacherImg}
            />
            <Flex
              vertical
              gap={10}
              align="center"
              justify="space-between"
              className={styles.teacherBio}
            >
              <Flex
                vertical
                align="center"
              >
                <Typography.Title level={5}>
                  {teacher.first_name} {teacher.last_name}
                </Typography.Title>
                <Typography.Paragraph className={styles.teacherInfo}>
                  {teacher.bio}
                </Typography.Paragraph>
              </Flex>
              <Divider size="small" />
              <Button
                type="primary"
                className={styles.messageButton}
              >
                Send Message
                <img
                  src="/icons/mail.svg"
                  alt="mailIcon"
                />
              </Button>
            </Flex>
          </Card>
        ))}
      </Flex>

      <Flex
        align="center"
        justify="center"
      >
        <PaginationComponent
          pageSize={8}
          total={16}
          current={currentPage}
          onChange={() => setCurrentPage(2)}
        />
      </Flex>
    </Flex>
  );
};
