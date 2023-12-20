import { configureStore } from "@reduxjs/toolkit"
import tokenReducer from './tokenSlice'
import orderDataReducer  from "./orderDataSlice"
import getDataReducer from "./getDataSlice"
import foodsReducer from "./foodsSlice"

export default configureStore({
    reducer: {
        token: tokenReducer,
        orderData: orderDataReducer,
        getData: getDataReducer,
        foods:foodsReducer
    }
})