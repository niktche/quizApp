import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./quizStyles";
import { Button, Container } from "@material-ui/core";
import Result from "./Result";

function Quiz({ amount, difficulty, category }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const API_URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;

  const classes = useStyles();
  const history = useHistory();

  const fetchQuestions = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const formatData = data.results.map((question) => {
      const incorrectAnswers = question.incorrect_answers.length;
      const randomIndex = Math.floor(Math.random() * incorrectAnswers);
      question.incorrect_answers.splice(
        randomIndex,
        0,
        question.correct_answer
      );

      return {
        ...question,
        allAnswers: question.incorrect_answers,
      };
    });
    setQuestions(formatData);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const goBack = () => {
    history.push("/");
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === questions[currentQuestion].correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  let result;
  if (showResult) {
    result = <Result correctAnswers={correctAnswers} />;
  }

  return questions.length > 0 ? (
    showResult ? (
      result
    ) : (
      <Container maxWidth="sm" className={classes.container}>
        <p>
          Question: {currentQuestion + 1} / {questions.length}
        </p>
        <div
          className={classes.question}
          dangerouslySetInnerHTML={{
            __html: questions[currentQuestion].question,
          }}
        ></div>
        <div>
          {questions[currentQuestion].allAnswers.map((answer) => (
            <Button
              variant="outlined"
              className={classes.btn}
              onClick={handleAnswer}
            >
              {answer}
            </Button>
          ))}
        </div>
        <Button variant="outlined" onClick={goBack} className={classes.goBack}>
          MAIN PAGE
        </Button>
      </Container>
    )
  ) : (
    <div className={classes.loading}>
      <p>Loading ... </p>
    </div>
  );
}

export default Quiz;
