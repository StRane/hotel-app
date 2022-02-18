import styles from "./Description.module.css";
import { Icons } from "../../assets/SVG/Icons";

import user1 from "../../../img/user1.jpg";
import user2 from "../../../img/user2.jpg";
import user3 from "../../../img/user3.jpg";
import user4 from "../../../img/user4.jpg";

const Description = () => {
  return (
    <div className={styles.description}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Close to the beach
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Breakfast included
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Free airport shuffle
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Free wifi in all rooms
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Air conditioning and heating
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Pets allowed
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          We speak all languages
        </li>
        <li>
          <Icons name="chevron" width="2rem" height="2rem" fill="#eb2f64" />
          Perfect for families
        </li>
      </ul>
      <div className={styles.recommend}>
        <p>Lucy and 3 other friends recommend this hotel.</p>
        <img src={user1} alt="user-1" />
        <img src={user2} alt="user-2" />
        <img src={user3} alt="user-3" />
        <img src={user4} alt="user-4" className={styles.last} />
      </div>
    </div>
  );
};

export default Description;
