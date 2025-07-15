import { Container, Reviews } from "@/components";
import { Button, Flex } from "antd";
import { Course } from "@libs";
import { useState } from "react";
import {
  CourseDetailsSyllabus,
  CourseDescription,
  CourseInstructors,
} from "@/features/courseDetails/components";
import { useCourseDetailsInformationStyles } from "./CourseDetailsInformationStyles";

interface Props {
  data: Course;
}

const tabs = [
  { name: "Description" },
  { name: "Instructors" },
  { name: "Syllabus" },
  { name: "Reviews" },
];

export const CourseDetailsInformation = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState("description");
  const { styles } = useCourseDetailsInformationStyles();

  return (
    <Container className={styles.infoContainer}>
      <Flex
        gap={24}
        justify="flex-start"
      >
        {tabs.map((tab, index) => (
          <Button
            key={index}
            className={
              activeTab === tab.name
                ? styles.activeButton
                : styles.defaultButton
            }
            onClick={() => {
              setActiveTab(tab.name);
              document
                .getElementById(tab.name)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {tab.name}
          </Button>
        ))}
      </Flex>

      <div className={styles.line} />

      <CourseDescription
        data={data}
        id="Description"
      />

      <div className={styles.line} />

      <CourseInstructors
        data={data}
        id="Instructors"
      />

      <div className={styles.line} />

      <CourseDetailsSyllabus
        lessons={data.lessons}
        id="Syllabus"
      />

      <div className={styles.line} />

      <Reviews id="Reviews" />
    </Container>
  );
};
