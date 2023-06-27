import { useScrollSection } from "react-scroll-section";
import { AnimateComponent } from "../components/AnimateComponent";
import "../styles/sections/home.scss";

export function Home({
  isXS,
  isMobile,
}: {
  isXS?: boolean;
  isMobile?: boolean;
}) {
  const goToPlans = useScrollSection("3");

  return (
    <div className={`content home`}>
      <div className="text">
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <div className="text-content">
            <h2 className="text-content_title">
              <div>
                {isXS ? (
                  <>
                    Helping students
                    <br />
                    access Study loans
                  </>
                ) : (
                  <>
                    Helping students access <br /> study loans easily
                  </>
                )}
              </div>
            </h2>
            <p className="text-content_subtitle">
              Do you want to have access to loan platforms available in your
              country?
            </p>
            <div className="text-content_button">
              <button
                type="button"
                className="button-primary"
                onClick={() => goToPlans.onClick()}
              >
                {isMobile ? "Check Now" : "Check it now"}
              </button>
            </div>
          </div>
        </AnimateComponent>
      </div>
    </div>
  );
}
