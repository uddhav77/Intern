import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Message from "./Pages/Message";

const App = () => {
  return (
    <>
      <div className="bg-blue-300 p-8 h-max">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Message />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
