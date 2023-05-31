import { Carousel } from "react-responsive-carousel";
import { AnimateComponent } from "../components/AnimateComponent";
import { TestimonialCard } from "../components/TestimonialCard";
import { testimonials } from "../constants/testimonials";
import "../styles/sections/testimonials.scss";

export function Testimonials({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Testimonials</h2>
      </AnimateComponent>

      {isMobile ? (
        <div className="testimonials">
          {testimonials.map((person, index) => (
            <TestimonialCard key={person.name} person={person} index={index} />
          ))}
        </div>
      ) : (
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <Carousel
            className="testimonials carousel"
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={4000}
          >
            {testimonials.map((person, index) => (
              <TestimonialCard
                key={person.name}
                person={person}
                index={index}
              />
            ))}
          </Carousel>
        </AnimateComponent>
      )}
    </div>
  );
}
