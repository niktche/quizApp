import React from "react";
import { Button, Container } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStyles } from "./resultStyles";

function Result({ correctAnswers }) {
  const classes = useStyles();
  const history = useHistory();
  const reset = () => {
    history.push("/");
  };
  return (
    <div className={classes.finalResult}>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.result}>
          <p>Your Result:</p>
          <p>
            You have {correctAnswers} correct{" "}
            {correctAnswers > 1 ? "answers." : "answer."}
          </p>
          <Button variant="outlined" onClick={reset} className={classes.btn}>
            TRY AGAIN
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Result;
