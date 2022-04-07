import { WatchIcon } from "../../components";
import { useVideos } from "../../context/videos";
import styles from "./WatchLater.module.css";

export default function ({ watchLaterVideo }) {
  const { removeFromWatchlater } = useVideos();

  return (
    <div className={styles.card}>
      <div>
        <img
          src={watchLaterVideo?.thumbnail}
          alt={watchLaterVideo?.title}
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.card__description}>
        <div className={styles.title}>{watchLaterVideo?.title}</div>
        <div className={styles.watchlater__container}>
          <WatchIcon
            watchLater={1}
            title="Remove video from watch later"
            onClick={() => removeFromWatchlater(watchLaterVideo)}
          />
        </div>
      </div>
    </div>
  );
}
