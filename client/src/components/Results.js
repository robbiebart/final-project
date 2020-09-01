import React from "react";
import styled from "styled-components";
// import flavours from "../images/flavours";
import carrotImage from "../images/flavours/AdobeStock_79226474.jpeg";
import vanillaImage from "../images/flavours/AdobeStock_79834586.jpeg";
import chocolateImage from "../images/flavours/AdobeStock_168584853.jpeg";

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

  const photos = {
    flavours: {
      carrot: carrotImage,
      vanilla: vanillaImage,
      chocolate: chocolateImage,
    },
  };
  return (
    <div>
      <p>
        You got a {selections[0].label} cake, with {selections[1].label} icing
        in the {selections[2].label} style! The cost is ${total}.
      </p>
      <Gallery>
        {console.log("selections", selections)}
        {console.log("photos", photos.flavours)}
        <Image
          src="../src/images/flavours/AdobeStock_79834586.jpeg"
          alt="cake"
        />
      </Gallery>
    </div>
  );
}

const Gallery = styled.div`
  border: solid red 2px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Image = styled.img`
  height: 30%;
  width: 30%;
`;
/*
add field called isSelector, assign to answers if true
then you'd return answer.isSelected in the filter
this would trim down the answers object

photos.flavours[selections[0].value]

radiobutton styling 

hash out pricing, for a database interaction
buy now button with the price
hooking up the buy now with stripe
*/
