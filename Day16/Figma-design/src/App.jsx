import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <>
      <div className="bg-black w-full h-[176vh] text-white">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
