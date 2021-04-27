import React from "react";
import '../../styles/screens/About.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {   
    margin: 0,
    padding: 0,
  },
  card: {
    margin: 0,
    border: "thin solid black",
    fontSize: "5em",
  },
  background: {
    height: 1000,
    width: 1000,
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div id="about">
      <Container maxWidth='xl' maxHeight='xl' class={classes.header}>
        <Card>
          <CardMedia
            image="https://i.imgur.com/iC9isWx.png">
            
            <br /> <br />
            <Typography variant="h2">MITCHEL NOBLE</Typography>
               <br />
      <Typography variant="h3">SOFTWARE ENGINEER & MUSIC PRODUCER</Typography>
            <br /> <br />
            <Container>
            <Typography variant="h5">
                I am a professional musician and Software Engineer. Creative, sincere,
                and reliable, I channel the same passion that produces and performs
                music into programming full-stack applications.
        <br />
        <br />
        I have worked with local artists in New York, Chicago, and Los Angeles to: write, record, edit, and perform original music. 
        <br />
        <br />
        I am a graduate from General Assembly's Software Engineering Immersive program with experience in the MERN technology stack.
        <br />
        <br />
      </Typography>
            </Container>
            </CardMedia>
      </Card>
        </Container>
    </div>
  );
}
