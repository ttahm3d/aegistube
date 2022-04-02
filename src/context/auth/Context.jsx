import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../../hooks";
import { authReducer } from "./Reducer";
import { Toast } from "../../components";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useLocalStorage("video-lib-user-token");
  const [userData, setUserData] = useLocalStorage("video-lib-user");

  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: userToken,
    user: userData,
  });

  const handleLogin = async (loginForm) => {
    try {
      const response = await axios.post("/api/auth/login", loginForm);
      if (response.status === 200) {
        setUserToken(response?.data.encodedToken);
        setUserData(response?.data?.user);
        Toast({ message: "You have successsfully logged in", type: "success" });
        authDispatch({
          type: "LOGIN",
          payload: response?.data?.user,
        });
      }
    } catch (e) {
      console.error(e);
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
    }
  };

  const handleLogout = async () => {
    authDispatch({
      type: "LOGOUT",
    });
    try {
      localStorage.removeItem("video-lib-user-token");
      localStorage.removeItem("video-lib-user");
      Toast({ message: "Logout successful!!", type: "success" });
    } catch (e) {
      Toast({
        message: "Could not log you out. Please try again.",
        type: "error",
      });
    }
  };

  const handleSignup = async (signupForm) => {
    try {
      const { status, data } = await axios.post("/api/auth/signup", signupForm);
      if (status === 201) {
        setUserToken(data.encodedToken);
        setUserData(data?.user);
        authDispatch({
          type: "SIGNUP",
          payload: data?.user,
        });
        Toast({
          message: "Welcome!! You have successsfully signed up.",
          type: "success",
        });
      }
    } catch (e) {
      console.error(e);
      Toast({
        message: "There was an issue in signup. Please try again",
        type: "error",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: authState.isLoggedIn,
        user: userData,
        authState,
        handleLogin,
        handleSignup,
        handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
