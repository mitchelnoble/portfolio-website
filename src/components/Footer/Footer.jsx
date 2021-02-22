import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css'

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/mitchel-noble/" className="linkedin-icon-link" target="blank">
        <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
        </a>
        <a href="https://github.com/mitchelnoble" className="github-icon-link" target="blank">
        <FontAwesomeIcon className="github-icon" icon={faGithubSquare} />
        </a>
        <Link to="/Contact" className="email-icon-link">
      <FontAwesomeIcon className="email-icon" icon={faEnvelopeSquare} />
        </Link>
        <Link to="/" className="footer-logo-link">
        <div className="footer-logo" ><p>
        M I T C H E L <br /> N O B L E</p></div>
        </Link>
        <div className="email-and-developed-by">Email: MitchelParkerNoble@gmail.com</div>
      </div>
      </>
  )
}
