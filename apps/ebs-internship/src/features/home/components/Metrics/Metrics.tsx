import { Container, Section } from "@/components";
import { Divider, Flex } from "antd";
import { Fragment } from "react/jsx-runtime";
import { useMetricsStyles } from "./MetricsStyles";
import { data } from "./data";

export const Metrics = () => {
  const { styles } = useMetricsStyles();

  return (
    <Section className={styles.metrics}>
      <Container style={{ paddingBlock: 40 }}>
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
                  className={styles.divider}
                />
              )}
            </Fragment>
          ))}
        </dl>
      </Container>
    </Section>
  );
};
