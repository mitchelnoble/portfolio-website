import React from "react";
import "../../styles/screens/ProjectDetail.css";

export default function ProjectDetail() {
  return (
    <div className="projects-container">
      <a
        href="https://play-price-pc.netlify.app/"
        target="blank"
        className="pppc-link"
      >
        <div className="pppc-project">
          <img
            src="https://i.imgur.com/HYWVr6Ub.png"
            alt="play-price-pc-logo"
            className="pppc-logo"
          />
          <h1>Play Price PC</h1>A web application built with solely HTML, CSS,
          and Javascript that highlights DOM manipulation and pulling data from
          third-party API's.
        </div>
      </a>

      <a
        href="https://get-lost.netlify.app/"
        target="blank"
        className="gl-link"
      >
        <div className="gl-project">
          <img
            src="https://i.imgur.com/NTEnr4Yb.png"
            alt="get-lost-logo"
            className="get-lost-logo"
          />
          <h1>Get Lost</h1>A full-stack retail web application with full CRUD
          functionality, authorization, and a shopping cart system using local
          storage. Deployed to Netlify and Heroku, and built with a team of 3
          other individuals using the Github "Gitflow" model.
        </div>
      </a>

      <a
        href="https://protozoa-records.netlify.app"
        target="blank"
        className="pr-link"
      >
        <div className="pr-project">
          <img
            src="https://i.imgur.com/3JP4Dpdb.png"
            alt="protozoa-records-logo"
            className="pr-logo"
          />
          <h1>Protozoa Records</h1>A full-stack, full CRUD web application
          developed with React client-side and Ruby on Rails server-side. Along
          with responsive styling, the site also features front-end and back-end
          Authentication.
        </div>
      </a>
    </div>
  );
}
