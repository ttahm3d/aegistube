import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../../hooks";
import { authReducer } from "./Reducer";
import { Toast } from "../../components";
import { useNavigate } from "react-router-dom";
import { LOGIN, LOGOUT, SIGNUP } from "./utils/constants";
import { loginHandler, signupHandler } from "./utils/services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useLocalStorage("video-lib-user-token");
  const [userData, setUserData] = useLocalStorage("video-lib-user");

  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: userToken ? true : false,
    user: userData,
  });
  const navigate = useNavigate();

  const handleLogin = async (loginForm, path) => {
    try {
      const response = await loginHandler(loginForm);
      if (response.status === 200) {
        setUserToken(response?.data.encodedToken);
        setUserData(response?.data?.user);
        Toast({ message: "You have successsfully logged in", type: "success" });
        authDispatch({
          type: LOGIN,
          payload: response?.data?.user,
        });
      }
      navigate(path, { replace: true });
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
      type: LOGOUT,
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

  const handleSignup = async (signupForm, path) => {
    try {
      const { status, data } = await signupHandler(signupForm);
      if (status === 201) {
        setUserToken(data.encodedToken);
        setUserData(data?.user);
        authDispatch({
          type: SIGNUP,
          payload: data?.user,
        });
        Toast({
          message: "Welcome!! You have successsfully signed up.",
          type: "success",
        });
        navigate(path, { replace: true });
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
