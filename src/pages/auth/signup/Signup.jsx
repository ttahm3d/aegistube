import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../../components";
import styles from "./Signup.module.css";

export default function () {
  const [signupForm, setSignupForm] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((s) => !s);

  const handleChange = (event) => {
    setSignupForm({
      ...signupForm,
      [event.target.name]:
        event.target.name === "contact"
          ? event.target.value.trim().replace(/[^0-9]/g, "")
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signupForm);
    // Call the dispatch here

    setSignupForm({
      name: "",
      contact: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="content-container">
      <div className={styles.form__container}>
        <h3 className={styles.form__heading}>Signup</h3>
        <form onSubmit={handleSubmit}>
          <Input
            label="name"
            id="name"
            type="text"
            name="name"
            value={signupForm.name}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <Input
            label="contact"
            id="contact"
            type="contact"
            name="contact"
            value={signupForm.contact}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <Input
            label="email"
            id="email"
            type="email"
            name="email"
            value={signupForm.email}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <Input
            label="password"
            id="password"
            type="password"
            name="password"
            value={signupForm.password}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <div className="m-y-2">
            <Button variant="primary" text="Signup" fullWidth />
          </div>
        </form>
        Already have an account ?{" "}
        <Link className="primary-link" to="/auth/login">
          Login here
        </Link>
      </div>
    </div>
  );
}
