import { Header, Footer, ScrollToTop } from "@/components";
import { useAutoRefreshToken } from "@/hooks";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  useAutoRefreshToken();

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

export default MainLayout;
