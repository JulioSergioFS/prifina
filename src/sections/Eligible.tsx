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
            <div key={condition.text} className="eligible_content_list_item">
              <img
                className="eligible_content_list_item_img"
                src={condition.icon}
                alt="icon"
              />
              <p className="eligible_content_list_item_text">
                {condition.text}
              </p>
            </div>
          ))}
        </AnimateComponent>

        <AnimateComponent
          className="eligible_content_image"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          }}
        >
          <div className="my-photo" />
        </AnimateComponent>
      </div>
    </div>
  );
}
