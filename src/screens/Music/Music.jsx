import React from 'react'
import ReactPlayer from "react-player"
import '../../styles/components/Music.css'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function Music() {
  return (
    <div className="music-container" id="music">
      <Paper elevation={5}>
        <br /> <br />
        <Typography variant='h3'>MUSIC</Typography>
        <br /> 
        <Typography variant='subtitle1'>Under the moniker "Lucental", I have produced original music for a diverse variety of clients in LA, Chicago, and New York ranging from local artists to an off-broadway production.</Typography>
        <br />
        <ReactPlayer
          url="https://soundcloud.com/mitchelparkernoble/sets/for-games"
          className="soundcloud-react-player"
          width="100%"
        />
        <br />
      <iframe title="My Spotify Player" src="https://open.spotify.com/embed/playlist/4nB2tGIoaXxRoNoqEdd4R5" width="100%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Paper>
      </div>
  )
}
