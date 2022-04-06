const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_CATEGORY":
      return { ...state, category: payload };
    case "ADD_TO_LIKED":
    case "REMOVE_FROM_LIKED":
      return { ...state, likedVideos: payload };
    default:
      return state;
  }
};

export { videosReducer };
