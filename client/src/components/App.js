import React, { useState } from "react";
// import Answers from "./Answers";
// import Question from "./Question";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Cakes from "./Cakes";
import Contact from "./Contact";
import Order from "./Order";
import QuestionArea from "./QuestionArea";

function App() {
  // const [currentQuestion, setCurrentQuestion] = useState("001");
  // const [answers, updateAnswers] = useState([]);
  // const [error, setError] = useState(null);
  // const handleAnswer = (answer) => {
  //   // TODO: handle viewport scroll
  //   /*
  //   hook into handleanswer, in onSelect, then do scrolltintoview
  //   var elmnt = document.getElementById("content");elmnt.scrollIntoView();
  //   */
  //   updateAnswers([...answers, answer]);
  //   setCurrentQuestion(answer.next);
  // };
  // const handleSubmit = async () => {
  //   // do database submission!
  //   console.dir(answers);
  //   try {
  //     const response = await fetch("/cake", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 'Authorization': `Bearer ${store.get('token')}`
  //       },
  //       body: JSON.stringify(answers),
  //     });

  //     const created = await response.json();
  //     console.dir(created);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <Router>
      <Grid>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/cakes" exact component={Cakes} />
          <Route path="/order" exact component={Order} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" component={QuestionArea} />
          {/* <Route
            path="/"
            render={() => (
              <QuestionArea>
                <QuizTitle>Cake questionaire</QuizTitle>
                <Answers answers={answers} />
                <Question
                  setQuestion={setCurrentQuestion}
                  questionId={currentQuestion}
                  handleAnswer={handleAnswer}
                />
                {currentQuestion === "submit" ? (
                  <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                ) : null}
                {error && (
                  <>
                    <h4>Woops, failed to save this cake, it must be too lit</h4>
                    <p>{error.message}</p>
                  </>
                )}
              </QuestionArea> }
                )} />*/}
        </Switch>
      </Grid>
    </Router>
  );
}

const Grid = styled.div`
  border: solid 2px red;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: [first] 5vw [main-start] auto [main-end] 5vw [end];
  grid-template-rows:
    [row1-start] 35vh [nav-start] 100px [third-line] calc(100% - 75px)
    [fourth-line];
  grid-auto-rows: minmax(300px, auto);
`;

// const QuizTitle = styled.h1``;

// const QuestionArea = styled.div`
//   grid-row-start: third-line;
//   grid-row-end: fourth-line;
//   grid-column-start: main-start;
// `;

// const SubmitButton = styled.button`
//   padding: 0.5rem 1rem;
//   margin: 1rem 0;
//   background-color: #ffc0cb70;
//   border-radius: 4px;
//   border: solid 1px pink;
//   box-shadow: 1px 1px gray;
//   opacity: 0.9;
//   font-family: "Cabin", sans-serif;
//   &:hover {
//     cursor: pointer;
//   }
// `;

export default App;

/*
quiz has to resolve into "this is what you got" is a core functionality
"buy this cake" 
the checkout flow

 styling
- gen quiz result, perhaps price?
- buy cake on submit (sprite)
*/
