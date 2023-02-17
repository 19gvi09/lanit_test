import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.scss";
import { useLoginMutation } from "@/store/loginApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  const [ form ] = Form.useForm()
  const [ showLoginError, setShowLoginError ] = useState(false)
  const [ showPasswordError, setShowPasswordError ] = useState(false)
  const [ login ] = useLoginMutation()
  const onLogin = (values) => {
    login(values)
      .unwrap()
      .then(() => router.push("/profile"))
      .catch((error) => handleErrors(error.status))
  };
  const handleErrors = (status) => {
    switch (status) {
      case 400:
        setShowPasswordError(true)
        break;
      case 404:
        setShowLoginError(true)
        break;
      default:
        break;
    }
    form.validateFields()
  }

  useEffect(() => {
    if (showLoginError || showPasswordError) form.validateFields()
  }, [showLoginError, showPasswordError])

  return (
    <>
      <Head>
        <title>Войти</title>
        <meta name="description" content="Login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form
          name="login_form"
          form={form}
          className={styles.form}
          onFinish={onLogin}
          autoComplete="off"
        >
          <Form.Item
            name="login"
            onChange={() => setShowLoginError(false)}
            rules={[
              {
                required: true,
                message: "Введите логин"
              },
              {
                validator: (_, value) => {
                  if (showLoginError) {
                    return Promise.reject("Неверный логин")
                  }
                  return Promise.resolve()
                }
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            onChange={() => setShowPasswordError(false)}
            rules={[
              {
                required: true,
                message: "Введите пароль"
              },
              {
                validator: (_, value) => {
                  if (showPasswordError) {
                    return Promise.reject("Неверный пароль")
                  }
                  return Promise.resolve()
                }
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </main>
    </>
  )
}