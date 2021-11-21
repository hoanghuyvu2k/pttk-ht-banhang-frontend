import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './HomeSlices/CounterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})