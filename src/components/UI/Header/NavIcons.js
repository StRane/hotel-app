import React from "react";

import Icon from "../../utilities/Icon";
import classes from "./NavIcons.module.css";

const NavElements = ["icon-bookmark", "icon-chat", "icon-home"];

const NavIcons = () => {
  return (
    <div className={classes.features}>
      <div className={classes[`button-container`]}>
        <Icon name={NavElements[0]} />
        Bookmarks
      </div>
      <div className={classes[`button-container`]}>
        <Icon name={NavElements[1]} />
        Help
      </div>
      <div className={classes[`button-container`]}>
        <Icon name={NavElements[2]} />
        Login or singup
      </div>
    </div>
  );
};

export default NavIcons;
