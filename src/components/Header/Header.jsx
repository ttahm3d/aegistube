import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import AegisTube from "../../assets/AegisTube.svg";

export default function ({ toggleSidebar }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.menu__logo}>
            <div className={styles.menu}>
              <AiOutlineMenu onClick={toggleSidebar} />
            </div>
            <div className={styles.logo}>
              <img src={AegisTube} alt="logo" />
            </div>
          </div>
          <div className={styles.navitems}>
            <button className={styles.login__button}>Login</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
