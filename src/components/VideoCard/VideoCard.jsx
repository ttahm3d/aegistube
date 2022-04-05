import styles from "./VideoCard.module.css";
import { Link } from "react-router-dom";

export default function ({ video }) {
  const { _id, videoId, title, description, thumbnail } = video;
  return (
    <div className={styles.card}>
      <Link to={`/video/${videoId}`}>
        <div>
          <img src={thumbnail} alt={title} className={styles.card__thumbnail} />
        </div>
        <div className={styles.card__description}>
          <div className={styles.card__title}>{title}</div>
        </div>
      </Link>
    </div>
  );
}
