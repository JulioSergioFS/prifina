import { useRef, useState } from "react";
import Slider from "react-slick";
// @mui
import { videos } from "../constants/videos";
import { SliderVideo } from "./SliderVideo";

// ----------------------------------------------------------------------

function NextArrow({ className, style, clicked, downMD }: any) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: downMD ? "-8px" : undefined,
        top: downMD ? "35%" : "40%",
        zoom: 1.8,
      }}
      onClick={clicked}
    />
  );
}

function PrevArrow({ className, style, clicked, downMD }: any) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: downMD ? "-8px" : undefined,
        top: downMD ? "35%" : "40%",
        zoom: 1.8,
      }}
      onClick={clicked}
    />
  );
}

export function Carousel() {
  const carouselRef = useRef<Slider>(null);
  const [videosArePaused, setVideosArePaused] = useState(false);

  const settings = {
    speed: 800,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <NextArrow
        clicked={() => {
          carouselRef?.current?.slickNext();
          carouselRef?.current?.slickPlay();
          setVideosArePaused(true);
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        clicked={() => {
          carouselRef?.current?.slickPrev();
          carouselRef?.current?.slickPlay();
          setVideosArePaused(true);
        }}
      />
    ),
  };

  return (
    <div>
      <Slider ref={carouselRef} {...settings}>
        {videos.map((video) => (
          <div key={video.url}>
            <div style={{ width: "100%" }}>
              <SliderVideo
                video={video}
                videosArePaused={videosArePaused}
                setVideosArePaused={setVideosArePaused}
                pauseCarousel={() => carouselRef?.current?.slickPause()}
                playCarousel={() => carouselRef?.current?.slickPlay()}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
