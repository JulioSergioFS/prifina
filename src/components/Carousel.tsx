import { useRef, useState } from "react";
import Slider from "react-slick";
// @mui
import { videos } from "../constants/videos";
import { SliderVideo } from "./SliderVideo";

// ----------------------------------------------------------------------

export function Carousel({
  isMobile,
  isXS,
}: {
  isMobile?: boolean;
  isXS?: boolean;
}) {
  const carouselRef = useRef<Slider>(null);
  const [videosArePaused, setVideosArePaused] = useState(false);

  const settings = {
    speed: 800,
    dots: false,
    arrows: isMobile ? false : true,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider">
      <Slider ref={carouselRef} {...settings}>
        {videos.map((video) => (
          <div key={video.url}>
            <div style={{ width: "100%" }}>
              <SliderVideo
                isMobile={isMobile}
                isXS={isXS}
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

      {!isMobile ? (
        <>
          <img
            className="slider-arrow-back"
            src="logos/backward-arrow.svg"
            height={24}
            onClick={() => carouselRef?.current?.slickPrev()}
          />
          <img
            className="slider-arrow-next"
            src="logos/forward-arrow.svg"
            height={24}
            onClick={() => carouselRef?.current?.slickNext()}
          />
        </>
      ) : null}
    </div>
  );
}
