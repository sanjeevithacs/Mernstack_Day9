import { createSlice } from "@reduxjs/toolkit";

const initialState=  [
    {id:1,author:"yutfjsko",data:"lorem..."},
    {id:2,author:"erfdbhui",data:"lorem..."},
    {id:3,author:"uitnjdk",data:"lorem..."},
    {id:4,author:"bjrgbdfj",data:"lorem..."},
    {id:5,author:"tjihbygo",data:"lorem..."}

]
const post = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.unshift(action.payload);
        }
    }

})

export const {addPost}=post.actions;
export default post.reducer;

