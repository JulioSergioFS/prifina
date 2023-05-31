import cssIcon from "@iconify/icons-skill-icons/css";
import figmaDark from "@iconify/icons-skill-icons/figma-dark";
import htmlIcon from "@iconify/icons-skill-icons/html";
import javascriptIcon from "@iconify/icons-skill-icons/javascript";
import reactDark from "@iconify/icons-skill-icons/react-dark";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/eligible.scss";

export function Eligible() {
  const { t } = useLocales();
  const logos = [
    typescriptIcon,
    javascriptIcon,
    reactDark,
    figmaDark,
    cssIcon,
    htmlIcon,
  ];

  return (
    <div className="content eligible">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">About Study Loans</h2>
      </AnimateComponent>

      <div className="eligible_content">
        <AnimateComponent
          className="eligible_content_list"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <p>
            At our core, we are a team of passionate coders with a shared
            mission to empower individuals with the skills they need to succeed
            in today's digital world. Our team brings a wealth of industry
            experience and technical expertise to the table, and we are
            committed to providing the highest quality coding education to our
            students.
          </p>
          <p>
            We are committed to supporting our students every step of the way.
            Our instructors are available to answer your questions, provide
            feedback on your code, and guide you through the learning process.
            We also provide a supportive community of like-minded learners,
            where you can connect with other students, collaborate on projects,
            and get inspired by others' work.
          </p>
          <p>
            We are excited to have you join our coding course and look forward
            to helping you achieve your coding goals!
          </p>
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
