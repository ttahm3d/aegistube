import styles from "./Header.module.css";
import AegisTube from "../../assets/AegisTube.svg";

export default function () {
  return (
    <header className={styles.header}>
      <div className="main-container">
        <nav className={styles.navbar}>
          <div>
            <img src={AegisTube} alt="logo" />
          </div>
          <button className={styles.login__button}>Login</button>
        </nav>
      </div>
    </header>
  );
}
