import { apiSlice } from "./apiSlice";
const REGISTER_URL = '/api/user'

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        register: builder.mutation({
            query: (data) =>({
                url: `${REGISTER_URL}/`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useRegisterMutation} = registerApiSlice