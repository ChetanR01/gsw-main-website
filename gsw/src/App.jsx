import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';  // Assuming you have this component
import About from './Pages/About';
import Gallery from "./Pages/Gallery";
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import DataDeletion from './Pages/DataDeletion';
import TermsOfService from './Pages/TermsOfService';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/data-deletion" element={<DataDeletion/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
