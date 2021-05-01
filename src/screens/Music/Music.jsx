import React from 'react'
import ReactPlayer from "react-player"
import '../../styles/components/Music.css';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  button: {
    fontSize: "4rem",
    background: "none",
    borderRadius: "0.7rem",
  },
});

export default function Music() {
  const classes = useStyles();
  return (
    <div className="music-container" id="music">
        <br /> <br />
        <Button variant="outlined" size="large" class={classes.button} >MUSIC</Button>
        <br /> 
        <br /> 
        <Typography variant='h5'>Under the moniker "Lucental", I have produced original music for a diverse variety of clients in LA, Chicago, and New York ranging from local artists to off-broadway productions.</Typography>
        <br />
        <ReactPlayer
          url="https://soundcloud.com/mitchelparkernoble/sets/for-games"
          className="soundcloud-react-player"
          width="100%"
        />
        <br />
      <iframe title="My Spotify Player" src="https://open.spotify.com/embed/playlist/4nB2tGIoaXxRoNoqEdd4R5" width="100%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
  )
}
