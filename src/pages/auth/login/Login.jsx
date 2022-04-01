import { useState } from "react";
import { Button, Input, Toast } from "../../../components";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function () {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((s) => !s);

  const handleChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
    // Call the dispatch here
    Toast({ type: "warning", message: "Toasts are working" });
    setLoginForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="content-container">
      <div className={styles.form__container}>
        <h3 className={styles.form__heading}>Login</h3>
        <form onSubmit={handleSubmit}>
          <Input
            label={"email"}
            id={"email"}
            type={"email"}
            name={"email"}
            value={loginForm.email}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <Input
            label={"password"}
            id={"password"}
            type={"password"}
            name={"password"}
            value={loginForm.password}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <div className="m-y-2">
            <Button variant="primary" text="Login" fullWidth />
          </div>
        </form>
        Don't have an account ?{" "}
        <Link className="primary-link" to="/auth/signup">
          Create one now
        </Link>
      </div>
    </div>
  );
}
