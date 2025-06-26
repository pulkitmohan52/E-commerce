import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/ProductSlice';
import cartReducer from './slice/CartSlice.ts'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 