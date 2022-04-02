import { useState } from "react";
import { Button, Input } from "../../../components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useAuth } from "../../../context/auth";

export default function () {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();

  const location = useLocation();
  const path = location.state?.from?.pathname || "/";

  const toggleShowPassword = () => setShowPassword((s) => !s);

  const handleChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(loginForm, path);
    setLoginForm({
      email: "",
      password: "",
    });
  };

  const guestLogin = (event) => {
    event.preventDefault();
    handleLogin(
      {
        email: "tahirahmed@gmail.com",
        password: "aegistube",
      },
      path
    );
    console.log(location);
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
          <div className="m-y-2">
            <Button
              variant="secondary"
              text="Login as Guest"
              onClick={guestLogin}
              fullWidth
            />
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
