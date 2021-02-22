import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="about-link">
        A B O U T{" "}
      </Link>
      <Link to="/ProjectDetail" className="projects-link">
        P R O J E C T S{" "}
      </Link>
      <Link to="/Resume" className="resume-link">
        R E S U M E{" "}
      </Link>
      <Link to="/Contact" className="contact-link">
        C O N T A C T{" "}
      </Link>
    </div>
  );
}
