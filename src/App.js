import { Route, Routes } from "react-router-dom";

import NavigationBar from "./components/UI/Header/NavigationBar";
import styles from "./App.module.css";
import SideBar from "./components/UI/Sidebar/SiderBar";

//Pages import
import Flight from "./components/pages/Flight";
import Cars from "./components/pages/Car-rental";
import Tours from "./components/pages/Tours";
import Hotel from "./components/pages/Hotel";
import Bookmark from "./components/pages/Bookmarks";
import Help from "./components/pages/Help";

function App() {
  return (
    <>
      <NavigationBar />
      <div className={styles.pagecont}>
        <SideBar />
        <Routes className={styles.mf}>
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="help" element={<Help />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="flight" element={<Flight />} />
          <Route path="cars" element={<Cars />} />
          <Route path="tours" element={<Tours />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
