import React from "react";
import "../../styles/screens/About.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import SyncIcon from "@material-ui/icons/Sync";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  header: {
    margin: 0,
    padding: 0,
  },
  icon: {
    fontSize: "2rem",
    color: "white",
  },
  button: {
    fontSize: "4rem",
    fontFamily: "Montserrat",
    background: "linear-gradient(45deg, #303AA6 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "0 30px",
    margin: "1em 0 0.4em",
  },
  body: {
    fontFamily: "Lato",
    color: "white",
    fontWeight: "bold"
  },
});

export default function Intro() {
  const classes = useStyles();

  return (
    <>
      
      </>
  );
}