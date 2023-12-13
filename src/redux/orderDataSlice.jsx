import { createSlice } from "@reduxjs/toolkit"

export const orderDataSlice = createSlice({
    name:"orderData",
    initialState:[],
    reducers:{
        change:(state,action) =>{
            state.pop()
            state.push(action.payload)
        }
    }
})

export const {change} = orderDataSlice.actions
export default orderDataSlice.reducer