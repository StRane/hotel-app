import styles from "./Gallery.module.css";

import hotel from "../../../img/homeSlide-1.jpg";
import hotel2 from "../../../img/hotel-2.jpg";
import hotel3 from "../../../img/hotel-presidente-4s.jpg";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <figure className={styles.figure}>
        <img src={hotel} alt="hotel-1" className={styles.photo} />
      </figure>
      <figure className={styles.figure}>
        <img src={hotel2} alt="hotel-1" className={styles.photo} />
      </figure>
      <figure className={styles.figure}>
        <img src={hotel3} alt="hotel-1" className={styles.photo} />
      </figure>
    </div>
  );
};

export default Gallery;
