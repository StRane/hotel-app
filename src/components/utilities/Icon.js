import icons from "../assets/SVG/sprite.svg";
import styles from "./Icon.module.css";

const Icon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={styles.icon}
    >
      <use xlinkHref={`${icons}#${props.name}`} />
    </svg>
  );
};

export default Icon;
