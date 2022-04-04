import { useVideos } from "../../../context/videos";
import Filters from "./Filters/Filters";
import VideoCard from "./VideoCard/VideoCard";
import styles from "./VideoListing.module.css";

export default function () {
  const { videos, videoState } = useVideos();

  console.log(videos);
  console.log(videoState);

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
