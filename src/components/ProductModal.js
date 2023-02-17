import { useAddProductMutation, useUpdateProductMutation } from "@/store/api";
import { Modal, Form, Input } from "antd";
import { useEffect } from "react";

export default function ProductModal({ isModalOpen, closeModal, type, product }) {
  const [ form ] = Form.useForm();
  const [ addProduct ] = useAddProductMutation()
  const [ updateProduct ] = useUpdateProductMutation()
  const formSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values)
      form.resetFields();
      switch (type) {
        case "add":
          addProduct(values)
          break;
        case "update":
          updateProduct(product.id, values)
          break;
        default:
          break;
      }
    })
    closeModal()
  }

  useEffect(() => {
    form.setFieldsValue(product)
  }, [product])

  return (
    <Modal title={type === "add" ? "Добавить товар" : "Редактировать товар"} open={isModalOpen} onCancel={closeModal} onOk={formSubmit} okText={type === "add" ? "Добавить товар" : "Сохранить"} cancelText="Отмена">
      <Form form={form} name="login">
        <Form.Item name="title">
          <Input placeholder="Товар" />
        </Form.Item>
        <Form.Item name="description">
          <Input placeholder="Описание" />
        </Form.Item>
        <Form.Item name="price">
          <Input placeholder="Цена" />
        </Form.Item>
        <Form.Item name="discountPercentage">
          <Input placeholder="Скидка, %" />
        </Form.Item>
        <Form.Item name="rating">
          <Input placeholder="Рейтинг" />
        </Form.Item>
        <Form.Item name="stock">
          <Input placeholder="Количество" />
        </Form.Item>
        <Form.Item name="brand">
          <Input placeholder="Бренд" />
        </Form.Item>
        <Form.Item name="category">
          <Input placeholder="Категория" />
        </Form.Item>
      </Form>
    </Modal>
  )
}