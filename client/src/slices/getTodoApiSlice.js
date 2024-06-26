import { apiSlice } from "./apiSlice";
const GETTODO_URL = '/api/todo/list'
const POSTTODO_URL = '/api/todo'
const DELETEONE_URL = '/api/todo/deleteOne'
const CHANGESTAT_URL = '/api/todo/status'
const UPDATETODO_URL = '/api/todo/update'

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
        }),
        deleteOne: builder.mutation({
            query: (data) =>({
                url: `${DELETEONE_URL}`,
                method: 'POST',
                body: data
            })
        }),
        changeStatus: builder.mutation({
            query: (data) => ({
                url: `${CHANGESTAT_URL}`,
                method: 'POST',
                body: data
            })
        }),
        updateTodo: builder.mutation({
            query: (data) =>({
                url: `${UPDATETODO_URL}`,
                method: 'POST',
                body: data
            })
        })

    })
})

export const {useTodoListMutation, useAddTodoMutation, useDeleteOneMutation, useChangeStatusMutation, useUpdateTodoMutation} = getTodoSlice