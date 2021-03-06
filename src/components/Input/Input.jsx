import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import styles from "./Input.module.css";

export default function (props) {
  const {
    label,
    id,
    type,
    name,
    required,
    value,
    disabled,
    placeholder,
    onChangeHandler,
    toggleShowPassword,
    showPassword,
  } = props;
  return (
    <div className={`${styles.form__item} p-y-0-5 `}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {type === "password" ? (
        <>
          <input
            className={styles.input}
            type={type === "password" && showPassword ? "text" : "password"}
            id={id}
            name={name}
            value={value}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChangeHandler}
          />
          <div className={styles.showBtn} onClick={toggleShowPassword}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </>
      ) : (
        <input
          className={styles.input}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
}
