import { AnimateComponent } from "../../components/AnimateComponent";
import "../../styles/sections/work-opportunities/home.scss";

export function Home({
  isXS,
  isMobile,
}: {
  isXS?: boolean;
  isMobile?: boolean;
}) {
  return (
    <div className={`content work-home`}>
      <div className="work-home_content">
        <div className="work-home_content_text">
          <AnimateComponent
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
          >
            <div className="text-content">
              <h2 className="text-content_title">
                Job Vacancies for Students and Graduates
              </h2>
              <p className="text-content_subtitle">
                Get a job or internship placement anywhere around the world
              </p>
            </div>
          </AnimateComponent>
        </div>
        <img
          className="work-home_content_img"
          src="images/work-opp-banner.png"
          alt="smiling people"
        />
      </div>
    </div>
  );
}
