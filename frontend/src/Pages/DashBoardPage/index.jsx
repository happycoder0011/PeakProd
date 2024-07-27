import React from "react";
import Checkbox from "../../components/Atoms/Checkbox";
import { Layout } from "antd";

const { Sider } = Layout;

const DashboardPage = () => {
  return (
    <Layout>
      <Layout>
        <Sider width={200}>Side panel</Sider>
      </Layout>
      <Layout></Layout>
      <Checkbox />
    </Layout>
  );
};

export default DashboardPage;
