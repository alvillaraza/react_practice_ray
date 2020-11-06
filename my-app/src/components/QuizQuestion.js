import React, { useState } from "react";

import './QuizQuestion.css';

function QuizQuestion({ currentSlide, index, question, score, setScore }) {
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState(null);

  function checkAnswer(answer) {
    setAnswered(true);
    if (answer.isCorrect) {
      setResponse(true);
      setScore(score + 1);
    } else {
      setResponse(false);
    }
    console.log("score", answer);
  }

  return (
    <div
      className={`question-container ${
        answered
          ? response
            ? "question-container-border-correct"
            : "question-container-border-incorrect"
          : ""
      } ${currentSlide === index ? "show-slide" : "hide-slide"}`}
    >
      <div className="question-number">Question #{index + 1}</div>
      <p className="question-image-container">
        <img src={question.image} className='question-image' alt='ACNH illustration pertaining to question' />
      </p>
      <h3 className="question speech-bubble-light"> {question.question}</h3>
      <div className="answers-container speech-bubble-brown">
        {question.answers.map((answer) => {
          return (
            <div className="hover-pointer">
              <i class="far fa-hand-point-right"></i>
              <button
                className="answer-button-container"
                onClick={() => checkAnswer(answer)}
              >
                {answer.answer}
              </button>
            </div>
          );
        })}
      </div>
      <div
        className={`validation-container
            ${answered ? "show" : "hide"}
            ${response ? "result-correct" : "result-incorrect"}`}
      >
        {response === true ? "Answer Correct" : "Wrong"}
      </div>
    </div>
  );
}

export default QuizQuestion;
