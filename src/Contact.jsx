import React, { useEffect } from 'react';
import './Contact.css';
import App from './App.jsx';
import Footer from './Footer';
import emailjs from "@emailjs/browser";

function Contact() {

  useEffect(() => {
    const Form = document.getElementById("format");

    const handleSubmit = (e) => {
      e.preventDefault();

      const Name = document.getElementById("name").value.trim();
      const Email = document.getElementById("email").value.trim();
      const Msg = document.getElementById("msg").value.trim();

      const NameRegex = /^[A-Za-z\s]{3,}$/;
      const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!NameRegex.test(Name)) {
        alert("Please enter a valid name");
        return;
      }
      if (!Email.includes("@")) {
        alert("@ is missing in email");
        return;
      }
      if (!EmailRegex.test(Email)) {
        alert("Enter valid Email");
        return;
      }

      // EmailJS
      emailjs.send(
        "service_z71ltli",
        "template_osl4qtd",
        {
          name: Name,
          email: Email,
          message: Msg,
        },
        "d8MkntnI0zwUWKIzF"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        Form.reset();
      })
      .catch((error) => {
        console.log("EMAILJS ERROR:", error);
        alert("Failed to send message. Check console for details.");
      });
    };

    Form.addEventListener("submit", handleSubmit);

    return () => {
      Form.removeEventListener("submit", handleSubmit);
    };

  }, []);

  return (
    <>
      <App />
      <section className='Contact-sec'>
        <div className="inner-content">
          <h1>Have questions or need support ?</h1>

          <div className="form">
            <form id='format'>
              <label>Name</label>
              <input type='text' id='name' placeholder='Enter Your Name' required />

              <label>E-mail</label>
              <input type="email" id='email' placeholder='Enter Your E-mail' required />

              <label>Message</label>
              <input type='text' id='msg' placeholder='Your Message' required />

              <button id='btn' type='submit'>Contact us</button>
            </form>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
// update contact section user send msg directly admini
