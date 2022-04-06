const getVideoData = (id, videos) =>
  videos.find((video) => video.videoId === id);

const getRelatedVideos = (category, videos) =>
  videos.filter((video) => video.category === category);

const isVideoLiked = (video, likedVideos) =>
  likedVideos.some((likedVideo) => likedVideo._id === video._id);

const isVideoInWatchLater = (video, watchLater) =>
  watchLater.some((wVideo) => wVideo._id === video._id);

export { getRelatedVideos, getVideoData, isVideoLiked, isVideoInWatchLater };
