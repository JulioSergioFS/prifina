import { AnimateComponent } from "../components/AnimateComponent";
import { features } from "../constants/features";
import "../styles/sections/features.scss";

export function Features({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content section-color">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Our Features</h2>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <div className="features">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <div className="logo-container">
                <img
                  className="logo"
                  src={feature.image}
                  alt={`${feature.title} logo`}
                />
              </div>
              <h6 className="name">{feature.title}</h6>
              <p className="carousel-description">{feature.text}</p>
            </div>
          ))}
        </div>
      </AnimateComponent>
    </div>
  );
}
