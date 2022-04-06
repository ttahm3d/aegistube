import styles from "./WatchLater.module.css";
import { useVideos } from "../../context/videos";
import { useDocumentTitle } from "../../hooks";
import { Empty } from "../../components";
import WatchLaterCard from "./WatchLaterCard";

export default function () {
  useDocumentTitle("Watch Later | AegisTube");

  const { watchLater } = useVideos();

  return (
    <div>
      <div className="content-container">
        {watchLater?.length === 0 ? (
          <Empty text="There are no videos to be 'Watched Later'. Visit the below link and add some to watch later " />
        ) : (
          <div className={styles.watchlater__container}>
            <div className={styles.watchlater__info}>
              <div className={styles.watchlater__info__text}>
                You have {watchLater.length} videos listed to Watch Later.
              </div>
            </div>
            <div className={styles.watchlater}>
              {watchLater.map((watchLaterVideo) => (
                <WatchLaterCard
                  key={watchLaterVideo._id}
                  watchLaterVideo={watchLaterVideo}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
