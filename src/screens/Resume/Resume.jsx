import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minHeight: 425,
    maxHeight: 425,
    maxWidth: 350,
  },
});

export default function Resume() {
  const classes = useStyles();

  return (
    <div id="resume">
        {/* <a
          href="https://www.docdroid.net/oPbR6eh/mitchel-noble-resume-pdf"
          target="blank"
        >
          <img
            src="https://i.imgur.com/0zAw2yq.png"
            alt="Mitchel Noble Resume"
            className="resume-image"
          ></img>
        </a> */}
    </div>
  );
}
