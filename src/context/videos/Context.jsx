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

  return (
    <VideosContext.Provider
      value={{
        videos: videosToShow,
        category: videoState.category,
        likedVideos: videoState.likedVideos,
        addToLikedVideos,
        removeFromLikedVideos,
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
