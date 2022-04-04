const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_CATEGORY":
      return { ...state, category: payload };
    default:
      return state;
  }
};

export { videosReducer };
