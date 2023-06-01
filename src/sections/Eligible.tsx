import { AnimateComponent } from "../components/AnimateComponent";
import { conditions } from "../constants/conditions";
import "../styles/sections/eligible.scss";

export function Eligible() {
  return (
    <div className="content eligible">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Who is eligible for a loan?</h2>
      </AnimateComponent>

      <div className="eligible_content">
        <AnimateComponent
          className="eligible_content_list"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          {conditions.map((condition) => (
            <div key={condition} className="eligible_content_list_item">
              <div className="eligible_content_list_item_dot" />
              <p className="eligible_content_list_item_text">{condition}</p>
            </div>
          ))}
        </AnimateComponent>

        <AnimateComponent
          className="eligible_content_image"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          }}
        >
          <img
            className="my-photo"
            src="images/eligible-section-girl.jpg"
            alt="Happy graduating girl"
          />
        </AnimateComponent>
      </div>
    </div>
  );
}
