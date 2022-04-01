import styles from "./Footer.module.css";
import AegisTube from "../../assets/AegisTube.svg";

export default function () {
  return (
    <footer className={`p-y-2 p-x-2 ${styles.footer}`}>
      <div className="container">
        <div>
          <img src={AegisTube} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
