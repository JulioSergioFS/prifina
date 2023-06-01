import { AnimateComponent } from "../components/AnimateComponent";
import "../styles/sections/about.scss";

export function About() {
  return (
    <div className="content about">
      <AnimateComponent
        className="about_text-images"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        }}
      >
        <img src="images/about/1.png" alt="smiling woman" />
        <div className="about_text-images_content">
          <h2 className="title">About Study Loans</h2>
          <div>
            Prifina is dedicated to making your study abroad journey a memorable
            and remarkable one. We believe that every student should be given
            equal opportunity to learn in a place of their liking, and therefore
            we have partnered with some of the most trusted Student Loan
            Providers. We also connect you with work and internship
            opportunities.
          </div>
          <img src="images/about/2.png" className="about_text-images_image" />
        </div>
        <img src="images/about/3.png" />
      </AnimateComponent>
    </div>
  );
}
