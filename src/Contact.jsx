import React, { useEffect } from 'react'
import './Contact.css';
import App from './App.jsx'
import Footer from './Footer'
function Contact() {
  useEffect(() => {
    const Form = document.getElementById("format");

    Form.addEventListener("submit", function (e) {
      e.preventDefault();

      const Name = document.getElementById("name").value.trim();
      const Email = document.getElementById("email").value.trim();

      // Regex patterns
      const NameRegex = /^[A-Za-z\s]{3,}$/;
      const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!NameRegex.test(Name)) {
        alert("Please enter a valid name");
        return;
      }

      // Check if @ is missing
      if (!Email.includes("@")) {
        alert("@ is missing in email");
        return;
      }

      if (!EmailRegex.test(Email)) {
        alert("Enter valid Email");
        return;
      }

      alert("Message Sent Successfully");
    });
  }, []);





  return (
    <>

      <App />
      <section className='Contact-sec'>
        <div className="inner-content">
          <h1>Have questions  or need support ?</h1>
          <div className="form">
            <form id='format' >
              <label>Name</label>
              <input type='text' placeholder='Enter Your Name ' id='name' required />
              <label>E-mail</label>
              <input type="email" placeholder='Enter  Your E-mail' id='email' required />
              <label>Message</label>
              <input type='text' placeholder='Your Message' id='msg' />
              <button id='btn' type='submit'>Contact us</button>
            </form>

          </div>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default Contact