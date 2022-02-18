import Description from "./Description";
import UserReviews from "./UserReviews";

import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={styles.detail}>
      <Description />
      <UserReviews />
    </div>
  );
};

export default Detail;
