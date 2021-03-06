import React from "react";
import classes from "./Toolbar.Module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div onClick={props.sideDrawerToggleAction} className={classes.Hamburger}>
      <div className={classes.HamburgerLine} />
      <div className={classes.HamburgerLine} />
      <div className={classes.HamburgerLine} />
    </div>
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
