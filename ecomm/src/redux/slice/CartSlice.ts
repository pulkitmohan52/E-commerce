import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

type CartItem = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
}

interface CartState {
    cartItems: CartItem[];
    status: string;
}

const initialState: CartState = {
    cartItems: [], 
    status: "idle", 
}

export const fetchCartItems = createAsyncThunk(
    "cart/fetch", 
    async () => {
      const response = await axios.get("http://localhost:3001/cart");
      return response.data; 
    }
)

export const updateCartItems = createAsyncThunk(
    "cart/update", 
    async (item: CartItem) => {
        console.log("item", item); 
        const response = await axios.patch(`http://localhost:3001/cart/${item.id}`, {
            quantity: item.quantity
        }); 
        return response.data; 
    }
)

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        cartItems: [], 
        status: "idle", 
    }, 
    reducers: {
        incrementQuantity: (state: CartState, action) => {
            const item = state.cartItems.find((item: CartItem) => item.id === action.payload);
            if (item) {
                item.quantity += 1; 
            }
        }, 
        decrementQuantity: (state: CartState, action) => {
            const item = state.cartItems.find((item: CartItem) => item.id === action.payload);
            if (item) {
              if (item.quantity > 1) {
                item.quantity -= 1;
              } else {
                state.cartItems = state.cartItems.filter((item: CartItem) => item.id !== action.payload);
              }
            }
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.fulfilled, (state: CartState, action) => {
            state.cartItems = action.payload; 
            state.status = "succeeded"; 
        })
        builder.addCase(updateCartItems.fulfilled, (state: CartState, action) => {
            console.log("action.payload", action.payload); 
            console.log("state is, ", state); 
            const itemIndex = state.cartItems.findIndex((item: CartItem) => item.id === action.payload.id); 
            if (itemIndex ! == -1) {
                state.cartItems[itemIndex] = action.payload; 
                state.status = "succeeded"; 
            }
        })
    }
})

export const { incrementQuantity, decrementQuantity} = cartSlice.actions; 
export default cartSlice.reducer; 
