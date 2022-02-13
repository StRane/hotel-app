import { Link } from "react-router-dom";

import styles from "./SideBar.module.css";
import { Icons } from "../../assets/SVG/Icons";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link to="hotel" className={styles.link}>
              <Icons name="home" width="2rem" height="2rem" />
              <span>Hotel</span>
            </Link>
          </li>
          <li>
            <Link to="flight" className={styles.link}>
              <Icons name="aircraft" width="2rem" height="2rem" />
              Flight
            </Link>
          </li>
          <li>
            <Link to="cars" className={styles.link}>
              <Icons name="key" width="2rem" height="2rem" />
              Cars
            </Link>
          </li>
          <li>
            <Link to="tours" className={styles.link}>
              <Icons name="map" width="2rem" height="2rem" />
              Tours
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.legal}>© 2022 by Umut. All rights reserved</div>
    </div>
  );
};

export default SideBar;
