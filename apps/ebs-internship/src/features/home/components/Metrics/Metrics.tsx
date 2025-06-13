import { Container, Section } from "@/components";
import styles from "./metrics.module.scss";
import { Divider, Flex } from "antd";
import { Fragment } from "react/jsx-runtime";

const data = [
  {
    count: "250+",
    description: "Courses by our expert mentors",
  },
  {
    count: "1000+",
    description: "Students successfully graduated",
  },
  {
    count: "15+",
    description: "Countries where our courses are available",
  },
  {
    count: "99%",
    description: "Positive feedback from our learners",
  },
] as const;

const Metrics = () => {
  return (
    <Section className={styles.metrics}>
      <Container
        style={{ paddingBlock: 40, maxWidth: "1280px", margin: "0 auto" }}
      >
        <dl className={styles.metricsList}>
          {data.map((item, i) => (
            <Fragment key={item.description}>
              <Flex
                gap={6}
                vertical
                align="center"
                justify="center"
              >
                <dt className={styles.metricsCount}>{item.count}</dt>
                <dd className={styles.metricsDescription}>
                  {item.description}
                </dd>
              </Flex>
              {i !== data.length - 1 && (
                <Divider
                  type="vertical"
                  size="large"
                  style={{
                    height: 55,
                    alignSelf: "center",
                  }}
                />
              )}
            </Fragment>
          ))}
        </dl>
      </Container>
    </Section>
  );
};

export default Metrics;
