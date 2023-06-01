import { AnimateComponent } from "../components/AnimateComponent";
import "../styles/sections/about.scss";

export function About() {
  return (
    <div className="content about">
      <AnimateComponent
        className="image-container"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <img
          className="my-photo"
          src="images/pexels-fauxels-3182754-colored.jpg"
          alt="Group of people smiling (photo by fauxels: https://www.pexels.com/photo/photo-of-people-leaning-on-wooden-table-3182754/)"
        />
      </AnimateComponent>
      <div className="text">
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          }}
        >
          <h2 className="title">About Study Loans</h2>
        </AnimateComponent>

        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <div className="text-content">
            <p>
              At our core, we are a team of passionate coders with a shared
              mission to empower individuals with the skills they need to
              succeed in today's digital world. Our team brings a wealth of
              industry experience and technical expertise to the table, and we
              are committed to providing the highest quality coding education to
              our students.
            </p>
            <p>
              We are committed to supporting our students every step of the way.
              Our instructors are available to answer your questions, provide
              feedback on your code, and guide you through the learning process.
              We also provide a supportive community of like-minded learners,
              where you can connect with other students, collaborate on
              projects, and get inspired by others' work.
            </p>
            <p>
              We are excited to have you join our coding course and look forward
              to helping you achieve your coding goals!
            </p>
          </div>
        </AnimateComponent>
      </div>
    </div>
  );
}
