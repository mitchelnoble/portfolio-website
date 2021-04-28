import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonTitle: {
    fontSize: "4rem",
    background: "none",
    borderRadius: "0.7rem",
  }
});

export default function Skills() {
  const classes = useStyles();
  
  return (
    <div id="skills">
      <Button class={classes.buttonTitle}>SKILLS</Button>
      <Grid container justify="space-around">


      </Grid>
    </div>
  )
}
