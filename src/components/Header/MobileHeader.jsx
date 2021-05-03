import React, {useState} from "react";
import MenuIcon from "@material-ui/core/Menu"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-scroll";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import WorkIcon from "@material-ui/icons/Work";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Drawer open={isDrawerOpen} onClose={() => setDrawerOpen(!isDrawerOpen)}>
        <List style={{ width: 250 }}>
          {["About", "Skills", "Projects", "Music", "Contact"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
                </ListItem>
          )
          )}
        </List>
        </Drawer>
      <AppBar style={{ padding: "8px 5px" }} position="fixed">
        <IconButton
          style={{ marginRight: "auto" }}
          color="secondary"
          aria-label="open drawer"
          edge="start"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
          </IconButton>
      </AppBar>
      </>
  );
};

export default Header;