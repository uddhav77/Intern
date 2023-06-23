import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contactus from './Contactus'
import MyCart from './MyCart'
import Description from './Description'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mycart" element={<MyCart/>}/>
      <Route path="/contactus" element={<Contactus/>}/>      
      <Route path="/description/:id" element={<Description/>}/>      
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
