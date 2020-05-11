import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import NewsIcon from "@material-ui/icons/AnnouncementOutlined";
import StatusIcon from "@material-ui/icons/Equalizer";
import SourceIcon from "@material-ui/icons/PermMediaOutlined";
import PredictIcon from "@material-ui/icons/ShowChart";
import DrawerIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/InfoOutlined";
const useStyles = makeStyles({
  list: {
    width: 250,
    height: window.innerHeight
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {" "}
      <footer>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#001F3A",
            marginTop: window.innerHeight * 0.9
          }}
        >
          <center>
            <a href="#" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>
                <b style={{ fontSize: 15 }}>Corona Care System </b>
                <l style={{ fontSize: 14 }}>Powered By AttainU </l>
              </p>
            </a>
          </center>
        </div>
      </footer>
      <h3
        style={{
          textAlign: "center",
          fontSize: 25
        }}
      >
        Covid Updates
      </h3>
      <Divider />
      <List>
        {["Home", "Updates",'Projection', "Sources", "About"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {
                  index===0?
                  <HomeIcon/>:
                  index===1?
                  <NewsIcon/>:
                  index===2?
                  <PredictIcon/>:
                  index===3?
                  <SourceIcon/>:
                  <InfoIcon/>
                }
              </ListItemIcon>
              <Link
                style={{ textDecoration: "none" }}
                to={
                  index===0?
                  '/':
                  index===1?
                  '/news':
                  index===2?
                  '/predict':
                  index===3?
                  '/source':
                  '/about'
                }
              >
                {" "}
                <ListItemText
                  style={{ color: "rgb(0, 31, 58)" }}
                  primary={text}
                />
              </Link>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <DrawerIcon
        onClick={toggleDrawer("left", true)}
        style={{
          color: "white",
          position: "absolute",
          marginTop: window.innerHeight * 0.044,
          marginLeft: window.innerWidth * 0.04,
          zIndex: 990
        }}
      />

      <Drawer
        style={{ height: 10 }}
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
