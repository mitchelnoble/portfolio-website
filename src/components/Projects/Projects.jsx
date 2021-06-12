import React from "react";
import "../../styles/screens/Projects.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "HarlowSolid",
  },
  link: {
    fontFamily: "Futura",
    color: "black",
  },
  cardContent: {
    padding: 0,
  },
  button: {
    fontSize: "1.4rem",
    fontFamily: "Futura",
    background: "#117F76",
    border: 0,
    borderRadius: 5,
    color: "white",
    marginTop: "1em",
  },
  accordion: {
    justifyContent: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div id="projects">
      <Grid container spacing={6} justify="center">
        <Grid item xs={10} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Play Price PC gif"
                height="200"
                image="https://i.imgur.com/OGXrFcD.gif"
                title="Play Price PC"
              />
              <CardContent className={classes.cardContent}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.root}>
                      Play Price PC
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      gutterBottom
                      className={classes.link}
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Built with solely HTML, CSS, and Javascript that
                      highlights DOM manipulation and pulling data from
                      third-party API's.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="space-around">
                <Button
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://github.com/mitchelnoble/Play-Price-PC"
                    );
                  }}
                >
                  Github
                </Button>
                <Button
                  variant="outlined"
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://play-price-pc.netlify.app/");
                  }}
                >
                  Live App
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={10} md={3} direction="column" justify="space-between">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Get Lost gif"
                height="200"
                image="https://i.imgur.com/sWQhG2f.gif"
                title="Get Lost"
              />
              <CardContent className={classes.cardContent}>
                <Accordion>
                  <AccordionSummary
                    className={classes.accordion}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography gutterBottom variant="h5" component="h2" className={classes.root}>
                      Get Lost
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className={classes.link}
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      Full CRUD, authorization, and a shopping cart system using
                      local storage. Built with a team of 3 other individuals
                      using the Github "Gitflow" model.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="space-around">
                <Button
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://github.com/enewton3/get-lost"
                    );
                  }}
                >
                  Github
                </Button>
                <Button
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://get-lost.netlify.app/");
                  }}
                >
                  Live App
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={10} md={3} justify="space-around">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Protozoa Records gif"
                height="200"
                image="https://i.imgur.com/RGIkLzn.gif"
                title="Get Lost"
              />
              <CardContent className={classes.cardContent}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.root}>
                      Protozoa Records
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className={classes.link}
                      gutterBottom
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      Full CRUD web application built using React on Rails with
                      client-side and server-side Authentication.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="space-around">
                <Button
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://github.com/mitchelnoble/protozoa-records"
                    );
                  }}
                >
                  Github
                </Button>
                <Button
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://protozoa-records.netlify.app");
                  }}
                >
                  Live App
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography nogutter variant="h4" className={classes.root}>
            Ready to get to work?
          </Typography>
        <Link to="contact" smooth={true} duration={500} offset={-73}>
          <Button variant="outlined" className={classes.button}>
              Contact Me Here
      </Button>
            </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
