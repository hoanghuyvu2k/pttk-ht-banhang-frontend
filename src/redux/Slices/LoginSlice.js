import { createSlice } from '@reduxjs/toolkit'
import Reactotron from "reactotron-react-js";
const initialState = {
    userInfo: {}
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getUserInfo: (state, action) => {
            state.userInfo = action.payload
            Reactotron.log(action.payload, 'pl')
        },
    },
})

export const { getUserInfo } = loginSlice.actions

export default loginSlice.reducer