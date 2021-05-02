import React from "react";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import WorkIcon from "@material-ui/icons/Work";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  button: {
    color: "lightgrey",
  }
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <Grid container>
        <AppBar>
          <Toolbar>
            <Grid item xs={2} md={2}>
              <Typography variant="h6">Mitchel Noble</Typography>
            </Grid>
            <Grid item xs={5}>
            <IconButton className={classes.button} color="default" onClick={() => { window.open("https://play-price-pc.netlify.app/") }}>
        <GitHubIcon />
      </IconButton>
      <IconButton className={classes.button} color="default" onClick={() => { window.open("https://play-price-pc.netlify.app/") }}>
        <LinkedInIcon />
      </IconButton>
          <Button className={classes.button} color="default" onClick={() => { window.open("https://docdro.id/oPbR6eh") }}>Resume</Button>
            </Grid>
            <Grid container xs={5} md={8} justify="flex-end">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="standard"
                indicatorColor="white"
                textColor="white"
                aria-label="icon label tabs example"
              >
                <Link to="about" smooth={true} duration={500} offset={-80}>
                  <Tab icon={<PersonIcon />} label="ABOUT" />
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                  <Tab icon={<FileCopyIcon />} label="SKILLS" />
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                  <Tab icon={<WorkIcon />} label="PROJECTS" />
                </Link>
                <Link to="music" smooth={true} duration={500}>
                  <Tab icon={<AudiotrackIcon />} label="MUSIC" />
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <Tab icon={<MailIcon />} label="CONTACT" />
                </Link>
              </Tabs>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
