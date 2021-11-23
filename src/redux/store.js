import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/CounterSlice'
import loginSlice from './Slices/LoginSlice'
import searchProduct from './Slices/SearchProduct'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        searchproduct: searchProduct,
        login: loginSlice
    },
})