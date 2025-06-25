import { Container } from "@/components";
import { Avatar, Button, Flex, Typography } from "antd";
import { Link } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";
import { Course } from "@libs";
import { useRef, useState } from "react";
import { CourseDetailsSyllabus } from "@/features/courseDetails/components";
import { useCourseDetailsInformationStyles } from "./CourseDetailsInformationStyles";

interface Props {
  data: Course;
}

export const CourseDetailsInformation = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState("description");
  const descriptionRef = useRef<HTMLDivElement>(null);
  const instructorRef = useRef<HTMLDivElement>(null);
  const syllabusRef = useRef<HTMLDivElement>(null);

  const { styles } = useCourseDetailsInformationStyles();

  const scrollToRef = (
    ref: React.RefObject<HTMLDivElement | null>,
    tabName: string
  ) => {
    setActiveTab(tabName);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container className={styles.infoContainer}>
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

      <Flex
        className={styles.descriptionContainer}
        ref={descriptionRef}
        vertical
        gap={24}
      >
        <Flex
          gap={8}
          vertical
        >
          <Typography.Title level={4}>Course Description</Typography.Title>
          <Typography.Paragraph>
            {data.product?.description ??
              "This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. "}
          </Typography.Paragraph>
        </Flex>

        <Flex
          gap={8}
          vertical
        >
          <Typography.Title level={4}>Certification</Typography.Title>
          <Typography.Paragraph>
            {data.summary ??
              "At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field."}
          </Typography.Paragraph>
        </Flex>
      </Flex>

      <div className={styles.line}></div>

      <Flex
        ref={instructorRef}
        vertical
        gap={16}
      >
        <Typography.Title level={4}>Instructor</Typography.Title>
        <Flex vertical>
          <Link
            className={styles.authorLink}
            to={getRouteUrlById(RoutesEnum.MENTORS, data.author_id)}
          >
            {data.author?.first_name} {data.author?.last_name}
          </Link>
          <Typography.Paragraph>{data.author?.bio}</Typography.Paragraph>
        </Flex>
        <Flex
          gap={16}
          align="center"
        >
          <Avatar
            size={120}
            src={
              data.author?.url_avatar ??
              "https://static.vecteezy.com/system/resources/previews/046/409/821/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"
            }
          />
          <Flex
            gap={16}
            vertical
          >
            <Typography.Text className={styles.authorInfo}>
              <img
                src="icons/graduation.svg"
                alt="graduationIcon"
              />
              {data.author?.email}
            </Typography.Text>
            <Typography.Text className={styles.authorInfo}>
              <img
                src="icons/play.svg"
                alt="playIcon"
              />
              {data.lessons?.length} Courses
            </Typography.Text>
          </Flex>
        </Flex>
        <Typography.Paragraph>{data.subtitle ?? ""}</Typography.Paragraph>
      </Flex>

      <div className={styles.line}></div>

      <div ref={syllabusRef}>
        <CourseDetailsSyllabus lessons={data.lessons} />
      </div>
    </Container>
  );
};
