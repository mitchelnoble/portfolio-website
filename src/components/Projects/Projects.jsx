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

const useStyles = makeStyles((theme) => ({
  cardContent: {
    width: "100%",
    padding: 0,
  },
  button: {
    fontSize: "4rem",
    fontFamily: 'Montserrat',
    background: "linear-gradient(45deg, #303AA6 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    marginBottom: "1em",
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
      <br />
      <br />
      <Button class={classes.button}>PROJECTS</Button>
      <Grid container spacing={3} justify="center">
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
                    <Typography gutterBottom variant="h5" component="h2">
                      Play Price PC
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      gutterBottom
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
                    <Typography gutterBottom variant="h5" component="h2">
                      Get Lost
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
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
                    <Typography gutterBottom variant="h5" component="h2">
                      Protozoa Records
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
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
      </Grid>
      <br />
      <br />
    </div>
  );
};

export default Projects;
