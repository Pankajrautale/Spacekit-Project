import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Sticky from './Sticky.jsx'
import Home from './Home.jsx';
import Products from './Products.jsx'
import Contact from './Contact.jsx'
function  Routing(){

  return(<>
        {/* <App/> */}
         <Routes>
        <Route path="/"
          element={<Home/>}
        />

        <Route path='/product'
          element={<Products />} />
        <Route path='/contact'
          element={<Contact />} />

      </Routes>
  
  
  
  </>)
}
export default Routing;