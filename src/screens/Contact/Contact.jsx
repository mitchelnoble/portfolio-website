import React from "react";
import emailjs from "emailjs-com";
import { Button, Box, TextField, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    fontSize: "4rem",
    background: "none",
    borderRadius: "0.7rem",
  },
  input: {
    width: "80%",
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
      <Button class={classes.button}>Contact Me</Button>
      <br />
      <br />
          <form onSubmit={sendEmail} className="the-form">
            <Input
              type="text"
              className={classes.input}
              placeholder="Name"
              name="name"
            />
            <Input
              type="text"
              className={classes.input}
              placeholder="Email"
              name="email"
            />
            <Input
              type="text"
              className={classes.input}
              placeholder="Subject"
              name="subject"
            />
            <TextField
              className={classes.input}
              multiline
              rows={12}
              placeholder="Your Message"
              name="message"
        />
        <br />
        <br />
            <Button variant="outlined" type="submit" className="submit-button" value="Send">Send</Button>
          </form>
    </div>
  );
}
