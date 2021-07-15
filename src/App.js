import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import HomePage from "./components/HomePage";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  const [questions, setQuestions] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const fetchcategories = async () => {
    const response = await fetch("https://opentdb.com/api_category.php");
    const categories = await response.json();
    setCategoryList(categories.trivia_categories);
  };
  useEffect(() => {
    fetchcategories();
  }, []);
  const handleQuestionQuantity = (event) => {
    setQuestions(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };
  const startQuiz = () => {
    history.push("/quiz");
  };
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage
          questions={questions}
          category={category}
          difficulty={difficulty}
          handleQuestionQuantity={handleQuestionQuantity}
          handleCategory={handleCategory}
          handleDifficulty={handleDifficulty}
          categoryList={categoryList}
          startQuiz={startQuiz}
        />
      </Route>

      <Route path="/quiz">
        <Quiz amount={questions} difficulty={difficulty} category={category} />
      </Route>

      <Route path="/result">
        <Result />
      </Route>
    </Switch>
  );
}

export default App;
