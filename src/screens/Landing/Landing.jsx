import React from "react";
import "../../styles/screens/Landing.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";


const useStyles = makeStyles({
  button: {
    fontSize: "1.4rem",
    fontFamily: "Futura",
    background: "#117F76",
    borderColor: "#FFFFFF",
    borderRadius: 5,
    color: "white",
    marginTop: "1.5em",
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
        Mitchel Noble
        </Typography>
      <br />
        <Typography variant="h5" className={classes.body}>
          Software Engineer & Web Developer 
        </Typography>
      <br />
        <Typography variant="h5" className={classes.body}>
          Making your next project awesome! 
        </Typography>
        <Link to="skills" smooth={true} duration={500} offset={-73}>
      <Button variant="outlined" className={classes.button}>
          See My Skills
        </Button>        
      </Link>
    </div>
  )
}
