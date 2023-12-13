import { configureStore } from "@reduxjs/toolkit"
import tokenReducer from './tokenSlice'
import orderDataReducer  from "./orderDataSlice"

export default configureStore({
    reducer: {
        token: tokenReducer,
        orderData: orderDataReducer
    }
})