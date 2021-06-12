import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../styles/screens/Skills.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
  body: {
    marginTop: '1em',
    fontFamily: "Futura",
  },
});

export default function Skills() {
  const classes = useStyles();

  return (
    <div id="skills">
      <Grid container direction="row" justify="center" spacing={9}>
        <Grid item xs={12} md={3}>
          <i alt="html5" class="devicon-html5-plain-wordmark colored"></i>
          <i alt="css3" class="devicon-css3-plain-wordmark colored"></i>
          <i alt="javascript" class="devicon-javascript-plain colored"></i>
          <br />
          <i alt="react" class="devicon-react-original-wordmark colored"></i>
          <i alt="material ui" class="devicon-materialui-plain colored"></i>
          <Typography variant="subtitle1" className={classes.body}>
            HTML, CSS, and Javascript comprise the foundation of my programming
            knowledge. Brought together using the React.js framework and
            Material UI library, I am able to create a scalable, responsive
            front-end for applications.
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <i alt="nodejs" class="devicon-nodejs-plain-wordmark colored"></i>
          <i
            alt="express"
            class="devicon-express-original-wordmark"
          ></i>
          <i alt="mongodb" class="devicon-mongodb-plain-wordmark colored"></i>
          <br />
          <i alt="ruby" class="devicon-ruby-plain-wordmark colored"></i>
          <i alt="rails" class="devicon-rails-plain-wordmark colored"></i>
          <i
            alt="postgresql"
            class="devicon-postgresql-plain-wordmark colored"
          ></i>
          <Typography variant="subtitle1" className={classes.body}>
            Utilizing node.js and the Express framework, I have built RESTful
            NoSQL back-ends within the MongoDB database. My experience also
            extends to Ruby on Rails and PostgreSQL honing the MVC framework for
            database creation and control.
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <i alt="github" class="devicon-github-original"></i>
          <i alt="git" class="devicon-git-plain-wordmark colored"></i>
          <br />
          <i alt="heroku" class="devicon-heroku-line-wordmark colored"></i>
          <Grid item>
            <Typography variant="subtitle1" className={classes.body}>
              For version control and team collaboration, I have utilized the
              Github platform and Git in the console. All of my projects here
              have been deployed on Heroku and/or Netlify.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button}>
        See My Projects
      </Button>
        </Grid>
      </Grid>
    </div>
  );
}
