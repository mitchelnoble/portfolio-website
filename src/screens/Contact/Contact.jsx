import React from "react";
import emailjs from "emailjs-com";
import "../../styles/screens/Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import SendIcon from '@material-ui/icons/Send';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
      <Button variant="outlined" size="large" class={classes.button} >CONTACT</Button>
        <br /> <br />
          <form className="the-form">
        <Grid container direction="column" alignItems="center">
            <Input
              type="text"

              placeholder="Name"
              name="name"
              />
            <Input
              type="text"

              placeholder="Email"
              name="email"
              />
            <Input
              type="text"

              placeholder="Subject"
              name="subject"
              />
        <TextField
            placeholder="Message"
            multiline
          rows={5}
          />
          <Grid xs={1}>
        <Button
          onClick={() => { sendEmail() }}
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}>
          Send
          </Button>
        </Grid>
      </Grid>
          </form>
        </div>
  );
}
