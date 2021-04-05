import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function About() {
  return (
    <>
      <Typography variant="h3">About Me</Typography>
      <Typography>
        I am a professional musician and Software Engineer. Creative, sincere,
        and reliable, I channel the same passion that produces and performs
        music into programming full-stack applications. I seek the opportunity
        to join an innovative company to grow my skills as a Software Engineer.
      </Typography>
      <Typography variant="h3">Languages & Frameworks</Typography>

      <Grid container direction="column">
        <Typography variant="h2">
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-javascript-plain colored"></i>
        </Typography>
      </Grid>

      <Grid container direction="column">
        <Typography variant="h2">
          <i class="devicon-nodejs-plain-wordmark colored"></i>
          <i class="devicon-express-original-wordmark colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
        </Typography>
      </Grid>

      <Grid container direction="column">
        <Typography variant="h2">
          <i class="devicon-ruby-plain-wordmark colored"></i>
          <i class="devicon-rails-plain-wordmark colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i>
        </Typography>
      </Grid>
    </>
  );
}
