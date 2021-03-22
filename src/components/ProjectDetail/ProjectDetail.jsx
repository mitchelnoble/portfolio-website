import React from "react";
import "../../styles/screens/ProjectDetail.css";

const ProjectDetail = () => {
  return (
    <div className="projects-container">
      <h1 className="project-title">My Projects</h1>

      <div className="background-1">
        <img
          src="https://i.imgur.com/OGXrFcD.gif"
          alt="Play Price PC gif"
          className="PPPC-gif"
        />
      </div>
      <div className="pppc-description-container">
        <p className="pppc-description">
          <h3>Play Price PC</h3> <hr /> A web application built with solely
          HTML, CSS, and Javascript that highlights DOM manipulation and pulling
          data from third-party API's. <br /> <br /> <br /> Click{" "}
          <a href="https://play-price-pc.netlify.app/" target="blank">
            here
          </a>{" "}
          or the button below for the live application:
        </p>
      </div>

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
          <h1 className="pppc-title">P l a y P r i c e P C</h1>
        </div>
      </a>

      <div className="background-2">
        <img
          src="https://i.imgur.com/sWQhG2f.gif"
          alt="Get Lost gif"
          className="GL-gif"
        />
      </div>

      <div className="gl-description-container">
        <p className="gl-description">
          <h3>Get Lost</h3> <hr /> A full-stack retail web application with full
          CRUD functionality, authorization, and a shopping cart system using
          local storage. Deployed to Netlify and Heroku, and built with a team
          of 3 other individuals using the Github "Gitflow" model.
          <br /> <br /> Click{" "}
          <a href="https://get-lost.netlify.app/" target="blank">
            here
          </a>{" "}
          or the button below for the live application:
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
            className="gl-logo"
          />
          <h1 className="gl-title">G e t L o s t</h1>
        </div>
      </a>

      <div className="background-3">
        <img
          src="https://i.imgur.com/RGIkLzn.gif"
          alt="Protozoa Records gif"
          className="PR-gif"
        />
      </div>

      <div className="pr-description-container">
        <p className="pr-description">
          <h3>Protozoa Records</h3> <hr />A full-stack, full CRUD web
          application developed with React client-side and Ruby on Rails
          server-side. Along with responsive styling, the site also features
          front-end and back-end Authentication.
          <br /> <br /> Click{" "}
          <a href="https://protozoa-records.netlify.app" target="blank">
            here
          </a>{" "}
          or the button below for the live application:
        </p>
      </div>

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
          <h1 className="pr-title" alt="Protozoa Records">
            P r o t o z o a R e c o r d s
          </h1>
        </div>
      </a>
    </div>
  );
};

export default ProjectDetail;
