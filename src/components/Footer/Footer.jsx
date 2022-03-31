import styles from "./Footer.module.css";
import AegisTube from "../../assets/AegisTube.svg";

export default function () {
  return (
    <footer className={`p-y-2 ${styles.footer}`}>
      <div className="main-container">
        <div>
          <img src={AegisTube} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
