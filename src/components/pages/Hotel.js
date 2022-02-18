import styles from "./Hotel.module.css";

import Gallery from "../content/Hotel/Gallery";
import Overview from "../content/Hotel/Overview";
import Detail from "../content/Hotel/Detail";

const Hotel = () => {
  return (
    <div className={styles.hotel}>
      <Gallery />
      <Overview />
      <Detail />
    </div>
  );
};

export default Hotel;
