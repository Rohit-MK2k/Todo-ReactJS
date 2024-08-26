import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_CLIENT_ENV === 'production'? import.meta.env.VITE_PRODUCTION_SERVER : ''})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) =>({

    }),
})
