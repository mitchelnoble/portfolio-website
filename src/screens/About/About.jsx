import React from "react";
import "../../styles/screens/About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="title-container">
        <h2 className="about-me-title">About Me</h2>
      </div>

      <div className="text-container">
        <p className="about-me-text">
          I am a semi-professional musician and Software Engineer. Creative,
          sincere, and reliable, I channel the same passion that produces and
          performs music into programming full-stack applications. I seek the
          opportunity to join an innovative company to grow my skills as a
          Software Engineer.
        </p>
      </div>
      <h1 className="icon-title">Languages & Frameworks</h1>
      <br />
      <div className="icon-container">
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-nodejs-plain-wordmark colored"></i>
        <i class="devicon-express-original-wordmark colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-ruby-plain-wordmark colored"></i>
        <i class="devicon-rails-plain-wordmark colored"></i>
        <i class="devicon-postgresql-plain-wordmark colored"></i>
      </div>
    </div>
  );
}
