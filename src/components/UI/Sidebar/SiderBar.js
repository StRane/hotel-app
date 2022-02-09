import { Link } from "react-router-dom";

import styles from "./SideBar.module.css";
import Icon from "../../utilities/Icon";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link to="hotel" className={styles.link}>
              <Icon name="hotel" />
              <span>Hotel</span>
            </Link>
          </li>
          <li>
            <Link to="flight" className={styles.link}>
              <Icon name="hotel" />
              Flight
            </Link>
          </li>
          <li>
            <Link to="cars" className={styles.link}>
              <Icon name="hotel" />
              Cars
            </Link>
          </li>
          <li>
            <Link to="tours" className={styles.link}>
              <Icon name="hotel" />
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
