import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";
import LicenseData from "./Pages/LicenseData";
import Refence from "./Pages/Refence";
import Applicant from "./Pages/Applicant";
import License from "./Pages/License";
import LicenseStatus from "./Pages/LicenseStatus";
import OnlineExam from "./Pages/OnlineExam";

const App = () => {
  return (
    <>
      <div className="bg-black w-full h-[176vh] text-white font-poppins">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/licensedata" element={<LicenseData />} />
            <Route path="/refence" element={<Refence />} />
            <Route path="/applicantid" element={<Applicant />} />
            <Route path="/licenseno" element={<License />} />
            <Route path="/licensestatus" element={<LicenseStatus />} />
            <Route path="/onlineexam" element={<OnlineExam />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
