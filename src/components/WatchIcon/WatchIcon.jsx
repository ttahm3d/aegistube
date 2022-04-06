import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import styles from "./WatchIcon.module.css";

export default function (props) {
  const { watchLater } = props;

  return (
    <div
      {...props}
      className={styles.icon__circle}
      style={{
        backgroundColor: watchLater === 1 && "var(--blue3)",
      }}>
      {watchLater === 1 ? (
        <MdWatchLater fill="var(--blue11)" />
      ) : (
        <MdOutlineWatchLater fill="var(--blue11)" />
      )}
    </div>
  );
}
