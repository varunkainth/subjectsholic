import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import question from "../Json/Quiz";
import "./quiz.css";

const Quiz = () => {
  const [quizdata, setquizdata] = useState(question);
  const [currentques, setcurrentques] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  const {isCorrected} = quizdata[0].anserOption 
  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setscore(score + 1);
    }
    const nextQuestion = currentques + 1;
    if (nextQuestion < quizdata.length) {
      setcurrentques(nextQuestion);
    } else {
      setshowScore(true);
    }
  };
  const navigate = useNavigate();
  const restart = ()=>{
    navigate('/course')
  };
  return (
    <>
      <div className="main_quiz">
        <div className="app">
          {showScore ? (
            <div className="score_section">
              You scored {score} out of {quizdata.length}
              <button className="quizbtn" onClick={restart}>Restart</button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question_count">
                  <span>Question {currentques + 1}</span> / {quizdata.length}
                </div>
                <div className="question_text">
                  {quizdata[currentques].questionText}
                </div>
              </div>
              <div className="answer_section">
                {quizdata[currentques].anserOption.map((answerOption) => (
                  <button
                    className={isCorrected?"quizbtn correct":"quizbtn"}
                    onClick={() => handleAnswerOption(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
