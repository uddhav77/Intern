import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Landing from './Pages/Landing'

const App = () => {
  return (
    <>
    <div className='bg-black w-full h-screen text-white'>

    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contactus" element={<Contact />}/>
      </Routes>
      
  </BrowserRouter>
    </div>
    
    </>
  )
}

export default App
