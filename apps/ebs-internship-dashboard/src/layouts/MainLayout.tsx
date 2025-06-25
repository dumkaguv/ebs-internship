import { Sidebar } from "@/components";
import { useAutoRefreshToken } from "@libs";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  useAutoRefreshToken();

  return (
    <Layout className="h-screen">
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
