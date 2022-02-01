import NavigationBar from "./components/UI/Header/NavigationBar";
import styles from "./App.module.css";
import PageContent from "./components/UI/PageContent/PageContent";

function App() {
  return (
    <div classname={styles.cont}>
      <NavigationBar />
      <PageContent />
    </div>
  );
}

export default App;
