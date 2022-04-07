import { useDocumentTitle } from "../../hooks";
import { Modal, Button, AddPlaylistForm } from "../../components";
import { useState } from "react";
import styles from "./Playlist.module.css";
import PlaylistCard from "./PlaylistCard";
import { useVideos } from "../../context/videos";

export default function () {
  useDocumentTitle("Playlists | AegisTube");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((t) => !t);
  const closeModal = () => setShowModal(false);

  const { playlists } = useVideos();

  return (
    <div className="content-container">
      <h3>Playlists</h3>
      <div className="p-y-2">
        <Button variant="primary" onClick={toggleModal}>
          Create playlist
        </Button>
        <Modal showModal={showModal} closeModal={closeModal}>
          <AddPlaylistForm />
        </Modal>
      </div>

      <div className={styles.playlists__container}>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
}
