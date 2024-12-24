import React, { useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <>
      <Layout className="min-h-screen flex">
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={[
              {
                key: "/",
                icon: <DashboardOutlined />,
                label: "Dashboard",
              },
              {
                key: "/add",
                icon: <UploadOutlined />,
                label: "Add Product",
              },
              {
                key: "/products",
                icon: <ProductOutlined />,
                label: "Products",
              },
            ]}
            onClick={({ key }) => {
              if (key) {
                navigate(key);
              }
            }}
          />
        </Sider>
        <Layout className="h-full">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
