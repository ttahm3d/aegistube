const filterByCategory = (state, videos) =>
  state.category !== "All"
    ? videos.filter((video) => video.category === state.category)
    : videos;

const getResultantVideos =
  (state, ...filters) =>
  (videos) =>
    filters.reduce((filter, curFn) => curFn(state, filter), videos);

export { filterByCategory, getResultantVideos };
