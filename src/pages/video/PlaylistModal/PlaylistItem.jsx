import { useVideos } from "../../../context/videos";
import styles from "./Playlist.module.css";
import {
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";

export default function ({ videoInPlaylist, video, playlist }) {
  const { addVideoToPlaylist } = useVideos();

  return (
    <div
      key={playlist._id}
      className={`${styles.playlist} ${videoInPlaylist && styles.in__playlist}`}
      onClick={() => addVideoToPlaylist(playlist._id, video)}>
      <div className={styles.playlist__icon}>
        {videoInPlaylist ? (
          <MdOutlinePlaylistAddCheck />
        ) : (
          <MdOutlinePlaylistAdd />
        )}
      </div>
      <div className={styles.playlist__title}>{playlist.title}</div>
    </div>
  );
}
