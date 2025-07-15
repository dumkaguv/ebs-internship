import { Flex, List, Typography } from "antd";
import { useCourseDescriptionStyles } from "./CourseDescriptionStyles";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Course } from "@libs";

interface Props {
  data: Course;
  id: string;
}

const listData = [
  "This course is for those who want to launch a Freelance Web Design career.",
  "Praesent eget consequat elit. Duis a pretium purus.",
  "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
  "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
  "Those who are looking to reboot their work life and try a new profession that is fun.",
  "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
  "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
];

export const CourseDescription = ({ data, id }: Props) => {
  const { styles } = useCourseDescriptionStyles();
  return (
    <Flex
      className={styles.descriptionContainer}
      vertical
      gap={24}
      id={id}
    >
      <Flex
        gap={16}
        vertical
      >
        <Typography.Title level={4}>Course Description</Typography.Title>
        <Typography.Paragraph>
          {data.product?.description ??
            " This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises."}
        </Typography.Paragraph>
      </Flex>

      <Flex
        gap={16}
        vertical
      >
        <Typography.Title level={4}>Certification</Typography.Title>
        <Typography.Paragraph>
          At Byway, we understand the significance of formal recognition for
          your hard work and dedication to continuous learning. Upon successful
          completion of our courses, you will earn a prestigious certification
          that not only validates your expertise but also opens doors to new
          opportunities in your chosen field.
        </Typography.Paragraph>
      </Flex>

      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={4}>Watch a video preview</Typography.Title>
        <video
          width="100%"
          height="auto"
          controls
          poster={
            data?.poster_url ??
            "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg"
          }
        >
          <source
            src={
              data?.video_url ?? "https://www.youtube.com/watch?v=HUozIpTODZQ"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Flex>

      <Flex
        vertical
        gap={16}
      >
        <Typography.Title level={4}>Who this course is for:</Typography.Title>
        <List
          className={styles.listContainer}
          itemLayout="horizontal"
          dataSource={listData}
          split={false}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <Flex gap={10}>
                <ArrowRightOutlined />
                {item}
              </Flex>
            </List.Item>
          )}
        />
      </Flex>
    </Flex>
  );
};
