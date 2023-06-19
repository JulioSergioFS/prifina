import { AnimateComponent } from "../components/AnimateComponent";
import { Carousel } from "../components/Carousel";
import "../styles/sections/reviews.scss";

export function Reviews({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Our Students share their Stories</h2>
      </AnimateComponent>

      <div className="reviews">
        <Carousel isMobile={isMobile} />
        <div className="reviews_redirect">
          <div className="reviews_redirect_content">
            <a target="_blank" href="https://google.com.br">
              See more videos
            </a>
            <img src="logos/forward-arrow.svg" alt="forward arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
