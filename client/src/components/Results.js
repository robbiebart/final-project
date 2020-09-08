import React from "react";
import styled from "styled-components";
// import flavours from "../images/flavours";

import carrotImage from "../images/flavours/AdobeStock_79226474.jpeg";
import vanillaImage from "../images/flavours/AdobeStock_79834586.jpeg";
import chocolateImage from "../images/flavours/AdobeStock_168584853.jpeg";
import blackoutImage from "../images/flavours/Blackout.jpg";
import funfettiImage from "../images/flavours/funfetti.jpg";
import lemonImage from "../images/flavours/lemon.jpg";
import redvelvetImage from "../images/flavours/red_velvet.jpg";

import buttercreamImage from "../images/icing/AdobeStock_5435269.jpeg";
import chocolateButtercreamImage from "../images/icing/AdobeStock_87717233.jpeg";
import berryButtercreamImage from "../images/icing/AdobeStock_196415142.jpeg";
import creamcheeseImage from "../images/icing/creamcheese.png";
import whippedcreamImage from "../images/icing/whippedcream.jpg";
import swissmeringueImage from "../images/icing/swissmeringue.jpg";
import ganacheImage from "../images/icing/ganache.jpg";

import maximalistImage from "../images/styles/IMG_4479.jpg";
import fruityImage from "../images/styles/IMG_4660.JPG";
import classicImage from "../images/styles/classic.png";
import floralImage from "../images/styles/floral.jpg";
import abstractImage from "../images/styles/abstract.jpg";
import minimalistImage from "../images/styles/minimalist.jpg";
import theworksImage from "../images/styles/theworks.JPG";

export default function Results({ answers }) {
  const selections = answers.filter((answer) =>
    answer.db_return.includes("selector")
  );

  let flav = selections.filter((result) => {
    return result.db_return.includes("selector_flav");
  });

  let icing = selections.filter((result) => {
    return result.db_return.includes("selector_icing");
  });

  let style = selections.filter((result) => {
    return result.db_return.includes("selector_style");
  });

  const cleaned = (arr) => {
    return arr[0].value.replace("_", " ");
  };
  console.log("icing", icing);
  console.log("cleaned", cleaned(icing));
  const prices = selections.map((selection) => selection.price);
  const total = prices.reduce((a, b) => {
    return a + b;
  });
  // reduce the array into an object with three matching keys

  const photos = {
    carrot: carrotImage,
    yellow_sponge: vanillaImage,
    chocolate: chocolateImage,
    blackout: blackoutImage,
    funfetti: funfettiImage,
    lemon: lemonImage,
    red_velvet: redvelvetImage,

    basic_buttercream: buttercreamImage,
    chocolate_buttercream: chocolateButtercreamImage,
    berry_buttercream: berryButtercreamImage,
    cream_cheese: creamcheeseImage,
    whipped_cream: whippedcreamImage,
    swiss_meringue: swissmeringueImage,
    ganache: ganacheImage,

    maximalist: maximalistImage,
    fruity: fruityImage,
    classic: classicImage,
    floral: floralImage,
    abstract: abstractImage,
    minimalist: minimalistImage,
    the_works: theworksImage,
  };
  return (
    <Wrapper>
      <Title id="Results">
        <h2>Your Results:</h2>
      </Title>
      <ResultComponent>
        <p>
          {selections[0].results_text}
          {selections[1].results_text}
          {selections[2].results_text}
        </p>
      </ResultComponent>
      <ResultComponent>
        <Info>Flavour: {cleaned(flav)}</Info>
        <Image src={photos[selections[0].value]} alt="cake" />
      </ResultComponent>
      <ResultComponent>
        <Info>Icing: {cleaned(icing)}</Info>
        <Image src={photos[selections[1].value]} alt="icing" />
      </ResultComponent>
      <ResultComponent>
        <Info>Style: {cleaned(style)}</Info>
        <Image src={photos[selections[2].value]} alt="style" />
      </ResultComponent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  grid-row-start: top;
  grid-row-end: first;
`;

const Info = styled.p`
  margin: 1px;
`;

const ResultComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 2px lightgray;
  margin: 10px;
  padding: 10px;
  background: lightgray;
  border-radius: 4px;

  @media (min-width: 680px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
  }
`;

// const Icing = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-bottom: solid 2px lightgray;
//   margin: 10px;

//   @media (min-width: 680px) {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     width: 80%;
//   }
// `;

// const Style = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-bottom: solid 2px lightgray;
//   margin: 10px;

//   @media (min-width: 680px) {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     width: 80%;
//   }
// `;

const Image = styled.img`
  width: 330px;
  height: 300px;
  margin: 10px;

  /* @media (min-width: 680px) {
    
  } */
`;

// const FlavourImage = styled.img`
//   width: 80%;
//   height: 80%;

//   @media (min-width: 600px){
//     grid-column-start: middle;
//     grid-column-end: end;
//     grid-row-start: ;
//   }
// `;

// const IcingImage = styled.img`
//   width: 80%;
//   height: 80%;

//   @media (min-width: 600px){
//     grid-column-start: middle;
//     grid-column-end: end;
//     grid-row-start: ;
//   }
// `;

// const StyleImage = styled.img`
//   width: 80%;
//   height: 80%;

//   @media (min-width: 600px){
//     grid-column-start: middle;
//     grid-column-end: end;
//     grid-row-start: ;
//   }
// `;
/*
add field called isSelector, assign to answers if true
then you'd return answer.isSelected in the filter
this would trim down the answers object

photos.flavours[selections[0].value]

radiobutton styling 

hash out pricing, for a database interaction
buy now button with the price
hooking up the buy now with stripe

 display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: [top] 10vh [first] 70vh [second] 70vh [third] 70vh [last];

  height: 100%;
  width: 100%;

  background: #fbc9b5;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: auto auto;
    /* grid-template-rows: [top] 10vh [first] 50vh [second] 50vh [third] 50vh [last]; */
