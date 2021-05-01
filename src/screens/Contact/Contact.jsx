import React from "react";
import emailjs from "emailjs-com";
import "../../styles/screens/Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    fontSize: "4rem",
    background: "none",
    borderRadius: "0.7rem",
  },
});

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

  const classes = useStyles();

  return (
    <div id="contact">
        <br /> <br />
        <Button variant="outlined" size="large" class={classes.button} >CONTACT</Button>
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
    </div>
  );
}
