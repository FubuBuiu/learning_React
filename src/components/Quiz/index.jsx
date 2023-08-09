import { useState } from "react";
import styleQuiz from "./styles.module.css";
import { Answer } from "../Answer";
import { Button } from "../Button";
import { Result } from "../QuizResult";

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
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswerCounter, setcorrectAnswerCounter] = useState(0);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const currentQuestion = QUESTIONS_MOCK[questionIndex];
  const [isFinishedQuiz, setIsFinishedQuiz] = useState(false);

  function checkAnswer(event, question, answer) {
    if (!isQuestionAnswered) {
      const isCorrectAnswer = question.correctAnswer === answer;
      const resultClassName = isCorrectAnswer
        ? styleQuiz.correct
        : styleQuiz.incorrect;

      if (isCorrectAnswer) {
        setcorrectAnswerCounter((counter) => counter + 1);
      }

      setIsQuestionAnswered(true);
      event.target.classList.toggle(resultClassName);
    }
  }

  function isTheLastQuestion() {
    return questionIndex + 1 === QUESTIONS_MOCK.length;
  }

  function nextQuestion() {
    if (!isTheLastQuestion()) {
      setQuestionIndex((index) => index + 1);
      setIsQuestionAnswered(false);
    } else {
      setIsFinishedQuiz(true);
    }
  }

  function restartQuiz() {
    setcorrectAnswerCounter(0);
    setQuestionIndex(0);
    setIsQuestionAnswered(false);
    setIsFinishedQuiz(false);
  }

  const textButton = isTheLastQuestion() ? "Ver resultado" : "Próxima pergunta";

  return (
    <div className={styleQuiz.container}>
      <div className={styleQuiz.card}>
        {!isFinishedQuiz ? (
          <div className={styleQuiz.quiz}>
            <header className={styleQuiz.quizHeader}>
              <span className={styleQuiz.questionCount}>
                PERGUNTA {questionIndex + 1}/{QUESTIONS_MOCK.length}
              </span>
              <p className={styleQuiz.question}>{currentQuestion.question}</p>
            </header>
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
            {isQuestionAnswered && (
              <Button onClick={nextQuestion}>{textButton}</Button>
            )}
          </div>
        ) : (
          <Result
            onClick={restartQuiz}
            correctAnswersCount={correctAnswerCounter}
            maxQuestions={QUESTIONS_MOCK.length}
          />
        )}
      </div>
    </div>
  );
}
