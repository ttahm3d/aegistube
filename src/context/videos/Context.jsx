import { createContext, useContext, useReducer } from "react";
import { videosReducer } from "./Reducer";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videosReducer, {
    categories: [],
  });

  return (
    <VideosContext.Provider
      value={{
        videoState,
        videoDispatch,
      }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
