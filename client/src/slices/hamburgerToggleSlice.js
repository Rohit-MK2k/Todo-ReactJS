import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

const hamburgerToggleSlice = createSlice({
    name: 'hamburgerOpen',
    initialState,
    reducers: {
        setHamburgerOpen: (state, action) =>{
            state.isOpen = action.payload
        }
    }
})

export const {setHamburgerOpen} = hamburgerToggleSlice.actions

export default hamburgerToggleSlice.reducer