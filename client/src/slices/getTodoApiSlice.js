import { apiSlice } from "./apiSlice";
const GETTODO_URL = '/api/todo/list'
const POSTTODO_URL = '/api/todo'

export const getTodoSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        TodoList: builder.mutation({
            query: () =>({
                url: `${GETTODO_URL}`,
                method: 'GET',
            })
        }),
        AddTodo: builder.mutation({
            query: (data) =>({
                url: `${POSTTODO_URL}/`,
                method: 'POST',
                body: data
            })
        }) 
    })
})

export const {useTodoListMutation, useAddTodoMutation} = getTodoSlice