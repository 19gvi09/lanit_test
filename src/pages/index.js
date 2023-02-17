import Head from "next/head";
import { Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Главная</Title>
      </main>
    </>
  )
}
