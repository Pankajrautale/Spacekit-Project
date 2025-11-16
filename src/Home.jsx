import React from 'react'
import App from './App.jsx'
import Hero from './Hero.jsx'
import Sticky from './Sticky.jsx'
import './Sticky.css'
import Product from './Product.jsx'
import './Product.css'
import Footer from './Footer.jsx'
import './Footer.css'
function Home() {
  return (
   <>
   {/* <h1>home</h1> */}
       <App />
    <Hero/>
    <Sticky/>
    <Product/>
    <Footer/>
   </>
  )
}

export default Home