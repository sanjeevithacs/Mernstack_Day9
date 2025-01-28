import React, { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewPost from './ViewPost'
import CreatePost from './CreatePost'

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/posts' element={<ViewPost/>} />
      <Route path='/create' element={<CreatePost/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App