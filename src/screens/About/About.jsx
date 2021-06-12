import React from "react";
import "../../styles/screens/About.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import SyncIcon from "@material-ui/icons/Sync";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  header: {
    margin: 0,
    padding: 0,
  },
  title: {
    fontFamily: "HarlowSolid",
    color: "white",
  },
  button: {
    fontSize: "4rem",
    fontFamily: "Montserrat",
    background: "linear-gradient(45deg, #303AA6 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    margin: "1em 0 0.4em",
  },
  body: {
    fontFamily: "Futura",
    color: "white",
    padding: "1em",
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div id="about">
            <Typography variant="h4" className={classes.title}>
              Here's a bit about me
              </Typography>
            <br /> <br />
              <Typography variant="h6" className={classes.body}>
                I am a professional musician and Software Engineer. Creative,
                sincere, and reliable, I channel the same passion that produces
                and performs music into programming full-stack applications.
              </Typography>
              <br />
              <br />
              <Typography variant="h6" className={classes.body}>
                <ListAltIcon fontSize="large" />
                <br />
                I'm a graduate from General Assembly's Software Engineering
                Immersive program with experience in the MERN technology stack.
              </Typography>
              <br />
              <br />
              <Typography variant="h6" className={classes.body}>
                <MusicVideoIcon fontSize="large" />
                <br />I have worked with local artists in New York, Chicago, and
                Los Angeles to: write, record, edit, and perform original music.
              </Typography>
    </div>
  );
}
