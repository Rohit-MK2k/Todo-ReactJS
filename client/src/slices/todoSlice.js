import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : [],
    editTodo: {
        item: {},
        edit: false
    },
    showList : {
        item: [],
        show: false
    }
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
        },
        updateTodoState: (state, action) =>{
            const {item, edit} = action.payload
            state.editTodo.edit = edit
            state.editTodo.item = item
        },
        showOneTodo: (state, action) =>{
            state.showList.item = action.payload
            state.showList.show = state.showList.show ? false : true
        }
    }
})

export const {setTodoList, deleteAllTodoList, addToList, deleteOneTodo, updateTodoState, updateOneTodo, showOneTodo} = todoListSlice.actions

export default todoListSlice.reducer