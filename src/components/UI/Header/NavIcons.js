import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../utilities/Icon";
import classes from "./NavIcons.module.css";

const NavElements = ["icon-bookmark", "icon-chat", "icon-home"];

const NavIcons = () => {
  return (
    <div className={classes.features}>
      <Link to="bookmark" className={classes[`button-container`]}>
        <Icon name={NavElements[0]} />
        Bookmarks
      </Link>
      <Link to="help" className={classes[`button-container`]}>
        <Icon name={NavElements[1]} />
        Help
      </Link>
      <div className={classes[`button-container`]}>
        <Icon name={NavElements[2]} />
        Login or singup
      </div>
    </div>
  );
};

export default NavIcons;
