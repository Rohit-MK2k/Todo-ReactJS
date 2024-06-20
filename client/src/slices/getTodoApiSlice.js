import { apiSlice } from "./apiSlice";
const GETTODO_URL = '/api/todo/list'

export const getTodoSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        TodoList: builder.mutation({
            query: () =>({
                url: `${GETTODO_URL}`,
                method: 'GET',
            })
        })
        
    })
})

export const {useTodoListMutation} = getTodoSlice