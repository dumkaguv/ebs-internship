import { ReactNode, useState } from "react";
import { Avatar, Button, Flex, Layout } from "antd";
import { Logo } from "@/components";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/config/routesEnum";
import { useSidebarStyles } from "./SidebarStyles";
import { ArrowCollapse, Hamburger } from "@/assets";
import { SidebarMenu } from "./SidebarMenu";

const { Sider } = Layout;

export const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { styles } = useSidebarStyles();

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
            getSuitableCollapseIcon(<Hamburger stroke="#F8FAFC" />)
          ) : (
            <>
              <Link to={RoutesEnum.DASHBOARD}>
                <Logo />
              </Link>
              {getSuitableCollapseIcon(<ArrowCollapse fill="#F8FAFC" />)}
            </>
          )}
        </Flex>

        <SidebarMenu collapsed={collapsed} />

        <Flex
          className={styles.userInfo}
          gap={5}
          align="center"
        >
          <Avatar size={40} />
          {!collapsed && <span>Hi, John</span>}
        </Flex>
      </Flex>
    </Sider>
  );
};
