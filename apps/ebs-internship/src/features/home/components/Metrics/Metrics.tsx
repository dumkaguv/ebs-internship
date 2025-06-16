import { Container, Section } from "@/components";
import { Divider, Flex } from "antd";
import { Fragment } from "react/jsx-runtime";
import { useMetricsStyles } from "./MetricsStyles";
import { data } from "./data";

const Metrics = () => {
  const { styles } = useMetricsStyles();

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
