import React from "react";
import { Layout,Menu,Button,Card,Typography,Input,Row,Col,Form,Statistic,Avatar,Alert,Table,Progress,Modal,Divider,Tabs,Radio,} from "antd";
import {UserOutlined,ShoppingCartOutlined,SearchOutlined,FileDoneOutlined,AppstoreAddOutlined,ShoppingOutlined,} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Line } from "@ant-design/charts";   

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;


const AntDesign = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState(1);


  const tableData = [
    {
      key: "1",
      product: "Laptop",
      price: "$1200",
      status: "In Stock",
    },
    {
      key: "2",
      product: "Mobile Phone",
      price: "$600",
      status: "Out of Stock",
    },
    {
      key: "3",
      product: "Headphones",
      price: "$150",
      status: "In Stock",
    },
  ];

  
  const chartData = [
    { month: "Jan", sales: 1000 },
    { month: "Feb", sales: 1200 },
    { month: "Mar", sales: 900 },
    { month: "Apr", sales: 1400 },
    { month: "May", sales: 1300 },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          backgroundColor: "#fff",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4A90E2" }}>
          My Dashboard
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            style={{ marginRight: "20px", width: "250px" }}
          />
          <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
        </div>
      </Header>

      <Layout style={{ padding: "20px" }}>
      
        <Sider
          width={200}
          style={{
            backgroundColor: "#f0f2f5",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            theme="light"
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />} style={{ fontSize: "18px" }}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />} style={{ fontSize: "18px" }}>
              Orders
            </Menu.Item>
            <Menu.Item key="3" icon={<FileDoneOutlined />} style={{ fontSize: "18px" }}>
              Reports
            </Menu.Item>
            <Menu.Item key="4" icon={<AppstoreAddOutlined />} style={{ fontSize: "18px" }}>
              Products
            </Menu.Item>
            <Menu.Item key="5" icon={<ShoppingOutlined />} style={{ fontSize: "18px" }}>
              Sales
            </Menu.Item>
          </Menu>
        </Sider>

    
        <Layout style={{ padding: "0 20px" }}>
          <Content
            style={{
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                title="Welcome Back"
                bordered={false}
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#e6f7ff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Typography>
                  <Title level={3} style={{ color: "#4A90E2" }}>
                    Hello, User!
                  </Title>
                  <Paragraph>
                    We're glad to have you back! Here's a quick overview of the latest updates.
                  </Paragraph>
                </Typography>
              </Card>
            </motion.div>

            
            <Row gutter={16} style={{ marginBottom: "20px" }}>
              <Col span={12}>
                <Card
                  title="Create New Order"
                  bordered={false}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    backgroundColor: "#f0f2f5",
                  }}
                >
                  <Form
                    name="orderForm"
                    layout="vertical"
                    initialValues={{ remember: true }}
                  >
                    <Form.Item
                      label="Product Name"
                      name="productName"
                      rules={[{ required: true, message: "Please input the product name!" }]}
                    >
                      <Input placeholder="Enter product name" />
                    </Form.Item>

                    <Form.Item
                      label="Quantity"
                      name="quantity"
                      rules={[{ required: true, message: "Please input the quantity!" }]}
                    >
                      <Input placeholder="Enter quantity" />
                    </Form.Item>

                    <Form.Item
                      label="Price"
                      name="price"
                      rules={[{ required: true, message: "Please input the price!" }]}
                    >
                      <Input placeholder="Enter price" />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit Order
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Order Statistics"
                  bordered={false}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    backgroundColor: "#f0f2f5",
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic title="Total Orders" value={1128} />
                    </Col>
                    <Col span={12}>
                      <Statistic title="Pending Orders" value={5} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            
            <Card
              title="Sales Overview"
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              <Line
                data={chartData}
                xField="month"
                yField="sales"
                point={{ size: 5, shape: "diamond" }}
                label={{
                  position: "middle",
                  style: { fill: "#aaaaaa", fontSize: 12 },
                }}
                interactions={["active-region"]}
              />
            </Card>

          
            <Card
              title="Product List"
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              <Table
                dataSource={tableData}
                columns={[
                  { title: "Product", dataIndex: "product" },
                  { title: "Price", dataIndex: "price" },
                  { title: "Status", dataIndex: "status" },
                ]}
              />
            </Card>

          
            <Card
              title="Progress Overview"
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              <Progress percent={30} status="active" />
              <Progress percent={60} status="success" />
              <Progress percent={90} status="exception" />
            </Card>

            
            <Card
              title="Select Option"
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              <Radio.Group
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
              >
                <Radio value={1}>Option 1</Radio>
                <Radio value={2}>Option 2</Radio>
                <Radio value={3}>Option 3</Radio>
              </Radio.Group>
            </Card>

          
            <Button
              type="primary"
              onClick={() => setModalVisible(true)}
              style={{ marginBottom: "20px" }}
            >
              Open Modal
            </Button>

            
            <Modal
              title="Example Modal"
              visible={modalVisible}
              onOk={() => setModalVisible(false)}
              onCancel={() => setModalVisible(false)}
            >
              <p>Here is some content inside the modal.</p>
            </Modal>

            
            <Divider />

            
            <Alert
              message="New System Update"
              description="The system has been updated to version 2.3. Please review the changes."
              type="info"
              showIcon
              style={{
                marginTop: "20px",
              }}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AntDesign;
