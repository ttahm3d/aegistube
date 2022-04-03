const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
    case "SIGNUP":
      return {
        ...state,
        isLoggedIn: localStorage.getItem("video-lib-user-token") ? true : false,
        user: localStorage.getItem("video-lib-user"),
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export { authReducer };
