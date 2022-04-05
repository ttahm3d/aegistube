import styles from "./Button.module.css";

export default function ({ children, onClick, props, variant, fullWidth }) {
  return (
    <button
      className={
        variant === "primary"
          ? `${styles.primary} ${styles.button}`
          : `${styles.secondary} ${styles.button}`
      }
      style={{ width: fullWidth ? "100%" : "fit-content" }}
      {...props}
      onClick={onClick}>
      {children}
    </button>
  );
}
