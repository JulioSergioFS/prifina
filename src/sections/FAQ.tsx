import { AnimateComponent } from "../components/AnimateComponent";
import { QuestionAndAnswer } from "../components/QuestionAndAnswer";
import { faq } from "../constants/faq";
import "../styles/sections/faq.scss";

const questions = [];

export function FAQ({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title blue-text faq-title">
          Got a Question? Get Answers Right Here!
        </h2>
      </AnimateComponent>

      <div className="faq">
        {faq.map((data, index) => (
          <QuestionAndAnswer
            key={data.question}
            data={data}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
