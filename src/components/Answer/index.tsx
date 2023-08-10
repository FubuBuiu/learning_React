// import PropTypes from "prop-types";
import stylesAnswer from "./styles.module.css";
import { Question } from "../Quiz/index";
import { MouseEvent } from "react";

interface AnswerProps {
  answer: string;
  question: Question;
  checkAnswer: (
    event: MouseEvent<HTMLButtonElement>,
    question: Question,
    answer: string
  ) => void;
}

export function Answer({ answer, question, checkAnswer }: AnswerProps) {
  return (
    <button
      className={stylesAnswer.container}
      onClick={(event) => checkAnswer(event, question, answer)}
    >
      {answer}
    </button>
  );
}

// Answer.propTypes = {
//   answer: PropTypes.string,
//   question: PropTypes.object,
//   checkAnswer: PropTypes.func,
// };
