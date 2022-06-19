import axios from "axios";

const getVideosHandler = () => axios.get("/api/videos");

const addToHistoryHandler = (video) =>
  axios.post(
    `/api/user/history`,
    { video },
    {
      headers: {
        authorization: localStorage.getItem("video-lib-user-token"),
      },
    }
  );

const removeFromHistoryHandler = (video) =>
  axios.delete(`/api/user/history/${video._id}`, {
    headers: {
      authorization: localStorage.getItem("video-lib-user-token"),
    },
  });

const clearHistoryHandler = () => {
  axios.delete(`/api/user/history/all`, {
    headers: {
      authorization: localStorage.getItem("video-lib-user-token"),
    },
  });
};

const addVideosToLikedVideosHandler = (video) =>
  axios.post(
    `/api/user/likes`,
    { video },
    {
      headers: {
        authorization: localStorage.getItem("video-lib-user-token"),
      },
    }
  );

const removeFromLikedVideosHandler = (video) =>
  axios.delete(`/api/user/likes/${video._id}`, {
    headers: {
      authorization: localStorage.getItem("video-lib-user-token"),
    },
  });

const addVideosToWatchLaterHandler = (video) =>
  axios.post(
    `/api/user/watchlater`,
    { video },
    {
      headers: {
        authorization: localStorage.getItem("video-lib-user-token"),
      },
    }
  );

const removeFromWatchlaterHandler = (video) =>
  axios.delete(`/api/user/watchlater/${video._id}`, {
    headers: {
      authorization: localStorage.getItem("video-lib-user-token"),
    },
  });

const addNewPlaylistHandler = (playlistForm) =>
  axios.post(
    "/api/user/playlists",
    { playlist: playlistForm },
    {
      headers: {
        authorization: localStorage.getItem("video-lib-user-token"),
      },
    }
  );

const deletePlaylistHandler = () =>
  axios.delete(`/api/user/playlists/${playlist._id}`, {
    headers: {
      authorization: localStorage.getItem("video-lib-user-token"),
    },
  });

const addVideoToPlaylistHandler = (playlistId, video) =>
  axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: {
        authorization: localStorage.getItem("video-lib-user-token"),
      },
    }
  );

const removeVideoFromPlaylistHandler = (playlistId, video) =>
  axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, {
    headers: {
      authorization: localStorage.getItem("video-lib-user-token"),
    },
  });

export {
  addNewPlaylistHandler,
  addToHistoryHandler,
  addVideosToLikedVideosHandler,
  addVideoToPlaylistHandler,
  addVideosToWatchLaterHandler,
  clearHistoryHandler,
  deletePlaylistHandler,
  getVideosHandler,
  removeFromHistoryHandler,
  removeFromLikedVideosHandler,
  removeFromWatchlaterHandler,
  removeVideoFromPlaylistHandler,
};
