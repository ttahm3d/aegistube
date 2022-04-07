import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <code className={styles.error__code}>404 Not Found</code>
        <div className={styles.error__text}>
          The page that you are looking for does not exist
        </div>
      </div>
      <Link to="/" className="primary-link">
        Go Home
      </Link>
    </div>
  );
}
