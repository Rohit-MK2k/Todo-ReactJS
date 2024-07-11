import { apiSlice } from "./apiSlice";
const USER_URL = '/api/user'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) =>({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () =>({
                url: `${USER_URL}/logout`,
                method: 'POST',
            })
        }),
        changePassword: builder.mutation({
            query: (data) =>({
                url: `${USER_URL}/profile`,
                method: 'POST',
                body: data
            })
        }),
        deleteAcc: builder.mutation({
            query: () => ({
                url: `${USER_URL}/delete`,
                method: 'POST'
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation, useChangePasswordMutation, useDeleteAccMutation} = userApiSlice