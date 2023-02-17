import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApiSlice = createApi({
  reducerPath: "api/login",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          localStorage.setItem("isAuthed", true)
        } catch (error) {
          
        }
      }
    })
  })
})

export const { useLoginMutation } = loginApiSlice