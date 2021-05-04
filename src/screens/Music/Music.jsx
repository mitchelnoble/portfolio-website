import React from "react";
import ReactPlayer from "react-player";
import "../../styles/components/Music.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  button: {
    fontSize: "4rem",
    background: "linear-gradient(45deg, #303AA6 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    marginBottom: "0.5em",
  },
  player: {
    height: "50em",
  },
});

export default function Music() {
  const classes = useStyles();
  return (
    <div className="music-container" id="music">
      <br /> <br />
      <Button variant="outlined" size="large" class={classes.button}>
        MUSIC
      </Button>
      <Typography variant="h5">
        Under the moniker "Lucental", I have produced original music for a
        diverse variety of clients in LA, Chicago, and New York ranging from
        local artists to off-broadway productions.
      </Typography>
      <hr />
      <br />
      <Grid container direction="row" justify="space-evenly">
        <Grid xs={12} sm={5}>
          <Paper>
            <ReactPlayer
              url="https://soundcloud.com/mitchelparkernoble/sets/for-games"
              className="soundcloud-react-player"
              width="100%"
            />
          </Paper>
          <br />
          <Typography variant="h6" paragraph={true}>
            Various background instrumentals for a discord role-playing game.
          </Typography>
        </Grid>
        <Grid xs={12} sm={5}>
          <Paper>
            <ReactPlayer
              url="https://soundcloud.com/mitchelparkernoble/sets/rebirth-of-rabbits-foot"
              className="soundcloud-react-player"
              width="100%"
            />
          </Paper>
          <br />
          <Typography variant="h6" paragraph={true}>
            A collection of instrumentals created for the online/off-broadway
            show "Rebirth of Rabbits Foot".
          </Typography>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
