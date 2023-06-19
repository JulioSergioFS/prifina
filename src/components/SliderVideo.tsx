import { Dispatch, SetStateAction, useState } from "react";
// @mui
import ReactPlayer from "react-player";

// ----------------------------------------------------------------------

export function SliderVideo({
  isMobile,
  video,
  videosArePaused,
  setVideosArePaused,
  pauseCarousel,
  playCarousel,
}: {
  isMobile?: boolean;
  video: {
    url: string;
    thumbnail: string;
  };
  videosArePaused: boolean;
  setVideosArePaused: Dispatch<SetStateAction<boolean>>;
  pauseCarousel: () => void;
  playCarousel: () => void;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <ReactPlayer
      url={video.url}
      controls
      playing={playing && !videosArePaused}
      light={`images/reviews/${video.thumbnail}`}
      onStart={() => setPlaying(true)}
      onPause={() => {
        setPlaying(false);
        playCarousel();
      }}
      onEnded={() => {
        setPlaying(false);
        playCarousel();
      }}
      onPlay={() => {
        setPlaying(true);
        setVideosArePaused(false);
        pauseCarousel();
      }}
      onClickPreview={() => {
        pauseCarousel();
      }}
      style={{
        maxWidth: "99%",
        maxHeight: isMobile ? "225px" : "292px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    />
  );
}
