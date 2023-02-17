import { Layout } from "antd";
import TheHeader from "./TheHeader";

const { Content, Footer } = Layout;

export default function TheLayout({ children }) {
  return (
    <Layout className="wrapper">
      <TheHeader />
      <Content className="container">{ children }</Content>
      <Footer></Footer>
    </Layout>
  )
}