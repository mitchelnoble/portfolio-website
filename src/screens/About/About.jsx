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

const useStyles = makeStyles({
  header: {
    margin: 0,
    padding: 0,
  },
  button: {
    fontSize: "4rem",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div id="about">
      <Container maxWidth="xl" maxHeight="xl" class={classes.header}>
        <Card>
          <CardMedia image="https://i.imgur.com/iC9isWx.png">
            <br /> <br />
            <Button variant="outlined" size="large" class={classes.button}>
              MITCHEL NOBLE
            </Button>
            <br /> <br />
            <Typography variant="h3">
              SOFTWARE ENGINEER & MUSIC PRODUCER
            </Typography>
            <br /> <br />
            <Container>
              <Typography variant="h4">
                I am a professional musician and Software Engineer. Creative,
                sincere, and reliable, I channel the same passion that produces
                and performs music into programming full-stack applications.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">
                <ListAltIcon fontSize="large" />
                <br />
                I'm a graduate from General Assembly's Software Engineering
                Immersive program with experience in the MERN technology stack.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">
                <MusicVideoIcon fontSize="large" />
                <br />I have worked with local artists in New York, Chicago, and
                Los Angeles to: write, record, edit, and perform original music.
              </Typography>
              <br />
              <br />
            </Container>
          </CardMedia>
        </Card>
      </Container>
    </div>
  );
}
