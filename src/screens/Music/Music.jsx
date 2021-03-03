import React from 'react'
import ReactPlayer from "react-player"
import '../../styles/components/Music.css'

export default function Music() {
  return (
    <div className="music-container">
      <div className="producer-description">
        <h1 className="music-title">Music</h1>
        <h3 className="music-description">Under the moniker "Lucental", I have produced for a diverse variety of clients in LA, Chicago, and New York ranging from local artists to an off-broadway production.</h3>
        <ReactPlayer
          url="https://soundcloud.com/mitchelparkernoble/sets/for-games"
          className="soundcloud-react-player"
          width="100%"
        />
      <iframe title="My Spotify Player" src="https://open.spotify.com/embed/playlist/4nB2tGIoaXxRoNoqEdd4R5" width="100%" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  )
}
