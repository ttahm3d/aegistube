import VideoListing from "./VideoListing/VideoListing";
import { useDocumentTitle } from "../../hooks";

export default function () {
  useDocumentTitle("Explore | AegisTube");

  return (
    <div className="content-container">
      <VideoListing />
    </div>
  );
}
