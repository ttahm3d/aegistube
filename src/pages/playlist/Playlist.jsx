import { useDocumentTitle } from "../../hooks";
import { Modal, Button, AddPlaylistForm } from "../../components";
import { useState } from "react";
import styles from "./Playlist.module.css";
import PlaylistCard from "./PlaylistCard";

export default function () {
  useDocumentTitle("Playlists | AegisTube");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((t) => !t);
  const closeModal = () => setShowModal(false);

  const test = [];
  const playlists = [
    {
      title: "motivational",
      description: "",
      videos: [
        {
          _id: "73764e54-c308-4856-b6b3-9ea8db54c21d",
          videoId: "ceQ2XFS1tUo",
          title: "True Sight : The International 2019 Finals",
          description:
            "TRUE SIGHT is a documentary series that takes you behind the scenes of the journeys of professional Dota 2 teams. This episode ...",
          channelTitle: "dota2",
          channelId: "UCTQKT5QqO3h7y32G8VzuySQ",
          thumbnail: "https://i.ytimg.com/vi/ceQ2XFS1tUo/hqdefault.jpg",
          views: 9848467,
          likes: 322230,
          category: "True Sight",
          id: "2",
        },
        {
          _id: "c6f8aeb3-b6d0-42de-b2b1-8fcd961ef23f",
          videoId: "GRXAaebSCOc",
          title: "TI 9 Grand Finals - Team Liquid Vs OG",
          description:
            "Team Liquid Vs OG Grand Finals of The International 9 for a prize money of $16,000,000",
          channelTitle: "DotA Digest",
          channelId: "UCTQKT5QqO3h7y32G8VzuySQ",
          thumbnail:
            "https://res.cloudinary.com/dut75albw/image/upload/v1649061539/AegisTube/Thumbnails/ti09.webp",
          views: 9727930,
          likes: 800249,
          category: "The International",
          id: "6",
        },
      ],
      _id: "c1a263ba-0fee-440a-b14d-31254f4d5432",
    },
    {
      title: "for laughs",
      description: "",
      videos: [
        {
          _id: "ff705b3b-6421-4839-a11c-921494f8523d",
          videoId: "Bv4CqIxqTMA",
          title: "True Sight : The International 2018 Finals",
          description:
            "TRUE SIGHT is a documentary series that takes you behind the scenes of the journeys of professional Dota 2 teams. This episode ...",
          channelTitle: "dota2",
          channelId: "UCTQKT5QqO3h7y32G8VzuySQ",
          thumbnail: "https://i.ytimg.com/vi/Bv4CqIxqTMA/hqdefault.jpg",
          views: 9055621,
          likes: 164380,
          category: "True Sight",
          id: "1",
        },
        {
          _id: "5ad3192c-b939-4bcd-a983-07995be4f898",
          videoId: "cfHp96Y7GzI",
          title: "TI 6 Grand Finals - Wings vs Digital Chaos",
          description:
            "Wings vs Digital Chaos Grand Finals of The International 6 for a prize money of $9,000,000",
          channelTitle: "DotA Digest",
          channelId: "UCTQKT5QqO3h7y32G8VzuySQ",
          thumbnail:
            "https://res.cloudinary.com/dut75albw/image/upload/v1649061539/AegisTube/Thumbnails/ti06.webp",
          views: 9727930,
          likes: 800249,
          category: "The International",
          id: "9",
        },
      ],
      _id: "a1fb8d28-31fd-4a30-9dea-84b1f19ed1bd",
    },
  ];

  return (
    <div className="content-container">
      <h3>Playlists</h3>
      {playlists.length === 0 ? (
        <div>
          <Button variant="primary" onClick={toggleModal}>
            Create playlist
          </Button>
          <Modal showModal={showModal} closeModal={closeModal}>
            <AddPlaylistForm />
          </Modal>
        </div>
      ) : (
        <div className={styles.playlists__container}>
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist._id} playlist={playlist} />
          ))}
        </div>
      )}
    </div>
  );
}
