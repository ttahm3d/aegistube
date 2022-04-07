import { useDocumentTitle } from "../../hooks";
import { Modal, Button } from "../../components";
import { useState } from "react";

export default function () {
  useDocumentTitle("Playlists | AegisTube");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((t) => !t);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <h1>Playlist</h1>
      <Button variant="primary" onClick={toggleModal}>
        Open Modal
      </Button>
      <Modal showModal={showModal} closeModal={closeModal}>
        Some random content
      </Modal>
    </div>
  );
}
