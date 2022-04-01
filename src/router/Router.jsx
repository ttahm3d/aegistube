import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const LandingPage = lazy(() => import("../pages/landing-page/LandingPage"));
const ApiResponse = lazy(() => import("../pages/api-response/ApiResponse"));
const Explore = lazy(() => import("../pages/explore/Explore"));
const Login = lazy(() => import("../pages/authentication/login/Login"));
const Signup = lazy(() => import("../pages/authentication/signup/Signup"));
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
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked-videos" element={<Liked />} />
      </Routes>
    </Suspense>
  );
}
