import React from "react";
import emailjs from "emailjs-com";
import { Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import "../../styles/screens/Contact.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Theme = {
  palette: {
   primary: {
    contrastText: "#FFFFFF",
    dark: "#FFFFFF",
    main: "#FFFFFF",
    light: "#FFFFFF"
   }
 },
 overrides: {
  MuiOutlinedInput: {
    root: {
      position: "relative",
      "& $notchedOutline": {
        borderColor: "#FFFFFF"
      },
      "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
        borderColor: "#FFFFFF",
        "@media (hover: none)": {
          borderColor: "#FFFFFF"
        }
      },
      "&$focused $notchedOutline": {
        borderColor: "#FFFFFF",
        borderWidth: 1
      }
    }
   }
  }
};
 
const theme = createMuiTheme(Theme);

const useStyles = makeStyles({
  button: {
    fontSize: "1.5rem",
    fontFamily: "Futura",
    background: "#117F76",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    margin: "3.5em 0 0",
  },
  input: {
    color: "white"
  },
  inputs: {
    width: "100%",
    color: "white",
  },
  icon: {
    fontSize: "5rem",
  },
  title: {
    fontFamily: "HarlowSolid",
  },
  body: {
    fontFamily: "Futura",
  }
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
    <ThemeProvider theme={theme}>
    <div id="contact">
      <Typography variant="h2" className={classes.title}>Let's get to work</Typography>
      <br />
        <Typography variant="subtitle1" className={classes.body}>MitchelParkerNoble@gmail.com
      <br />
      or
      <br />
       contact me here:</Typography>

      <form onSubmit={sendEmail} className="the-form">
        <TextField
          type="text"
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          placeholder="Name"
          name="name"
          color="white"
          required
        />

        <TextField
          type="text"
            className={classes.inputs}
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          placeholder="Email"
          name="email"
          required
        />

        <TextField
          type="text"
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          placeholder="Subject"
          name="subject"
          required
        />

        <TextField
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          multiline
          rows={12}
          required
          placeholder="Your Message"
          name="message"
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
            className={classes.button}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          value="Send"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
    </ThemeProvider>
  );
}
