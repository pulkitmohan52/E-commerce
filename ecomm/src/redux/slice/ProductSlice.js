import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

export const fetchProducts = createAsyncThunk(
    "product/fetch", 
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data; 
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [], 
        status: "idle", 
    }, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload; 
            state.status = "succeeded"; 
        })
    }
})

export default productSlice.reducer; 