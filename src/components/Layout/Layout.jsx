import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
