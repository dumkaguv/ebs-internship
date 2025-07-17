import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  MenuProps,
  Typography,
  Grid,
} from "antd";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ArrowRightOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { RoutesEnum } from "@/config/routesEnum";
import { IMAGE_FALLBACKS, useAuthStore, useLogout } from "@libs";
import { Api } from "@/services/apiClient";
import { useHeaderStyles } from "./HeaderStyles";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

const { useBreakpoint } = Grid;

export const HeaderResponsive = () => {
  const [isAuth, profile] = useAuthStore(
    useShallow((state) => [state.isAuth, state.profile])
  );

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: Api.cart.fetchCart,
  });

  const navigate = useNavigate();

  const { logout } = useLogout();

  const screens = useBreakpoint();
  const { styles } = useHeaderStyles();

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

  const renderAvatar = () => {
    return (
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
    );
  };

  const renderAuthOrNot = () => {
    if (isAuth) {
      return (
        <Flex
          gap={4}
          align="center"
          className={styles.authButtonsWrapper}
        >
          <Button
            type="text"
            className={styles.buttonAuth}
          >
            <HeartOutlined style={{ fontSize: 20 }} />
          </Button>
          <Badge
            count={cart?.items?.length ?? 0}
            size="small"
            offset={[-10, 10]}
            classNames={{ indicator: styles.badgeCartCount }}
          >
            <Button
              onClick={() => navigate(RoutesEnum.CART)}
              type="text"
              className={styles.buttonAuth}
            >
              <ShoppingCartOutlined style={{ fontSize: 20 }} />
            </Button>
          </Badge>
          {renderAvatar()}
        </Flex>
      );
    }

    return (
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
    );
  };

  return (
    <Flex
      align="center"
      gap={28}
      justify="space-between"
    >
      {screens.lg ? (
        <>
          <Flex
            align="center"
            gap={16}
          >
            <Link
              to={RoutesEnum.COURSES}
              className={styles.headerNavItem}
            >
              Courses
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
          </Flex>

          {renderAuthOrNot()}
        </>
      ) : (
        <Flex
          gap={12}
          align="center"
        >
          <HeaderMobileMenu />
          {renderAvatar()}
        </Flex>
      )}
    </Flex>
  );
};
