import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default function Resume() {
  return (
    <div id="resume">
      <Box>
      <Paper>
        <a
          href="https://www.docdroid.net/oPbR6eh/mitchel-noble-resume-pdf"
          target="blank"
        >
          <img
            src="https://i.imgur.com/0zAw2yq.png"
            alt="Mitchel Noble Resume"
            className="resume-image"
          ></img>
        </a>
      </Paper>
      </Box>
    </div>
  );
}
