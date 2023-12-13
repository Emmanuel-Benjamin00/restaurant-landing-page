import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name:"token",
    initialState:sessionStorage.getItem('token'),
    reducers:{
        toggle:(state,action)=>{
            return state ? null:sessionStorage.getItem('token');
        },
    }
})

export const {toggle} = tokenSlice.actions
export default tokenSlice.reducer