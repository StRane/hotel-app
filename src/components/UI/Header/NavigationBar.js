import { NavLink } from "react-router-dom";

import Icon from "../../utilities/Icon";
import styles from "./NavigationBar.module.css";
import logo from "./NavBar__icon.png";

const NavElements = ["icon-bookmark", "icon-chat", "icon-home"];

const NavigationBar = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt={`Hotel App`} className={styles.logo} />
      <nav>
        <ul>
          <li>
            <NavLink
              to="bookmark"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icon name={NavElements[0]} />
              Bookmarks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="help"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icon name={NavElements[1]} />
              Help
            </NavLink>
          </li>
          <li>
            <Icon name={NavElements[2]} />
            Login or singup
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
