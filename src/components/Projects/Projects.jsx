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
    borderColor: "#FFFFFF",
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

        {/*Infinitone.com*/}

        <Grid item xs={10} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Infinitone.com Home Page Photo"
                height="200"
                image="https://i.imgur.com/alfV2Fc.png"
                title="Infinitone.com"
              />
              <CardContent className={classes.cardContent}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.root}
                    >
                      Infinitone.com
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
                      My client's React-based website for music software. It uses SaSS CSS and is deployed on the Vercel platform.
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
                      "https://github.com/infinitone-admin/infinitone-com"
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
                    window.open("https://www.infinitone.com");
                  }}
                >
                  Website
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>


        {/*AsianRooted.com*/}

        <Grid item xs={10} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="AsianRooted.com Home Page Photo"
                height="200"
                image="https://i.imgur.com/mqtTI3n.png"
                title="AsianRooted.com"
              />
              <CardContent className={classes.cardContent}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.root}
                    >
                      AsianRooted.com
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
                      My client's Wordpress blogging website. Built in a team, this customized Wordpress theme focuses on SEO management. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="space-around">
                
                <Button
                  variant="outlined"
                  className={classes.link}
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open("https://www.asianrooted.com");
                  }}
                >
                  Website
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>

        {/*Esunarosehealwell.com*/}

        <Grid item xs={10} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Esunarosehealwell.com Home Page Photo"
                height="200"
                image="https://i.imgur.com/7vCQO4T.png"
                title="Esunarosehealwell.com"
              />
              <CardContent className={classes.cardContent}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.root}
                    >
                      Esunarosehealwell.com
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
                      My client's single-page website built with HTML, CSS, and Javascript. Deployed on the Vercel platform. 
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
                      "https://github.com/mitchelnoble/esunarosehealwell"
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
                    window.open("https://www.esunarosehealwell.com");
                  }}
                >
                  Website
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>


        <div id="cta">
          <Typography nogutter variant="h4" className={classes.root}>
            Ready to get to work?
        </Typography>

          <Link to="contact" smooth={true} duration={500} offset={-73}>
            <Button variant="outlined" className={classes.button}>
              Contact Me Here
            </Button>
          </Link>
          </div>

      </Grid>
    </div>
  );
};

export default Projects;
