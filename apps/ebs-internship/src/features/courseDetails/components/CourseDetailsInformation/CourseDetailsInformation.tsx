import { Container } from "@/components";
import { Avatar, Button, Flex, Typography } from "antd";
import styles from "./courseDetailsInformation.module.scss";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course } from "@/types";
import { FC, useRef, useState } from "react";

interface Props {
  data: Course;
}

const CourseDetailsInformation: FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");
  const descriptionRef = useRef<HTMLDivElement>(null);
  const instructorRef = useRef<HTMLDivElement>(null);
  const syllabusRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (
    ref: React.RefObject<HTMLDivElement | null>,
    tabName: string
  ) => {
    setActiveTab(tabName);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      style={{ maxWidth: "1280px", paddingBlock: 40, margin: "0 auto" }}
    >
      <Flex
        gap={24}
        justify="flex-start"
      >
        <Button
          className={
            activeTab === "description"
              ? styles.activeButton
              : styles.defaultButton
          }
          onClick={() => scrollToRef(descriptionRef, "description")}
        >
          Description
        </Button>
        <Button
          className={
            activeTab === "instructor"
              ? styles.activeButton
              : styles.defaultButton
          }
          onClick={() => scrollToRef(instructorRef, "instructor")}
        >
          Instructor
        </Button>
        <Button
          className={
            activeTab === "syllabus"
              ? styles.activeButton
              : styles.defaultButton
          }
          onClick={() => scrollToRef(syllabusRef, "syllabus")}
        >
          Syllabus
        </Button>
      </Flex>

      <div className={styles.line}></div>

      <div
        ref={descriptionRef}
        style={{ maxWidth: "840px" }}
      >
        <Typography.Title level={4}>Course Description</Typography.Title>
        <Typography.Paragraph>{data.product?.description}</Typography.Paragraph>

        <Typography.Title level={4}>Certification</Typography.Title>
        {/* <Typography.Paragraph>{data}</Typography.Paragraph> */}
      </div>

      <div className={styles.line}></div>

      <Flex
        ref={instructorRef}
        vertical
        gap={16}
      >
        <Typography.Title level={4}>Instructor</Typography.Title>
        <div>
          <Link
            to={getRouteUrlById(RoutesEnum.MENTORS, data.author_id)}
            style={{ fontSize: "20px" }}
          >
            {data.author?.first_name} {data.author?.last_name}
          </Link>
          <Typography.Paragraph>{data.author?.bio}</Typography.Paragraph>
        </div>
        <Flex
          gap={16}
          align="center"
        >
          <Avatar
            size={120}
            src={data.author?.url_avatar}
          />
          <Flex
            gap={16}
            vertical
          >
            <Typography.Text
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <img
                src="icons/graduation.svg"
                alt="graduationIcon"
              />
              {data.author?.email}
            </Typography.Text>
            <Typography.Text
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <img
                src="icons/play.svg"
                alt="playIcon"
              />
              {data.lessons?.length} Courses
            </Typography.Text>
          </Flex>
        </Flex>
        <Typography.Paragraph style={{ maxWidth: "840px" }}>
          {data.author?.bio}
        </Typography.Paragraph>
      </Flex>

      <div className={styles.line}></div>

      <div ref={syllabusRef}></div>
    </Container>
  );
};

export default CourseDetailsInformation;
