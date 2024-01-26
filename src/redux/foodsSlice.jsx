// Redux slice (foodsSlice.js)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosService from "../utils/ApiService";

const fetchFoodsData = createAsyncThunk('foods/fetchData', async () => {
    try {
        const response = await AxiosService.get("/food/getAllFoods");
        return response.data.foods;
    } catch (error) {
        throw error;
    }
});

const foodsSlice = createSlice({
    name: "foods",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Your synchronous reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoodsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFoodsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFoodsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export { fetchFoodsData };
export default foodsSlice.reducer;
