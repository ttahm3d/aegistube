import { AiOutlineDelete } from "react-icons/ai";
import { useVideos } from "../../context/videos/Context";
import styles from "./History.module.css";

export default function ({ video }) {
  const { removeFromHistory } = useVideos();

  return (
    <div className={styles.card}>
      <div className={styles.card__thumbnail}>
        <img src={video?.thumbnail} alt={video?.title} />
      </div>
      <div className={styles.card__description__container}>
        <div>
          <div className={styles.card__title}>{video?.title}</div>
          <div className={styles.card__description}>{video?.description}</div>
        </div>
        <div
          className={styles.icon}
          onClick={() => removeFromHistory(video)}
          title="Remove video from watch history">
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
}
