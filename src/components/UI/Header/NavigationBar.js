import NavIcons from "./NavIcons";
import styles from "./NavigationBar.module.css";
import logo from "./NavBar__icon.png";

const NavigationBar = () => {
  return (
    <div className={styles.bar}>
      <img src={logo} alt={`Hotel App`} className={styles.logo} />
      <NavIcons />
    </div>
  );
};

export default NavigationBar;
