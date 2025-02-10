import React from "react";
import { Layout, Menu, Button, Card, Typography } from "antd";
import { HomeOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const AntDesign = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header" style={{ backgroundColor: "#001529" }}>
        <div style={{ color: "white", fontSize: "24px" }}>My React Page</div>
      </Header>

      <Layout style={{ padding: "0 24px 24px" }}>
        <Sider
          width={200}
          className="site-layout-background"
          style={{ paddingTop: "20px" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<SearchOutlined />}>
              Search
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ padding: "0 24px 24px", minHeight: 280 }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            <Card
              title="Welcome to the page"
              bordered={false}
              style={{ width: "100%" }}
            >
              <Typography>
                <Title level={2}>Welcome, User!</Title>
                <Paragraph>
                  This is an example of a page created using React and Ant
                  Design. You can use Ant Design's layout components to create a
                  responsive and modern UI.
                </Paragraph>
                <Paragraph>
                  Explore the sidebar for navigation options.
                </Paragraph>
                <Button type="primary">Click Me</Button>
              </Typography>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AntDesign;
