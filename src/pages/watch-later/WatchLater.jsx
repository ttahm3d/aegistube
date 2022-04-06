import styles from "./WatchLater.module.css";
import { useVideos } from "../../context/videos";
import { useDocumentTitle } from "../../hooks";
import { Empty } from "../../components";
import WatchLaterCard from "./WatchLaterCard";

export default function () {
  useDocumentTitle("Watch Later | AegisTube");

  const { watchLater } = useVideos();

  const test = [
    {
      _id: "414be1c8-f627-4d94-aea0-970d4e99b82d",
      videoId: "oWBDZo3axYg",
      title: "True Sight : The International 2017 Finals",
      description:
        "TRUE SIGHT is a documentary series that takes you behind the scenes of the journeys of professional Dota 2 teams. This episode ...",
      channelTitle: "dota2",
      channelId: "UCTQKT5QqO3h7y32G8VzuySQ",
      thumbnail: "https://i.ytimg.com/vi/oWBDZo3axYg/hqdefault.jpg",
      views: 13075555,
      likes: 314111,
      category: "True Sight",
      id: "3",
    },
    {
      _id: "e3900c4d-0e55-4cda-b91e-f8bccb702c99",
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
  ];

  return (
    <div>
      <div className="content-container">
        {watchLater?.length === 0 ? (
          <Empty text="Looks like there are no videos that you like. Lets change that. Visit below link" />
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
