import React from "react";
import { useStyles } from "./homePageStyles";
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Button,
  Container,
} from "@material-ui/core";

function HomePage(props) {
  const classes = useStyles();

  const enableButton = () => {
    if (props.questions && props.category && props.difficulty) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <p>Please Select:</p>
        <form>
          <FormControl
            variant="filled"
            className={classes.formControl}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Number of Questions
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={props.questions}
              onChange={props.handleQuestionQuantity}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            variant="filled"
            className={classes.formControl}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={props.category}
              onChange={props.handleCategory}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {props.categoryList.map((category) => (
                <MenuItem value={category.id} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            variant="filled"
            className={classes.formControl}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Difficulty
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={props.difficulty}
              onChange={props.handleDifficulty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>

            <Button
              variant="outlined"
              className={classes.btn}
              onClick={props.startQuiz}
              disabled={!enableButton()}
            >
              START A QUIZ
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
}

export default HomePage;
