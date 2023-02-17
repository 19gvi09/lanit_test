import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products"
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products/add",
        method: "POST",
        body: product,
      }),
      async onQueryStarted(product, { dispatch, queryFulfilled }) {
        try {
          const { data: created } = await queryFulfilled
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              draft.products.push(created)
            })
          )
        } catch (error) {
          
        }
      }
    }),
    updateProduct: builder.mutation({
      query: (id, product) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: product,
      }),
      async onQueryStarted({ id, product }, { dispatch, queryFulfilled }) {
        try {
          // В идеале обновляет объект в кэше на основе успешного запроса
          //const { data: updated } = await queryFulfilled
          // В данном случае прходится собирать обновленный объект руками, так как если товар был создан через метод /products/add, то при обращении к серверу по его id сервер выдаст ошибку
          const updated = { id, ...product }
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              let index = draft.products.findIndex(e => e.id === id)
              draft.products.splice(index, 1, updated)
            })
          )
        } catch (error) {
          
        }
      }
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          // В идеале обновляет объект в кэше на основе успешного запроса
          //const { data: deleted } = await queryFulfilled
          // В данном случае запрос не проверяется, так как если товар был создан через метод /products/add, то при обращении к серверу по его id сервер выдаст ошибку
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              let index = draft.products.findIndex(e => e.id === id)
              draft.products.splice(index, 1)
            })
          )
        } catch (error) {
          
        }
      }
    }),
  })
})

export const { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = apiSlice