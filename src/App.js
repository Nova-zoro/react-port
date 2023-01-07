import Home from './Home';
import React from 'react';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
    </Routes>
    </>
  );
}


export default App;