import React from 'react'

import Home from './components/Home'
import NavBar from './src/NavBar'
import Singers from './components/Singers'
import { Routes,Route } from 'react-router-dom'
import Albums from './components/Albums'

export default function App() {
  return (
   
    <div>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sing' element={<Singers/>}/>
          <Route path='/alb' element={<Albums/>}/>
        </Routes>
    </div>
 
  )
}