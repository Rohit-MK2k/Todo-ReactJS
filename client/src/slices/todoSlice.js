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
        }
    }
})

export const {setTodoList, deleteAllTodoList} = todoListSlice.actions

export default todoListSlice.reducer