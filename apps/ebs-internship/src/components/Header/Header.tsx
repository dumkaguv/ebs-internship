import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Flex, Layout, Typography } from "antd";
import { RoutesEnum } from "@/config/routesEnum";
import { defineHeaderHeightCssVar } from "@/utils";
import { Container } from "@/components";
import { HeaderResponsive } from "./HeaderResponsive";
import { useHeaderStyles } from "./HeaderStyles";

const { Header } = Layout;

export const AppHeader = () => {
  const headerRef = useRef(null);

  const { styles } = useHeaderStyles();

  useEffect(() => {
    defineHeaderHeightCssVar(headerRef);
  }, []);

  return (
    <Header
      ref={headerRef}
      className={styles.header}
    >
      <Container className="w-full">
        <Flex
          gap={20}
          align="center"
          justify="space-between"
          className={styles.headerWrapper}
        >
          <Flex align="center">
            <Link
              to={RoutesEnum.HOME}
              className={styles.logoContainer}
            >
              <img
                src="/logo.png"
                width={31}
                height={40}
                alt=""
              />
              <Typography.Title
                level={1}
                className={styles.logoText}
              >
                Byway
              </Typography.Title>
            </Link>
          </Flex>

          <HeaderResponsive />
        </Flex>
      </Container>
    </Header>
  );
};
