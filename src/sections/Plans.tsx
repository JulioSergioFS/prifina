import { AnimateComponent } from "../components/AnimateComponent";
import { plans } from "../constants/plans";
import "../styles/sections/plans.scss";

export function Plans({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Plans</h2>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        <p className="subtitle">
          We offer three different plans to meet your coding education needs.
        </p>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <div className="plans">
          {plans.map((plans, index) => (
            <div className="card" key={index}>
              <div className="company-text">
                <img
                  className="logo"
                  src={plans.image}
                  alt={`${plans.title} logo`}
                />
                <h6 className="name">{plans.title}</h6>
                <h6 className="price">${plans.price}</h6>
                <p className="carousel-description">{plans.text}</p>
              </div>
              <p className="redirect-link">Join In</p>
            </div>
          ))}
        </div>
      </AnimateComponent>
    </div>
  );
}
