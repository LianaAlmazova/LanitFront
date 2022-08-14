import {createSlice} from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        user: null, 
        password: null,
    },    
    reducers: {
        registerNewUser: (state, action) => {
            const {user, password} = action.payload
            state.user = user
            state.password = password
        },
    },
});

export const{registerNewUser} = registerSlice.actions

export default registerSlice.reducer
