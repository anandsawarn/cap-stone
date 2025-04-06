import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Users/Home"
import About from "./Pages/Users/About"
import Contact from "./Pages/Users/Contact";
import SignUp from "./Pages/Users/SignUp";
import Chatbot from "./Components/Chatbot";
import Login from "./Pages/Users/Login";

import Electrician from "./Pages/Services/Electrician"; // Fixed path
import Technician from "./Pages/Services/Technician"; // Fixed path
import Plumber from "./Pages/Services/Plumber"; // Fixed path
import Cleaning from "./Pages/Services/Cleaning"; // Fixed path
import Carpenter from "./Pages/Services/Carpenter"; // Fixed path
import ServicePage from "./Pages/Services/ServicePage"; // Fixed path

export default function App() {
  
  return (
    <Router>
      <Navbar />
      <Chatbot />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/services/:serviceName" element={<ServicePage />} />
        <Route path="/services/electrician" element={<Electrician />} />
        <Route path="/services/technician" element={<Technician />} />
        <Route path="/services/plumber" element={<Plumber />} />
        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/carpenter" element={<Carpenter />} />
      </Routes>
    </Router>
    
  );
}
