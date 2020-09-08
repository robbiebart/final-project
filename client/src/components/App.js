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
        </Switch>
      </Grid>
    </Router>
  );
}

const Grid = styled.div`
  /* border: solid 2px red; */
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: [column1-start] 100% [end];
  grid-template-rows:
    [row1-start] auto [nav-end] auto [third-line] calc(100% - 75px)
    [fourth-line];

  @media (min-width: 680px) {
    display: grid;
    grid-template-columns: [first] 5% [main-start] auto [main-end] 5% [end];
    grid-template-rows:
      [row1-start] 35% [nav-start] 100px [third-line] calc(100% - 75px)
      [fourth-line];
    grid-auto-rows: minmax(300px, auto);
  }
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
