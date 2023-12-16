import { configureStore } from "@reduxjs/toolkit"
import tokenReducer from './tokenSlice'
import orderDataReducer  from "./orderDataSlice"
import getDataReducer from "./getDataSlice"

export default configureStore({
    reducer: {
        token: tokenReducer,
        orderData: orderDataReducer,
        getData: getDataReducer
    }
})