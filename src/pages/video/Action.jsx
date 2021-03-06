import styles from "./Video.module.css";

export default function ({ action }) {
  return (
    <div
      key={action.id}
      className={`${styles.action} ${
        action.isAlreadyExists && styles.selected
      }`}
      title={action.title}
      onClick={action.clickHandler}>
      <div className={styles.action__icon}>{action.icon}</div>
      <div className={styles.action__name}>{action.name}</div>
    </div>
  );
}
