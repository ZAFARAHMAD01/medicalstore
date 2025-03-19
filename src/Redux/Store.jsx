import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import CartSlice from "./CartSlice";
const store = configureStore({
    reducer:{
        cart:CartSlice,
        auth:Auth
    }
})

export default store;