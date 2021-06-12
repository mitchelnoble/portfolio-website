import React from "react";
import "../../styles/screens/Landing.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";



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
      <Typography variant="h2" className={classes.title}>
        Need a Software Engineer?
        </Typography>
      <br />
        <Typography variant="h4" className={classes.body}>
          I'm Mitch, <br /> Let's make your next project awesome! 
        </Typography>
      <Button variant="outlined" className={classes.button}>
          See My Skills
        </Button>        
    </div>
  )
}
