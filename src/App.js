import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "js stands for ________",
      answers: ["javaScript", "html", "ytdjk", "dhhjf"],
      correctAnswer: "javaScript",
    },
    {
      question: "html stands for ________",
      answers: [
        "javaScript",
        "hyper text markup language",
        "ytdjk",
        "ghszkjds",
      ],
      correctAnswer: "hyper text markup language",
    },
    {
      question: "css stands for ________",
      answers: ["javaScript", "html", "css"],
      correctAnswer: "css",
    },
    {
      question: "AI stands for ________",
      answers: ["javaScript", "html", "artificial intelligence"],
      correctAnswer: "artificial intelligence",
    },
    {
      question: "cpu stands for ________",
      answers: ["javaScript", "html", "cpu"],
      correctAnswer: "cpu",
    },
    {
      question: "computer iss a  ________",
      answers: ["processor", "html", "cpu", "machine"],
      correctAnswer: "machine",
    },
    {
      question: "computer iss a  ________",
      answers: ["processor", "html", "cpu", "machine"],
      correctAnswer: "machine",
    },
  ]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [result, setResult] = useState(false);
  const perAnswerMarks = 2;

  const checkIndex = (e) => {
    if (index + 1 !== questions.length) {
      setIndex(index + 1);
    } else {
      setIndex(index);
      setResult(true);
    }

    if (e == questions[index].correctAnswer) {
      setScore(score + perAnswerMarks);
    } else {
      setScore(score);
    }
  };

  return (
    <div className="main">
      <div className="container">
        {!result ? (
          <div className="display">
            <div className="topPart">
              <h2>Quiz App</h2>
              <h4 className="fs-4">
                Question : <span className="fs-1 text-danger">{index + 1}</span>
                /<span>{questions.length}</span>
              </h4>
            </div>
            <div className="secondPart">
              <h4 className="fs-4">{questions[index].question}</h4>
              <div className="options">
                {questions[index].answers.map((e, i) => (
                  <button
                    onClick={() => {
                      checkIndex(e);
                    }}
                    key={i}
                  >
                    {" "}
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="display Result">
            <div className="resultTopPart">
              <h2>Result</h2>
            </div>
            <div className="resultBar">
              <h3 className="fw-bold my-5">
                <span className="fw-bold ">Score : </span>{" "}
                <span className="text-danger fw-bold fs-1">{score}</span> /{" "}
                <span>{perAnswerMarks * questions.length}</span>
              </h3>
              <h4 className="my-3">
                <span className="fw-bold">Percentage : </span>
                <span className="text-danger fw-bold fs-1">
                  {(
                    (score / (perAnswerMarks * questions.length)) *
                    100
                  ).toFixed(2)}
                  %
                </span>{" "}
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
