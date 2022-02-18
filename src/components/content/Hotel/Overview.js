import styles from "./Overview.module.css";
import { Icons } from "../../assets/SVG/Icons";

const Overview = () => {
  return (
    <>
      <div className={styles.overw}>
        <h1>Hotel Las Parmas</h1>
        <div className={styles.stars}>
          <Icons name="star" width="1.75rem" className={styles.star} />
          <Icons name="star" width="1.75rem" className={styles.star} />
          <Icons name="star" width="1.75rem" className={styles.star} />
          <Icons name="star" width="1.75rem" className={styles.star} />
          <Icons name="star" width="1.75rem" className={styles.star} />
        </div>
        <div className={styles.location}>
          <Icons name="location" width="1.5rem" className={styles.star} />
          <p>Bangkok, Thailand</p>
        </div>
        <div className={styles.rating}>
          <div className={styles.rating__average}>8.6</div>
          <div className={styles.rating__count}>428 votes</div>
        </div>
      </div>
    </>
  );
};

export default Overview;
