import user5 from "../../../img/user5.jpg";
import user6 from "../../../img/user6.jpg";

import styles from "./UserReviews.module.css";

const UserReviews = () => {
  return (
    <div className={styles.ureviews}>
      <figure>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi, totam, itaque officia ex.
        </p>
        <figcaption>
          <img src={user5} alt="user5" />
          <div className={styles.userbox}>
            <p>Nick Smith</p>
            <div className={styles.udate}>
              <p>Feb 23rd, 2021</p>
            </div>
          </div>
          <div className={styles.review}>7.8</div>
        </figcaption>
      </figure>
      <figure>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi.
        </p>
        <figcaption>
          <img src={user6} alt="user6" />
          <div className={styles.userbox}>
            <p>Mary Thomas</p>
            <div className={styles.udate}>
              <p>Sep 13rd, 2021</p>
            </div>
          </div>
          <div className={styles.review}>9.3</div>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserReviews;
