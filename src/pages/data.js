import ProductModal from "@/components/ProductModal";
import { useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from "@/store/api";
import { Button, Table } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Data() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ modalType, setModalType ] = useState("add")
  const [ modalProduct, setModalProduct ] = useState()
  const { data, isLoading, isError } = useGetProductsQuery()
  const [ deleteProduct ] = useDeleteProductMutation()
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Товар",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Скидка, %",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
    },
    {
      title: "Рейтинг",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Количество",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Бренд",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Действия",
      dataIndex: "actions",
      key: "actions",
      render: (_, product) => <><a onClick={() => openModal("update", product)}>Редактировать</a><br/><a onClick={() => deleteProduct(product.id)}>Удалить</a></>,
    },
  ]

  const openModal = (type, product) => {
    setModalType(type)
    setModalProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>Data</title>
        <meta name="description" content="Data page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button type="primary" onClick={() => openModal("add", null)}>Добавить товар</Button>
        { isLoading ? "Loading..." : <Table columns={columns} dataSource={data.products} /> }
        <ProductModal isModalOpen={isModalOpen} closeModal={closeModal} type={modalType} product={modalProduct} />
      </main>
    </>
  )
}