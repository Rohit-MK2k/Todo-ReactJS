import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import { apiSlice } from './slices/apiSlice'
import hamburgerToggleSlice from './slices/hamburgerToggleSlice'
import todoListSlice from './slices/todoSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        toggleHamburger: hamburgerToggleSlice,
        todoList: todoListSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store