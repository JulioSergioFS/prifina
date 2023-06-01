import { AnimateComponent } from "../components/AnimateComponent";
import "../styles/sections/eligible.scss";

const conditions = [
  "An 18 year old under graduate who has gained admission into a reputable institution.",
  "A citizen student of Austrailia, United States, India and European Nations.",
  "An international student who is looking to further his/her education abroad.",
  "A resident student of Australia, United States, India and European Nations.",
  "An undergraduate or graduate students within 2 years of graduating or about to begin a 1 or 2 years program.",
];

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
