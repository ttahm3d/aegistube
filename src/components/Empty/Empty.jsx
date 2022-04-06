import styles from "./Empty.module.css";
import { BsCameraReels } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon__container}>
        <BsCameraReels size={100} />
      </div>
      <div className={styles.text__container}>
        <div className={styles.text}>{text}</div>
        <Link to="/explore" className="primary-link">
          Watch videos now
        </Link>
      </div>
    </div>
  );
}
