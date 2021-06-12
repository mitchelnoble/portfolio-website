import React from 'react';
import clsx from 'clsx';
import { Link } from "react-scroll";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import WorkIcon from "@material-ui/icons/Work";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachFileIcon from '@material-ui/icons/AttachFile';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  bar: {
    background: 'linear-gradient(to right, #7F1720 20%, #262034 80%)',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Harlow',
    display: 'flex',
    padding: '5px',
    height: '1em',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  body: {
    fontFamily: 'Lato',
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.bar}>
          <Typography variant="h4" noWrap className={classes.title}>
            Mitchel Noble 
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="about" smooth={true} duration={500} offset={-80}>
          <ListItem button key={'About'}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary={'About'} />
          </ListItem>
          </Link>

          <Link to="skills" smooth={true} duration={500} offset={-73}>
          <ListItem button key={'Skills'}>
            <ListItemIcon><FileCopyIcon /></ListItemIcon>
            <ListItemText primary={'Skills'} />
          </ListItem>
          </Link>
          
          <Link to="projects" smooth={true} duration={500} offset={-70}>
          <ListItem button key={'Projects'}>
            <ListItemIcon><WorkIcon /></ListItemIcon>
            <ListItemText primary={'Projects'} />
          </ListItem>
          </Link>

          <Link to="music" smooth={true} duration={500} offset={-70}>
          <ListItem button key={'Music'}>
            <ListItemIcon><AudiotrackIcon /></ListItemIcon>
            <ListItemText primary={'Music'} />
          </ListItem>
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-80}>
          <ListItem button key={'Contact'}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItem>
          </Link>  
        </List>
        <Divider />
        <List>

            <ListItem button key={'Github'} onClick={() => {
                    window.open("https://github.com/mitchelnoble");
                  }}>
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText primary={'Github'} />
          </ListItem>
            <ListItem button key={'LinkedIn'} onClick={() => {
                    window.open("https://www.linkedin.com/in/mitchel-noble/");
                  }}>
            <ListItemIcon><LinkedInIcon /></ListItemIcon>
            <ListItemText primary={'LinkedIn'} />
          </ListItem>
            <ListItem button key={'Resume'} onClick={() => {
                    window.open("https://drive.google.com/file/d/0B6heteq-4PWfcjRCMUQ5SzZPMm9sS1Q5U0xweDQ1YjFwLXp3/view?usp=sharing");
                  }}>
            <ListItemIcon><AttachFileIcon /></ListItemIcon>
            <ListItemText primary={'Resume'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}