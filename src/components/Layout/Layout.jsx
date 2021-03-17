import React from "react";
import '../../styles/components/Layout.css'
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-header">
      <Header />
      </div>
      <div className="layout-nav">
      <Nav />
      </div>
      <div className="layout-content">
        {props.children}
      </div>
      <div className="layout-footer">
      <Footer />
      </div>
    </div>
  );
}
