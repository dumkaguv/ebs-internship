import { Sidebar, Header } from "@/components";
import { useAutoRefreshToken } from "@libs";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { useMainLayoutStyles } from "./MainLayoutStyles";

export const MainLayout = () => {
  useAutoRefreshToken();

  const { styles } = useMainLayoutStyles();

  return (
    <Layout className="h-screen">
      <Sidebar />

      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
