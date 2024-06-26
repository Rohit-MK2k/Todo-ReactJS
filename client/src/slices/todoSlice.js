import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : [],
    editTodo: {
        item: {},
        edit: false
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
        updateOneTodo: (state, action) =>{
            const {id, task, comment, startTime, endTime} = action.payload
            state.list.forEach(item =>{
                if(item.id === id){
                    item.task = task,
                    item.comment = comment,
                    item.startTime = startTime,
                    item.endTime = endTime
                }
            })
        }
    }
})

export const {setTodoList, deleteAllTodoList, addToList, deleteOneTodo, updateTodoState, updateOneTodo} = todoListSlice.actions

export default todoListSlice.reducer