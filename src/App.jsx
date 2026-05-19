
import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes,Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'
import  OurBrands  from './pages/OurBrands.jsx';
import Footer from './components/Footer.jsx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
      disable: window.innerWidth < 768
    });
  }, []);
  return (
    <>
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourbrands" element={<OurBrands />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}


export default App
