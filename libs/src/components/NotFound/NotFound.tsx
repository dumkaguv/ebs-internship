import { Button, Flex, Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useNotFoundStyles } from "./NotFoundStyles";
import { notFound } from "../../assets/images";

export const NotFound = () => {
  const navigate = useNavigate();

  const { styles } = useNotFoundStyles();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      className={styles.wrapper}
    >
      <Flex
        gap={64}
        justify="space-between"
        align="center"
      >
        <Flex
          vertical
          gap={32}
          align="start"
          className={styles.info}
        >
          <Typography.Title level={1}>Oops! page not found</Typography.Title>
          <Typography.Paragraph>
            Something went wrong. It’s look that your requested could not be
            found. It's look like the link is broken or the page is removed.
          </Typography.Paragraph>
          <Button
            type="primary"
            onClick={goBack}
          >
            Go Back
          </Button>
        </Flex>
        <Image
          src={notFound}
          preview={false}
          width={560}
          height={600}
        />
      </Flex>
    </Flex>
  );
};
