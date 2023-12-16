import { createSlice } from "@reduxjs/toolkit";

export const getDataSlice = createSlice({
  name: "getData",
  initialState: { data: false }, // initialState should be an object
  reducers: {
    getData: (state, action) => {
      return { ...state, data: true }; // Update the state to true
    },
  },
});

export const { getData } = getDataSlice.actions; // Fix the action name
export default getDataSlice.reducer;
