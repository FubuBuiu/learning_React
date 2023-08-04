import stylesAnswer from "./styles.module.css";
import PropTypes from "prop-types";

export function Answer({ answer, question, checkAnswer }) {
  return (
    <button
      className={stylesAnswer.container}
      onClick={(event) => checkAnswer(event, question, answer)}
    >
      {answer}
    </button>
  );
}

Answer.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.object,
  checkAnswer: PropTypes.func,
};
