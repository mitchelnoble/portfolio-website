import React from "react";
// import "../../styles/screens/ProjectDetail.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

const ProjectDetail = () => {
  const classes = useStyles();

  return (
<>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Play Price PC gif"
        height="200"
        image="https://i.imgur.com/OGXrFcD.gif"
        title="Play Price PC"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Play Price PC
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        A web application built with solely
          HTML, CSS, and Javascript that highlights DOM manipulation and pulling
          data from third-party API's.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={() => { window.open("https://github.com/mitchelnoble/Play-Price-PC")}}>
        Github
      </Button>
          <Button size="small" color="primary" onClick={() => { window.open("https://play-price-pc.netlify.app/")}}>
        Live App
      </Button>
    </CardActions>
      </Card>
      
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Get Lost gif"
        height="200"
        image="https://i.imgur.com/sWQhG2f.gif"
        title="Get Lost"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Get Lost
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        A full-stack retail web application with full
          CRUD functionality, authorization, and a shopping cart system using
          local storage. Deployed to Netlify and Heroku, and built with a team
          of 3 other individuals using the Github "Gitflow" model.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={() => { window.open("https://github.com/enewton3/get-lost")}}>
        Github
      </Button>
          <Button size="small" color="primary" onClick={() => { window.open("https://get-lost.netlify.app/")}}>
        Live App
      </Button>
    </CardActions>
      </Card>
      
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Protozoa Records gif"
        height="200"
        image="https://i.imgur.com/RGIkLzn.gif"
        title="Get Lost"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Protozoa Records
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        A full-stack, full CRUD web
          application developed with React client-side and Ruby on Rails
          server-side. Along with responsive styling, the site also features
          front-end and back-end Authentication.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={() => { window.open("https://github.com/mitchelnoble/protozoa-records")}}>
        Github
      </Button>
          <Button size="small" color="primary" onClick={() => { window.open("https://protozoa-records.netlify.app")}}>
        Live App
      </Button>
    </CardActions>
  </Card>
    </>
  );
};

export default ProjectDetail;
