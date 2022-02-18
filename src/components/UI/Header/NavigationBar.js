import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";
import logo from "./NavBar__icon.png";
import { Icons } from "../../assets/SVG/Icons";

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
              <Icons name="chat" width="3rem" height="3rem" />
              {/* Bookmarks */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="help"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icons name="help" width="3rem" height="3rem" />
              {/* Help */}
            </NavLink>
          </li>
          <li>
            <Icons name="user" width="3rem" height="3rem" />
            {/* Login or singup */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
