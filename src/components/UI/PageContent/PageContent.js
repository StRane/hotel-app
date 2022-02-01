import SideBar from "./Sidebar/SiderBar";
import HotelView from "./HotelView/HotelView";
import styles from "./PageContent.module.css";

const PageContent = () => {
  return (
    <div className={styles.pcontent}>
      <SideBar />
      <HotelView />
    </div>
  );
};

export default PageContent;
