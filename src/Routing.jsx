import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Products from './Products.jsx'
import Contact from './Contact.jsx'

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fix for GitHub Pages refresh */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default Routing;
