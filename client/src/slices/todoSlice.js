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
            state.list = [state.list, ...action.payload]
        }
    }
})

export const {setTodoList, deleteAllTodoList, addToList} = todoListSlice.actions

export default todoListSlice.reducer