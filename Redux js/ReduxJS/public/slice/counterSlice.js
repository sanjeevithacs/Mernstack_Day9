// 20.01.25

import { createSlice } from "@reduxjs/toolkit";

const initialState ={    // instead of creating initial value inside we have created here globally
    count:0
} //object

const counter = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{    //state - parameter | can be of any name like a,b etc..
          state.count+=1;
        },
        decrement:(state)=>{
          if(state.count>0){
          state.count-=1;
          }
        },
        reset:(state)=>{
          state.count=0;
        },
        addValue:(state,action) => {
          state.count += action.payload
      }
    }  //object so {}
})

export const {increment,decrement,reset,addValue} = counter.actions;  //destructing    // exporting reducer functions     //named export
export default counter.reducer;   // for store   //default export