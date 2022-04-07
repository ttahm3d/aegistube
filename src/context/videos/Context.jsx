import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useLocalStorage } from "../../hooks";
import axios from "axios";
import { filterByCategory, getResultantVideos } from "./utils";
import { videosReducer } from "./Reducer";
import Toast from "../../components/Toast/Toast";
import { useAuth } from "../auth";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videosReducer, {
    category: "All",
    likedVideos: [],
    watchLater: [],
    history: [],
    playlists: [],
  });
  const [token] = useLocalStorage("video-lib-user-token");
  const [videos, setVideos] = useState([]);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          setVideos(response?.data?.videos);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const videosToShow = getResultantVideos(videoState, filterByCategory)(videos);

  const changeCategory = (name) => {
    videoDispatch({
      type: "FILTER_BY_CATEGORY",
      payload: name,
    });
  };

  const addToLikedVideos = async (video) => {
    if (isLoggedIn) {
      if (
        videoState.likedVideos.some(
          (likedVideo) => likedVideo._id === video._id
        )
      ) {
        removeFromLikedVideos(video);
      } else {
        try {
          const response = await axios.post(
            `/api/user/likes`,
            { video },
            {
              headers: {
                authorization: token,
              },
            }
          );
          if (response.status === 201) {
            videoDispatch({
              type: "ADD_TO_LIKED",
              payload: response?.data?.likes,
            });
            Toast({
              type: "success",
              message: `${video.title} has been added to liked videos`,
            });
          }
        } catch (e) {
          console.error(e);
          Toast({
            type: "error",
            message: "Something went wrong. Try again.",
          });
        }
      }
    }
  };

  const addToWatchlater = async (video) => {
    if (isLoggedIn) {
      if (
        videoState.watchLater.some((likedVideo) => likedVideo._id === video._id)
      ) {
        removeFromWatchlater(video);
      } else {
        try {
          const response = await axios.post(
            `/api/user/watchlater`,
            { video },
            {
              headers: {
                authorization: token,
              },
            }
          );
          console.log(response);
          if (response.status === 201) {
            videoDispatch({
              type: "ADD_TO_WATCHLATER",
              payload: response?.data?.watchlater,
            });
            Toast({
              type: "success",
              message: `${video.title} has been added to WatchLater list`,
            });
          }
        } catch (e) {
          console.error(e);
          Toast({
            type: "error",
            message: "Something went wrong. Try again.",
          });
        }
      }
    }
  };

  const removeFromLikedVideos = async (video) => {
    try {
      const response = await axios.delete(`/api/user/likes/${video._id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        videoDispatch({
          type: "REMOVE_FROM_LIKED",
          payload: response?.data?.likes,
        });
        Toast({
          type: "info",
          message: `${video.title} has been removed from Liked Videost`,
        });
      }
    } catch (e) {
      Toast({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    }
  };

  const removeFromWatchlater = async (video) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        videoDispatch({
          type: "REMOVE_FROM_WATCHLATER",
          payload: response?.data?.watchlater,
        });
        Toast({
          type: "info",
          message: `${video.title} has been removed from Watchlater list`,
        });
      }
    } catch (e) {
      Toast({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    }
  };

  const addToHistory = async (video) => {
    if (isLoggedIn) {
      try {
        const response = await axios.post(
          `/api/user/history`,
          { video },
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
          videoDispatch({
            type: "ADD_TO_HISTORY",
            payload: response?.data?.history,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const removeFromHistory = async (video) => {
    try {
      const response = await axios.delete(`/api/user/history/${video._id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        videoDispatch({
          type: "REMOVE_FROM_HISTORY",
          payload: response?.data?.history,
        });
        Toast({
          type: "info",
          message: `${video.title} has been removed from History`,
        });
      }
    } catch (e) {
      Toast({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    }
  };

  const clearHistory = async () => {
    try {
      const response = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        videoDispatch({
          type: "CLEAR_HISTORY",
          payload: response?.data?.history,
        });
        Toast({
          type: "info",
          message: `Your watch history has been cleared`,
        });
      }
    } catch (e) {
      Toast({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    }
  };

  const addNewPlaylist = async (playlistForm) => {
    if (isLoggedIn) {
      try {
        const response = await axios.post(
          "/api/user/playlists",
          { playlist: playlistForm },
          { headers: { authorization: token } }
        );
        videoDispatch({
          type: "CREATE_PLAYLIST",
          payload: response?.data?.playlists,
        });
        Toast({
          type: "success",
          message: `Playlist with name ${playlistForm.title} has been created `,
        });
      } catch (e) {
        console.error(e);
        Toast({ type: "error", message: "Something went wrong" });
      }
    } else {
      Toast({
        type: "error",
        message: "You need to login to perform this action",
      });
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    if (isLoggedIn) {
      try {
        const response = await axios.post(
          `/api/user/playlists/${playlistId}`,
          { video },
          { headers: { authorization: token } }
        );
        const { playlist } = response?.data;
        const updatedPlaylists = videoState.playlists.map((iPlaylist) =>
          iPlaylist._id === playlist._id
            ? { ...iPlaylist, videos: playlist.videos }
            : { ...iPlaylist }
        );
        videoDispatch({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: updatedPlaylists,
        });
        Toast({
          type: "success",
          message: `${video.title} has been added to ${playlist.title} playlist.`,
        });
      } catch (e) {
        console.error(e);
        Toast({ type: "error", message: "Something went wrong" });
      }
    } else {
      Toast({
        type: "error",
        message: "You need to login to perform this action",
      });
    }
  };

  const removeVideoFromPlaylist = async (playlistId, video) => {
    if (isLoggedIn) {
      try {
        const response = await axios.delete(
          `/api/user/playlists/${playlistId}/${video._id}`,
          { headers: { authorization: token } }
        );
        const { playlist } = response?.data;
        const updatedPlaylists = videoState.playlists.map((iPlaylist) =>
          iPlaylist._id === playlist._id
            ? { ...iPlaylist, videos: playlist.videos }
            : { ...iPlaylist }
        );
        videoDispatch({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: updatedPlaylists,
        });
        Toast({
          type: "success",
          message: `${video.title} has been removed from ${playlist.title} playlist.`,
        });
      } catch (e) {
        console.error(e);
        Toast({ type: "error", message: "Something went wrong" });
      }
    } else {
      Toast({
        type: "error",
        message: "You need to login to perform this action",
      });
    }
  };

  console.log(videoState);

  return (
    <VideosContext.Provider
      value={{
        videos: videosToShow,
        category: videoState.category,
        likedVideos: videoState.likedVideos,
        watchLater: videoState.watchLater,
        history: videoState.history,
        playlists: videoState.playlists,
        addToHistory,
        removeFromHistory,
        clearHistory,
        addToLikedVideos,
        removeFromLikedVideos,
        addToWatchlater,
        removeFromWatchlater,
        addNewPlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
        changeCategory,
        videoState,
        videoDispatch,
      }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
