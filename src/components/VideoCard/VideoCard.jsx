import styles from "./VideoCard.module.css";
import { Link } from "react-router-dom";

export default function ({ video }) {
  const { _id, videoId, title, thumbnail, channelIcon, channelTitle } = video;
  return (
    <div className={styles.card} key={_id}>
      <Link to={`/video/${videoId}`}>
        <div>
          <img src={thumbnail} alt={title} className={styles.card__thumbnail} />
        </div>
        <div className={styles.card__description}>
          <div className={styles.card__channel__icon__container}>
            <img
              src={channelIcon}
              alt={channelTitle}
              className={styles.card__channel__icon}
            />
          </div>
          <div className={styles.card__video__info}>
            <div className={styles.card__video__title}>{title}</div>
            <div className={styles.card__video__publisher}>{channelTitle}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
