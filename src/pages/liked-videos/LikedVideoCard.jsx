import { Liked } from "../../components";
import { useVideos } from "../../context/videos";
import styles from "./LikedVideos.module.css";

export default function ({ likedVideo }) {
  const { removeFromLikedVideos } = useVideos();

  return (
    <div className={styles.card}>
      <div>
        <img
          src={likedVideo.thumbnail}
          alt={likedVideo.title}
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.card__description}>
        <div className={styles.title}>{likedVideo.title}</div>
        <div className={styles.like__container}>
          <Liked liked={1} onClick={() => removeFromLikedVideos(likedVideo)} />
        </div>
      </div>
    </div>
  );
}
