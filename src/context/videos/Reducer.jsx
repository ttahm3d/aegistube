const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_CATEGORY":
      return { ...state };
    default:
      return state;
  }
};

export { videosReducer };
