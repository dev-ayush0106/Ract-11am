import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
const store1=configureStore({
    reducer:{
        cart:cartSlice,
    }
})

export default store1;