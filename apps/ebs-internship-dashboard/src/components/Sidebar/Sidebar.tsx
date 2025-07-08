import { ReactNode, useState } from "react";
import { Avatar, Button, Dropdown, Flex, Layout, MenuProps } from "antd";
import { Logo } from "@/components";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { useSidebarStyles } from "./SidebarStyles";
import { ArrowCollapse, Hamburger } from "@/assets";
import { SidebarMenu } from "./SidebarMenu";
import { useTheme } from "antd-style";
import {
  IMAGE_FALLBACKS,
  LOCAL_STORAGE,
  Profile,
  URLS,
  useAuthStore,
  useLogout,
} from "@libs";
import { Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const profile: Profile | null | undefined = useAuthStore(
    (state) => state.profile
  );
  const { logout } = useLogout();

  const { styles } = useSidebarStyles();
  const theme = useTheme();

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Typography.Text>
          <LogoutOutlined size={20} /> Logout
        </Typography.Text>
      ),
      onClick: () => {
        logout(undefined, {
          onSuccess: () => (window.location.href = URLS.PUBLIC_URL),
        });
      },
    },
  ];

  const getSuitableCollapseIcon = (Icon: ReactNode) => (
    <Button
      type="link"
      onClick={() => setCollapsed((prev) => !prev)}
      className={styles.buttonCollapse}
    >
      {Icon}
    </Button>
  );

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.sider}
    >
      <Flex
        vertical
        gap={24}
        className="h-full"
      >
        <Flex
          className={styles.header}
          align="center"
          justify="space-between"
          style={{ paddingLeft: collapsed ? "18px" : "10px" }}
        >
          {collapsed ? (
            getSuitableCollapseIcon(<Hamburger stroke={theme.grey.grey100} />)
          ) : (
            <>
              <Link to={RoutesEnum.DASHBOARD}>
                <Logo />
              </Link>
              {getSuitableCollapseIcon(
                <ArrowCollapse
                  fill={theme.grey.grey100}
                  stroke="transparent"
                />
              )}
            </>
          )}
        </Flex>

        <SidebarMenu collapsed={collapsed} />

        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          placement="top"
        >
          <Flex
            gap={5}
            align="center"
            className={styles.userInfo}
          >
            <Avatar
              src={profile?.avatar ?? IMAGE_FALLBACKS.USER}
              size={40}
              alt=""
            />
            {!collapsed && <span>Hi, {profile?.first_name ?? "Admin"}</span>}
          </Flex>
        </Dropdown>
      </Flex>
    </Sider>
  );
};
