import React from "react";
import "../../styles/screens/ProjectDetail.css";

export default function ProjectDetail() {
  return (
    <div className="projects-container">
      <div className="pppc-project">
        <img
          src="https://i.imgur.com/HYWVr6Ub.png"
          alt="play-price-pc-logo"
          className="pppc-logo"
        />
        <h1>Play Price PC</h1>
        <p>
          A web application built with solely HTML, CSS, and Javascript that
          highlights DOM manipulation and pulling data from third-party API's.
        </p>
      </div>

      <div className="ppp-project">
        <img
          src="https://i.imgur.com/f4hvHbpb.png"
          alt="practice-practice-practice-logo"
          className="ppp-logo"
        />
        <h1>Practice Practice Practice</h1>
        <p>
          A React-based productivity application that emphasizes CRUD
          functionality. The app allows you to set a simple day-to-day schedule for various topics of your choice.
        </p>
      </div>

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
          <h1>Get Lost</h1>
          <p>
            A full-stack retail web application with full CRUD functionality,
            authorization, and a shopping cart system using local storage.
            Deployed to Netlify and Heroku, and built with a team of 3 other
            individuals using the Github "Gitflow" model.
          </p>
        </div>
      </a>

      <a
        href="https://protozoa-records.netlify.app"
        target="blank"
        className="pr-link"
      >
      <div className="pr-project">
        <img
          src="https://i.imgur.com/HeqqlLfb.png"
          alt="protozoa-records-logo"
          className="pr-logo"
        />
        <h1>Protozoa Records</h1>
        <p>
          A full-stack, full CRUD web application developed with React client-side
          and Ruby on Rails server-side. Along with responsive styling, the site also features front-end and back-end Authentication. 
        </p>
        </div>
        </a>
    </div>
  );
}
