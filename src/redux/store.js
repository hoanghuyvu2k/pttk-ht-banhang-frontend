import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/CounterSlice'
import searchProduct from './Slices/SearchProduct'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        searchproduct: searchProduct
    },
})