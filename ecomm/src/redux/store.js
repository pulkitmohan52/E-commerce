import { configureStore } from "@reduxjs/toolkit"; 
import productReducer from "./slice/ProductSlice"; 

const store = configureStore({
    reducer: {
        // cart: cartReducer,
        products: productReducer,
    }
})

export default store;