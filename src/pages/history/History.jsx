import { Empty } from "../../components";
import { useVideos } from "../../context/videos/Context";
import { useDocumentTitle } from "../../hooks";
import styles from "./History.module.css";
import HistoryCard from "./HistoryCard";

export default function () {
  useDocumentTitle("History | AegisTube");

  const { history } = useVideos();

  const test = [
    {
      _id: "780ae6aa-d30c-4616-b873-2ff23abd69d7",
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
    {
      _id: "25fee321-d073-48c4-aac1-0984cc87762a",
      videoId: "gHEPh8BaIbM",
      title: "TI 10 Grand Finals - PSG LGD Vs Team Spirit",
      description:
        "Team Spirit Vs PSG LGD B05 Grand Finals of The International 10 for a prize money of $18,000,000",
      channelTitle: "DotA Digest",
      channelId: "UCTQKT5QqO3h7y32G8VzuySQ",
      thumbnail:
        "https://res.cloudinary.com/dut75albw/image/upload/v1649061539/AegisTube/Thumbnails/ti10.webp",
      views: 9727930,
      likes: 800249,
      category: "The International",
      id: "5",
    },
  ];

  return (
    <div className="content-container">
      <div className={styles.container}>
        {history.length === 0 ? (
          <Empty text="Looks like you are new here or you have cleared your watch history 👀" />
        ) : (
          <div className={styles.history__items}>
            {history.map((video) => (
              <HistoryCard key={video._id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
