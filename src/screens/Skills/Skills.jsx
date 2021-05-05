import React from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import "../../styles/screens/Skills.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  button: {
    fontSize: "4rem",
    fontFamily: 'Montserrat',
    background: "linear-gradient(45deg, #303AA6 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
  },
  icons: {
    margin: "0.2em",
  },
  body: {
    fontFamily: "Lato",
  },
});

export default function Skills() {
  const classes = useStyles();

  return (
    <div id="skills">
      <br />
      <br />
      <Button class={classes.button}>SKILLS</Button>
      <br />
      <br />
      <Grid container direction="column" justify="space-evenly">
        <Typography variant="h4" className={classes.body}>
          Languages & Frameworks
          <hr />
        </Typography>
        <br />
        <Hidden smDown>
          <GridList
            cellHeight={110}
            spacing={90}
            cols={3}
            className={classes.icons}
          >
            <i alt="html5" class="devicon-html5-plain-wordmark colored"></i>
            <i alt="css3" class="devicon-css3-plain-wordmark colored"></i>
            <i alt="javascript" class="devicon-javascript-plain colored"></i>
            <i alt="nodejs" class="devicon-nodejs-plain-wordmark colored"></i>
            <i
              alt="express"
              class="devicon-express-original-wordmark colored"
            ></i>
            <i alt="react" class="devicon-react-original-wordmark colored"></i>
            <i alt="ruby" class="devicon-ruby-plain-wordmark colored"></i>
            <i alt="rails" class="devicon-rails-plain-wordmark colored"></i>
            <i
              alt="postgresql"
              class="devicon-postgresql-plain-wordmark colored"
            ></i>
            <i alt="php" class="devicon-php-plain colored"></i>
            <i alt="material ui" class="devicon-materialui-plain colored"></i>
          </GridList>
          <Typography variant="h4" className={classes.body}>
            Tools
            <hr />
          </Typography>
          <GridList cellHeight={110} justify="centered" spacing={90} cols={3}>
            <i alt="photoshop" class="devicon-photoshop-plain colored"></i>
            <i
              alt="github"
              class="devicon-github-original-wordmark colored"
            ></i>
            <i alt="git" class="devicon-git-plain-wordmark colored"></i>
            <i alt="heroku" class="devicon-heroku-line-wordmark colored"></i>
            <i alt="mongodb" class="devicon-mongodb-plain-wordmark colored"></i>
            <a
              href="https://icon-library.net/icon/ableton-icon-10.html"
              alt="Ableton Live Icon"
              title="Ableton Icon #126747"
            >
              <img
                src="https://icon-library.net//images/ableton-icon/ableton-icon-10.jpg"
                alt="Ableton Live Icon"
                width="80"
              />
            </a>
          </GridList>
        </Hidden>
        <Hidden mdUp>
          <GridList
            cellHeight={110}
            spacing={90}
            cols={2}
            className={classes.icons}
          >
            <i alt="html5" class="devicon-html5-plain-wordmark colored"></i>
            <i alt="css3" class="devicon-css3-plain-wordmark colored"></i>
            <i alt="javascript" class="devicon-javascript-plain colored"></i>
            <i alt="nodejs" class="devicon-nodejs-plain-wordmark colored"></i>
            <i
              alt="express"
              class="devicon-express-original-wordmark colored"
            ></i>
            <i alt="react" class="devicon-react-original-wordmark colored"></i>
            <i alt="ruby" class="devicon-ruby-plain-wordmark colored"></i>
            <i alt="rails" class="devicon-rails-plain-wordmark colored"></i>
            <i
              alt="postgresql"
              class="devicon-postgresql-plain-wordmark colored"
            ></i>
            <i alt="php" class="devicon-php-plain colored"></i>
            <i alt="material ui" class="devicon-materialui-plain colored"></i>
          </GridList>
          <Typography variant="h4">
            Tools
            <hr />
          </Typography>
          <GridList cellHeight={110} justify="centered" spacing={90} cols={2}>
            <i alt="photoshop" class="devicon-photoshop-plain colored"></i>
            <i
              alt="github"
              class="devicon-github-original-wordmark colored"
            ></i>
            <i alt="git" class="devicon-git-plain-wordmark colored"></i>
            <i alt="heroku" class="devicon-heroku-line-wordmark colored"></i>
            <i alt="mongodb" class="devicon-mongodb-plain-wordmark colored"></i>
            <a
              href="https://icon-library.net/icon/ableton-icon-10.html"
              alt="Ableton Live Icon"
              title="Ableton Icon #126747"
            >
              <img
                src="https://icon-library.net//images/ableton-icon/ableton-icon-10.jpg"
                alt="Ableton Live Icon"
                width="80"
              />
            </a>
          </GridList>
        </Hidden>
      </Grid>
    </div>
  );
}
