import WithAuth from "@/hoc/WithAuth";
import Head from "next/head";
import { Avatar, Col, Row, Typography } from "antd";
import dynamic from "next/dynamic";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Profile = () => {
  return (
    <>
      <Head>
        <title>Профиль</title>
        <meta name="description" content="Profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Профиль</Title>
        <Row gutter={16}>
          <Col>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Title>User Name</Title>
          </Col>
        </Row>
      </main>
    </>
  )
}

export default dynamic(() => Promise.resolve(WithAuth(Profile)), { ssr: false })