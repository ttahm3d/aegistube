const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_CATEGORY":
      return { ...state, category: payload };
    case "ADD_TO_LIKED":
    case "REMOVE_FROM_LIKED":
      return { ...state, likedVideos: payload };
    case "ADD_TO_WATCHLATER":
    case "REMOVE_FROM_WATCHLATER":
      return { ...state, watchLater: payload };
    case "ADD_TO_HISTORY":
    case "REMOVE_FROM_HISTORY":
    case "CLEAR_HISTORY":
      return { ...state, history: payload };
    default:
      return state;
  }
};

export { videosReducer };
