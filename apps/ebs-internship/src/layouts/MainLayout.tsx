import { Header, Footer } from "@/components";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
