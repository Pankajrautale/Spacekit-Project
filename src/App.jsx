import React, { useLayoutEffect, useState } from 'react';
import Snowfall from 'react-snowfall'
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './assets/logo.png';
import Main from './assets/mainbg.png';
import Rarrow from './assets/rightarrow.png'
import Roller from './assets/roller.png'
import Darrow from './assets/darow.png'
import MenuBar from './assets/menu.png'
import Products from './Products.jsx'
import Contact from './Contact.jsx'
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
function App() {


  const Button = ("rightarrow.png")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      let tl = gsap.timeline()
      tl.from("header", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        delay: 1,
        scrollTrigger: {
          trigger: "header",
          scroller: "body",
          start: "top 10%"
        }
      });





      tl.from(".Hero-heading .content h1", {
        y: 30,
        opacity: 0,
        duration: 2,
        delay: 0.2

      })


      // tl.from("#logo", {
      //   y: -30,
      //   opacity: 0,
      //   duration: 1,
      //   delay: 1
      // });


      // tl.from(".link li", {
      //   y: -30,
      //   opacity: 0,
      //   duration: 1,
      //   stagger: 0.2
      // })


      // tl.from(".link button", {
      //   y: -30,
      //   opacity: 0,
      //   duration: 1,
      //   // stagger:0.2
      // })


    });

    return () => ctx.revert(); // ✅ Clean up GSAP context
  }, []); // ✅ Run only once

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (<>


    <section className='main'>

<Snowfall />
      <header>
        <div className="logo-sec">
          <img id="logo" src={Logo} alt="Logo" />

        </div>

        <div className="link">
          <Link to='/'><li>Home</li></Link>
          <Link to='/product'><li>Products</li></Link>
          <Link to='/contact'>
            <button> Contact Us </button></Link>

        </div>

        <div
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}

        >
          <img src={MenuBar} alt="menu" />
        </div>

        {/* ✅ Mobile Nav */}
        <div className={`resp-nav ${menuOpen ? 'active' : ''}`}>
          <Link to='/'>  <li onClick={closeMenu}>Home</li></Link>
          <Link to='/product'><li onClick={closeMenu}>Products</li></Link>
          {/* <li onClick={closeMenu}>FAQ</li> */}
          <Link to='/contact'><button onClick={closeMenu}>Contact Us</button></Link>
        </div>
      </header>
      <div className="Hero-heading">
        <button> More Product <img src={Rarrow} />  </button>
        <div className="content">
          <div className="intro">
            <h1>Your Next Adventure Starts With Us</h1>
          </div>
          <div className="right-icon">

          </div>
          <img id='roller' src={Roller} />
          {/* <img  id='Darrow' src={Darrow}/>  */}
        </div>
      </div>


    </section>
  </>
  );
}




export default App;