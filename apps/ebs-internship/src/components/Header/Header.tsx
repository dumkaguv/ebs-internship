import {
  Flex,
  Layout,
  Typography,
  Button,
  Avatar,
  MenuProps,
  Dropdown,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightOutlined,
  HeartOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { RoutesEnum } from "@/config/routesEnum";
import HeaderSearch from "./HeaderSearch";
import { useEffect, useRef } from "react";
import { defineHeaderHeightCssVar } from "@/utils";
import { useHeaderStyles } from "./HeaderStyles";
import { useAuthStore } from "@/stores/authStore";
import { Api } from "@/services/apiClient";

const { Header } = Layout;

const AppHeader = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const { styles } = useHeaderStyles();

  const { isAuth, setIsAuth } = useAuthStore();

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
      onClick: () => navigate(RoutesEnum.PROFILE),
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
      onClick: () => {
        Api.auth.logout();
        message.success("Logout successfully");
        setIsAuth(false);
      },
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
        style={{ width: "100%", maxWidth: "1280px" }}
      >
        <Flex align="center">
          <Link
            to={RoutesEnum.HOME}
            className={styles.logoContainer}
          >
            <img
              src="/logo.jpg"
              width={31}
              height={40}
              alt=""
            />
            <Typography.Title
              level={1}
              style={{ fontSize: 16 }}
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
            to={RoutesEnum.PROFILE}
            className={styles.headerNavItem}
          >
            Teach on Byway
          </Link>
        </nav>

        {isAuth ? (
          <Flex
            style={{ marginLeft: 100 }}
            gap={24}
            align="center"
          >
            <Button
              type="text"
              size="small"
            >
              <HeartOutlined />
            </Button>
            <Button
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
                style={{ paddingInline: 10 }}
              >
                <Avatar
                  size={40}
                  icon={<UserOutlined />}
                  style={{ cursor: "pointer" }}
                ></Avatar>
              </Button>
            </Dropdown>
          </Flex>
        ) : (
          <Flex
            gap={24}
            align="center"
          >
            <Button
              onClick={() => {
                isAuth
                  ? navigate(RoutesEnum.CART)
                  : (() => {
                      navigate(RoutesEnum.SIGNIN);
                      message.info(
                        "Cart is available only for authorized users"
                      );
                    })();
              }}
              type="text"
              size="small"
              style={{ width: 40, height: 40 }}
            >
              <ShoppingCartOutlined />
            </Button>

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

export default AppHeader;
