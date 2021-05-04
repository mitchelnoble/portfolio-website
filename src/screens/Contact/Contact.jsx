import React from "react";
import emailjs from "emailjs-com";
import { Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import "../../styles/screens/Contact.css";

const useStyles = makeStyles({
  button: {
    fontSize: "4rem",
    background: "linear-gradient(45deg, #303AA6 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    marginBottom: "0.5em",
  },
  input: {
    width: "80%",
  },
  icon: {
    fontSize: "5rem",
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
      <br />
      <br />
      <Button class={classes.button}>CONTACT</Button>
      <Typography variant="h6">MitchelParkerNoble@gmail.com</Typography>
      <hr />

      <form onSubmit={sendEmail} className="the-form">
        <TextField
          type="text"
          className={classes.input}
          placeholder="Name"
          name="name"
          required
        />

        <TextField
          type="text"
          className={classes.input}
          placeholder="Email"
          name="email"
          required
        />

        <TextField
          type="text"
          className={classes.input}
          placeholder="Subject"
          name="subject"
          required
        />

        <TextField
          className={classes.input}
          multiline
          rows={12}
          required
          placeholder="Your Message"
          name="message"
        />

        <br />
        <br />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className="submit-button"
          value="Send"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>

      <br />
      <br />
    </div>
  );
}
