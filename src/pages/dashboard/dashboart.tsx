import { Card, Row, Col, Statistic, Progress } from "antd";
import {
  MobileOutlined,
  TabletOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { dashboardData } from "../../db";

const Dashboard = () => {
  const data = dashboardData;
  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[16, 16]}>
        {/* Performance Section */}
        <Col span={24}>
          <Card title="Performance" bordered={false}>
            <p>Users: {data.performance.users}</p>
          </Card>
        </Col>

        {/* Sessions By Device */}
        <Col span={12}>
          <Card title="Sessions By Device" bordered={false}>
            <div>
              <p>
                <DesktopOutlined /> Desktop:{" "}
                {data.sessionsByDevice.desktop.value} (
                {data.sessionsByDevice.desktop.percentage}%)
              </p>
              <p>
                <MobileOutlined /> Mobile: {data.sessionsByDevice.mobile.value}{" "}
                ({data.sessionsByDevice.mobile.percentage}%)
              </p>
              <p>
                <TabletOutlined /> Tablet: {data.sessionsByDevice.tablet.value}{" "}
                ({data.sessionsByDevice.tablet.percentage}%)
              </p>
            </div>
          </Card>
        </Col>

        {/* Stats */}
        {data.stats.map((stat, index) => (
          <Col span={6} key={index}>
            <Card bordered={false}>
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={<span>{stat.change}</span>}
              />
            </Card>
          </Col>
        ))}

        {/* Daily Overview */}
        <Col span={24}>
          <Card title="Daily Overview" bordered={false}>
            <Row>
              <Col span={12}>
                <Statistic
                  title="Users"
                  value={data.dailyOverview.users.today}
                  suffix={`Expected: ${data.dailyOverview.users.expected}`}
                />
                <Progress
                  percent={
                    (data.dailyOverview.users.today /
                      data.dailyOverview.users.expected) *
                    100
                  }
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Goals"
                  value={data.dailyOverview.goals.today}
                  suffix={`Expected: ${data.dailyOverview.goals.expected}`}
                />
                <Progress
                  percent={
                    (data.dailyOverview.goals.today /
                      data.dailyOverview.goals.expected) *
                    100
                  }
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
