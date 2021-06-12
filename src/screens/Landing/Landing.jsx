import React from "react";
import "../../styles/screens/Landing.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  button: {
    fontSize: "1.5rem",
    fontFamily: "Futura",
    background: "#117F76",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    margin: "1em 0 0",
  },
  title: {
    fontFamily: "HarlowSolid",
  },
  body: {
    fontFamily: "Futura",
  },
});

export default function Landing() {
  const classes = useStyles();

  return (
    <div id="landing">
      <Typography variant="h1" className={classes.title}>
        Looking for a Software Engineer?
        </Typography>
        <Typography variant="h3" className={classes.body}>
          Let's make your next project awesome! 
        </Typography>
      <Button className={classes.button}>
          See My Skills
        </Button>        
    </div>
  )
}
