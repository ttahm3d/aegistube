import { useVideos } from "../../../context/videos";
import Filters from "./Filters/Filters";
import { VideoCard } from "../../../components";
import styles from "./VideoListing.module.css";

export default function () {
  const { videos } = useVideos();

  return (
    <div>
      <Filters />
      <div className={styles.videos}>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
