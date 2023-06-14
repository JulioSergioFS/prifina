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

          <div className="about_text-images_content_img" />
        </div>
        <div className="about_text-images_img" />
      </AnimateComponent>
    </div>
  );
}
