import React from "react";
import emailjs from "emailjs-com";
import "../../styles/screens/Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "portfolio", e.target, "user_7b93yjG2Y4hYl9UdkMpZS")
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message was sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      
      <div className="contact-title-container">
        <h1 className="contact-me-title">Contact Me</h1>
      </div>

      <div className="form-and-details">

        <div className="contact-form">
        <form onSubmit={sendEmail} className="the-form">
          <input
            type="text"
            className="name-box"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="email-box"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="subject-box"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="text-box"
            id=""
            cols="80"
            rows="12"
            placeholder="Your Message"
            name="message"
          />
          <input type="submit" className="submit-button" value="Send" />
        </form>
        </div>
        </div>
    </>
  );
}
