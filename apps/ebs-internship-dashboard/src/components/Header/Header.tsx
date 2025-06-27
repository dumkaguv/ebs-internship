import { Button, Flex, Layout, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { useHeaderStyles } from "./HeaderStyles";
import { ReactNode } from "react";

const { Header } = Layout;

interface Props {
  title?: string;
  startAdornment?: ReactNode;
  buttonActions?: ReactNode;
}

export const AppHeader = ({ title, startAdornment, buttonActions }: Props) => {
  const { pathname } = useLocation();
  const headerTitle = title ?? pathname.slice(1);

  const { styles } = useHeaderStyles();

  return (
    <Header>
      <Flex
        align="center"
        justify="space-between"
      >
        <Flex
          align="center"
          gap={8}
        >
          {startAdornment}
          <Typography.Title
            level={3}
            className={styles.title}
          >
            {headerTitle}
          </Typography.Title>
        </Flex>

        <Flex
          gap={80}
          align="center"
        >
          {buttonActions}
          <Button type="primary">Add Course</Button>
        </Flex>
      </Flex>
    </Header>
  );
};
