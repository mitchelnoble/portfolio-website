import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <i class="devicon-html5-plain-wordmark colored"></i>
            </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><i class="devicon-css3-plain-wordmark colored"></i></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><i class="devicon-javascript-plain colored"></i></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><i class="devicon-nodejs-plain-wordmark colored"></i></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction="column" justify="center" alignItems="center">
        <FormRow>
        <Grid container item xs={12} spacing={3}>
          <Paper className={classes.paper}>
            <i class="devicon-css3-plain-wordmark colored" />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper>
            <i class="devicon-javascript-plain colored" />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper>
            <i class="devicon-nodejs-plain-wordmark colored" />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper>
            <i class="devicon-nodejs-plain-wordmark colored" />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper>
            <i class="devicon-express-original-wordmark colored" />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper></Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper></Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper></Paper>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Paper></Paper>
        </Grid>
        </FormRow>
      </Grid>
    </div>
  );
}
// export default function About() {
//   return (
//     <div className="about-container">
//       <div className="title-container">
//         <h2 className="about-me-title">About Me</h2>
//       </div>

//       <div className="text-container">
//         <p className="about-me-text">
//           I am a professional musician and Software Engineer. Creative,
//           sincere, and reliable, I channel the same passion that produces and
//           performs music into programming full-stack applications. I seek the
//           opportunity to join an innovative company to grow my skills as a
//           Software Engineer.
//         </p>
//       </div>
//       <h1 className="icon-title">Languages & Frameworks</h1>
//       <br />
//       <div className="icon-container">
//         <i class="devicon-html5-plain-wordmark colored"></i>
//         <i class="devicon-css3-plain-wordmark colored"></i>
//         <i class="devicon-javascript-plain colored"></i>
//         <i class="devicon-nodejs-plain-wordmark colored"></i>
//         <i class="devicon-express-original-wordmark colored"></i>
//         <i class="devicon-react-original-wordmark colored"></i>
//         <i class="devicon-ruby-plain-wordmark colored"></i>
//         <i class="devicon-rails-plain-wordmark colored"></i>
//         <i class="devicon-postgresql-plain-wordmark colored"></i>
//       </div>
//     </div>
//   );
// }
