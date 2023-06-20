import { m } from "framer-motion";
import { useState } from "react";
import { AnimateComponent } from "./AnimateComponent";

export function QuestionAndAnswer({
  data,
  index,
  isMobile,
}: {
  data: {
    question: string;
    answer: string;
  };
  index: number;
  isMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateComponent
      className="faq_item"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 * ((index + 1) / 4) },
        },
      }}
      onClick={isMobile ? () => setOpen(!open) : () => {}}
    >
      <div className="faq_item_question">
        <p className="text faq_item_question_text">{data.question}</p>
        <p
          className="text faq_item_question_icon"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img
              src="logos/down-arrow.svg"
              className="arrow rotated"
              alt="Down arrow"
            />
          ) : (
            <img
              src="logos/down-arrow.svg"
              className="arrow"
              alt="Right arrow"
            />
          )}
        </p>
      </div>
      {open ? (
        <m.p
          key="popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="faq_item_answer"
        >
          {data.answer}
        </m.p>
      ) : null}
    </AnimateComponent>
  );
}
