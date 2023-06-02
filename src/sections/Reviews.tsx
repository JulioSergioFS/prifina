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
        <Carousel />
        <p>See more videos</p>
      </div>
    </div>
  );
}
