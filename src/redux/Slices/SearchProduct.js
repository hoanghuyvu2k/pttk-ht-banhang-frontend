import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
}

export const searchProduct = createSlice({
    name: 'searchproduct',
    initialState,
    reducers: {
        changeValueInput: (state, action) => {
            state.search = action.payload
        },
    },
})
export const searchCurrent = (state) => { 
    return state.searchproduct.search
}
// Action creators are generated for each case reducer function
export const { changeValueInput } = searchProduct.actions

export default searchProduct.reducer