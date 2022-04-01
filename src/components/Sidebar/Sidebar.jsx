import styles from "./Sidebar.module.css";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineHistory,
  AiOutlineLike,
} from "react-icons/ai";
import { MdOutlinePlaylistPlay, MdOutlineWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    name: "Home",
    navigationPath: "/",
  },
  {
    id: 2,
    icon: <AiOutlineCompass />,
    name: "Explore",
    navigationPath: "/explore",
  },
  {
    id: 3,
    icon: <AiOutlineHistory />,
    name: "History",
    navigationPath: "/history",
  },
  {
    id: 4,
    icon: <MdOutlinePlaylistPlay />,
    name: "Playlist",
    navigationPath: "/playlist",
  },
  {
    id: 5,
    icon: <AiOutlineLike />,
    name: "Liked Videos",
    navigationPath: "/liked-videos",
  },
  {
    id: 6,
    icon: <MdOutlineWatchLater />,
    name: "Watch Later",
    navigationPath: "/watch-later",
  },
];

export default function () {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__items__container}>
        <ul className={styles.sidebar__items}>
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <NavLink
                key={item.id}
                className={`${styles.sidebar__item}`}
                to={item.navigationPath}>
                <div className={styles.sidebar__item__icon}>{item.icon}</div>
                <div className={styles.sidebar__item__name}>{item.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
