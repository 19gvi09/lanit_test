import { Menu } from "antd";
import { Layout } from "antd";
import Link from "next/link"
import { useRouter } from "next/router";

const { Header } = Layout;

const menu_items = [
  {
    label: <Link href="/">Главная</Link>,
    key: "/",
  },
  {
    label: <Link href="/data">Товары</Link>,
    key: "/data",
  },
  {
    label: <Link href="/profile">Профиль</Link>,
    key: "/profile",
  },
]

export default function TheHeader() {
  const router = useRouter()

  return (
    <Header>
      <Menu theme="dark" selectedKeys={[router.pathname]} items={menu_items} mode="horizontal" />
    </Header>
  )
}