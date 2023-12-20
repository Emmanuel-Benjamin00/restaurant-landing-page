import { createSlice } from "@reduxjs/toolkit";

export const getDataSlice = createSlice({
  name: "getData",
  initialState: { data: false },
  reducers: {
    getData: (state, action) => {
      return { ...state, data: true }; 
    },
  },
});

export const { getData } = getDataSlice.actions; 
export default getDataSlice.reducer;
