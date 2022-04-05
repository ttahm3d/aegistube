import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import RequiresAuth from "./RequiresAuth";
import RedirectAuth from "./RedirectAuth";

const LandingPage = lazy(() => import("../pages/landing-page/LandingPage"));
const ApiResponse = lazy(() => import("../pages/api-response/ApiResponse"));
const Explore = lazy(() => import("../pages/explore/Explore"));
const Video = lazy(() => import("../pages/video/Video"));
const Login = lazy(() => import("../pages/auth/login/Login"));
const Signup = lazy(() => import("../pages/auth/signup/Signup"));
const History = lazy(() => import("../pages/history/History"));
const Playlist = lazy(() => import("../pages/playlist/Playlist"));
const WatchLater = lazy(() => import("../pages/watch-later/WatchLater"));
const Liked = lazy(() => import("../pages/liked-videos/LikedVideos"));

export default function () {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockbee" element={<ApiResponse />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/video/:id" element={<Video />} />
        <Route element={<RedirectAuth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
        <Route element={<RequiresAuth />}>
          <Route path="/history" element={<History />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/liked-videos" element={<Liked />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
