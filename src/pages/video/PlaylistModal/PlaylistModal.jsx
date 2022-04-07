import { useVideos } from "../../../context/videos/Context";
import { checkVideoInPlayList } from "../Utils";
import { AddPlaylistForm } from "../../../components";
import styles from "./Playlist.module.css";
import PlaylistItem from "./PlaylistItem";

export default function ({ video }) {
  const { playlists, addVideoToPlaylist } = useVideos();

  return (
    <div className={styles.modal}>
      <div className={`${styles.playlists}`}>
        {playlists.length === 0 ? (
          "Create a playlist"
        ) : (
          <>
            {playlists.map((playlist) => (
              <PlaylistItem
                videoInPlaylist={checkVideoInPlayList(video, playlist)}
                video={video}
                playlist={playlist}
              />
            ))}
          </>
        )}
      </div>
      <div className={styles.form__container}>
        <AddPlaylistForm />
      </div>
    </div>
  );
}
