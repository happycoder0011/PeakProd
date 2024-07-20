import Checkbox from "../../components/Atoms/Checkbox";
import Navbar from "./components/Navbar";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

const DashboardPage = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Navbar />
      </Header>
      <Layout>
        <Sider width={200}>Side panel</Sider>
      </Layout>
      <Layout></Layout>
      <Checkbox />
    </Layout>
  );
};

export default DashboardPage;
