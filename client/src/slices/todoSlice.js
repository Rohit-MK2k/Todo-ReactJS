import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : []
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodoList: (state, action) =>{
            state.list = action.payload
        },
        deleteAllTodoList: (state, action) => {
            state.list = []
        },
        addToList: (state, action) =>{
            state.list = [action.payload, ...state.list,]
        },
        deleteOneTodo: (state, action) =>{
            const id = action.payload
            let newList = state.list.filter(item => item.id !== id)
            state.list = newList
        }
    }
})

export const {setTodoList, deleteAllTodoList, addToList, deleteOneTodo} = todoListSlice.actions

export default todoListSlice.reducer