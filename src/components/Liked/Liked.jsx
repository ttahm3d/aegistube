import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import styles from "./Liked.module.css";

export default function (props) {
  const { liked } = props;

  return (
    <div
      {...props}
      className={styles.like__circle}
      style={{
        backgroundColor: liked === 1 && "var(--blue3)",
      }}>
      {liked === 1 ? (
        <AiFillLike fill="var(--blue11)" />
      ) : (
        <AiOutlineLike fill="var(--blue11)" />
      )}
    </div>
  );
}
