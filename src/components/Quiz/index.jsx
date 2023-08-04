import { useState } from "react";
import styleQuiz from "./styles.module.css";
import { Answer } from "../Answer";

const QUESTIONS_MOCK = [
  {
    id: 1,
    question: "Qual é meu nome?",
    answers: ["Bomfim", "Mank", "Brendon", "Lucas"],
    correctAnswer: "Brendon",
  },
  {
    id: 2,
    question: "Quantos anos Brendon tem?",
    answers: ["23", "24", "25", "26"],
    correctAnswer: "24",
  },
  {
    id: 3,
    question: "Qual é o apelido de Brendon?",
    answers: ["Fubu", "Irineu", "Negueba", "Japa"],
    correctAnswer: "Fubu",
  },
];

export function Quiz() {
  const currentQuestion = QUESTIONS_MOCK[0];

  const [correctAnswerCounter, setCounter] = useState(0);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  function checkAnswer(event, question, answer) {
    if (!isQuestionAnswered) {
      const isCorrectAnswer = question.correctAnswer === answer;
      const resultClassName = isCorrectAnswer
        ? styleQuiz.correct
        : styleQuiz.incorrect;

      if (isCorrectAnswer) {
        setIsQuestionAnswered(true);
        setCounter(correctAnswerCounter + 1);
      }

      event.target.classList.toggle(resultClassName);
    }
  }

  return (
    <div className={styleQuiz.container}>
      <div className={styleQuiz.card}>
        <div className={styleQuiz.quiz}>
          <header className={styleQuiz.quizHeader}>
            <span className={styleQuiz.questionCount}>PERGUNTA 1/3</span>
            <p className={styleQuiz.question}>{currentQuestion.question}</p>
          </header>

          <h1>{correctAnswerCounter}</h1>

          <ul className={styleQuiz.answers}>
            {currentQuestion.answers.map((answer) => (
              <li key={answer} className={styleQuiz.answerItem}>
                <Answer
                  answer={answer}
                  question={currentQuestion}
                  checkAnswer={checkAnswer}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
