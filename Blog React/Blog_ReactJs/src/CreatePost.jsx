import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addPost } from './slice/blogSlice'

function CreatePost() {
  const[author,setauthor]=useState(" ")
  const[data,setdata]=useState(" ")

  const dispatch = useDispatch();
  
  function handle(){
    
  }
  return (
    <div>
      <label htmlFor='authordata'>Author:</label>
      <input type='text' id='authordata' value={author} onChange={(e)=>setauthor(e.target.value)}/>
      <label htmlFor='data'>Data:</label>
      <input type='text' id='data' value={data} onChange={(e)=>setdata(e.target.value)}/>
      <button onClick={handle}>submit</button>
    </div>
  )
}

export default CreatePost