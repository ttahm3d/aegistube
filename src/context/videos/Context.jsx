import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { filterByCategory, getResultantVideos } from "./utils";
import { videosReducer } from "./Reducer";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videosReducer, {
    category: "All",
  });

  const [videos, setVideos] = useState([]);

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

  return (
    <VideosContext.Provider
      value={{
        videos: videosToShow,
        category: videoState.category,
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
