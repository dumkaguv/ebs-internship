import {
  Flex,
  Layout,
  Typography,
  Button,
  Avatar,
  MenuProps,
  Dropdown,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightOutlined,
  HeartOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { RoutesEnum } from "@/config/routesEnum";
import { HeaderSearch } from "./HeaderSearch";
import { useEffect, useRef } from "react";
import { defineHeaderHeightCssVar } from "@/utils";
import { useHeaderStyles } from "./HeaderStyles";
import { IMAGE_FALLBACKS, useAuthStore } from "@libs";
import { useLogout } from "@libs";
import { useShallow } from "zustand/shallow";

const { Header } = Layout;

export const AppHeader = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { styles } = useHeaderStyles();
  const [isAuth, profile] = useAuthStore(
    useShallow((state) => [state.isAuth, state.profile])
  );
  const { logout } = useLogout();

  useEffect(() => {
    defineHeaderHeightCssVar(headerRef);
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Typography.Text>
          <ArrowRightOutlined size={20} /> Go to profile
        </Typography.Text>
      ),
      onClick: () => navigate(RoutesEnum.PROFILE.BASE),
    },
    {
      type: "divider",
    },
    {
      key: "1",
      label: (
        <Typography.Text>
          <LogoutOutlined size={20} /> Logout
        </Typography.Text>
      ),
      onClick: () => logout(),
    },
  ];

  return (
    <Header
      ref={headerRef}
      className={styles.header}
    >
      <Flex
        justify="space-between"
        align="center"
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

        <Link
          to={RoutesEnum.COURSES}
          className={styles.headerNavItem}
        >
          Categories
        </Link>

        <HeaderSearch />

        <nav>
          <Link
            to={RoutesEnum.PROFILE.BASE}
            className={styles.headerNavItem}
          >
            Teach on Byway
          </Link>
        </nav>

        {isAuth ? (
          <Flex
            gap={24}
            align="center"
            className={styles.authButtonsWrapper}
          >
            <Button
              type="text"
              size="small"
            >
              <HeartOutlined />
            </Button>
            <Button
              onClick={() => navigate(RoutesEnum.CART)}
              type="text"
              size="small"
            >
              <ShoppingCartOutlined />
            </Button>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                type="text"
                variant="link"
                className={styles.avatarWrapper}
              >
                <Avatar
                  src={profile?.avatar ?? IMAGE_FALLBACKS.USER}
                  size={40}
                />
              </Button>
            </Dropdown>
          </Flex>
        ) : (
          <Flex
            gap={24}
            align="center"
          >
            <Link
              to={RoutesEnum.SIGNIN}
              className={styles.login}
            >
              Log In
            </Link>
            <Link
              to={RoutesEnum.SIGNUP}
              className={styles.signUp}
            >
              Sign Up
            </Link>
          </Flex>
        )}
      </Flex>
    </Header>
  );
};
