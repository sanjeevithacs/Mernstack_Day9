import { configureStore } from "@reduxjs/toolkit";
import post from '../slice/blogSlice' 

const store = configureStore({
    reducer:{post:post}
})
export default store;