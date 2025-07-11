import { Header, Footer, ScrollToTop } from "@/components";
import { useFetchProfileInfo } from "@/hooks";
import { useAutoRefreshToken } from "@libs";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  useAutoRefreshToken();
  useFetchProfileInfo();

  return (
    <Layout>
      <Header />
      <Content>
        <ScrollToTop />
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
