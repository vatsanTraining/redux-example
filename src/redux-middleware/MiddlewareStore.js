import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./CustomerSlice";

const store =configureStore({
    reducer:{
        customer:customerReducer
    }
})
    export default store;