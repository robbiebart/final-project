import React from "react";

export default function Results({ answers }) {
  const cake = {};

  const selections = answers.filter((answer) =>
    answer.db_return.includes("selector")
  );

  const prices = selections.map((selection) => selection.price);
  const total = prices.reduce((a, b) => {
    return a + b;
  });
  // reduce the array into an object with three matching keys
  return (
    <div>
      <p>
        You got a {selections[0].label} cake, with {selections[1].label} icing
        in the {selections[2].label} style! The cost is ${total}.
      </p>
    </div>
  );
}

/*
add field called isSelector, assign to answers if true
then you'd return answer.isSelected in the filter
this would trim down the answers object

radiobutton styling 

hash out pricing, for a database interaction
buy now button with the price
hooking up the buy now with stripe
*/
