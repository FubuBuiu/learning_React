// import PropTypes from "prop-types";
import stylesQuizResult from "./styles.module.css";
import { Button } from "../Button";

interface QuizResultProps {
  correctAnswersCount: number;
  maxQuestions: number;
  onClick: () => void;
}

export function Result({
  correctAnswersCount,
  maxQuestions,
  onClick,
}: QuizResultProps) {
  return (
    <div className={stylesQuizResult.container}>
      <h1 className={stylesQuizResult.title}>Resultado</h1>
      <h2 className={stylesQuizResult.subtitle}>
        Você acertou {correctAnswersCount} de {maxQuestions} perguntas!
      </h2>
      <Button onClick={onClick}>Tente Novamente</Button>
    </div>
  );
}

// Result.propTypes = {
//   correctAnswersCount: PropTypes.number,
//   maxQuestions: PropTypes.number,
//   onClick: PropTypes.func,
// };
