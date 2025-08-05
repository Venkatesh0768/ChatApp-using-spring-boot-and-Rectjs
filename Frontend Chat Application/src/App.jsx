import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './componenets/Home'
import ChatRoom from './componenets/ChatRoom'

function App() {
  return (
    <div className='bg-zinc-950'>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/chat' element={<ChatRoom/>} ></Route>
      </Routes>
    </div>
  )
}

export default App