import React, { useState } from 'react'
import { increment} from '../../public/slice/counterSlice'
import { decrement } from '../../public/slice/counterSlice'
import { reset ,addValue } from '../../public/slice/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const selector = useSelector((state)=>state.counter)    //state - can be of any name | .counter - from store.js
    console.log(selector)

    const dispatch = useDispatch()

    let userval = 0
    function handleclick(){
      userval = Number.parseInt(prompt("enter inc:"))
      dispatch(addValue(userval))
    }
     
  return (
    <div>
        <div>{selector.count}</div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={handleclick} >Add value</button>
    </div>
    
  )
}

export default Counter