import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";
import '../../styles/components/Footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer-container">
      <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
      <FontAwesomeIcon className="github-icon" icon={faGithubSquare} />
      <FontAwesomeIcon className="email-icon" icon={faEnvelopeSquare} />
      </div>
      </>
  )
}
