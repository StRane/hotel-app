import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.css";
import { Icons } from "../../assets/SVG/Icons";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <nav>
        <ul className={styles.ul}>
          <li>
            <NavLink
              to="hotel"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icons name="home" width="2rem" height="2rem" fill="#faf9f9" />
              <span className={styles.span}>Hotel</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="flight"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icons
                name="aircraft"
                width="2rem"
                height="2rem"
                fill="#faf9f9"
              />
              <span className={styles.span}>Flight</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cars"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icons name="key" width="2rem" height="2rem" fill="#faf9f9" />
              <span className={styles.span}>Cars</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tours"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              <Icons name="map" width="2rem" height="2rem" fill="#faf9f9" />
              <span className={styles.span}>Tours</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.legal}>© 2022 by Umut. All rights reserved</div>
    </div>
  );
};

export default SideBar;
