import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      {/* <Grid> */}
      <BioColumn>
        <p>
          hi! i'm holly.
          <br /> welcome to my site! this is a diary about food, farm life, and
          adventures. have a look around and enjoy!
        </p>
      </BioColumn>
      {/* </Grid> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-row-start: third-line;
  grid-row-end: fourth-line;
  grid-column-start: main-start;
  /* border: solid red 2px; */

  margin: 20px 0px 0px 0px;

  /* border: solid blue 2px; */
  height: 100%;
  width: 100%;

  display: grid;

  grid-template-columns: [first] 1fr [column2-start] 1fr [column3-start] 1fr [column4-start] 1fr [end];
  grid-template-rows: [top] 50px [second] auto;
`;

// const Grid = styled.div`
//   border: solid blue 2px;
//   height: 100%;
//   width: 100%;

//   display: grid;

//   grid-template-columns: [first] 1fr [column2-start] 1fr [column3-start] 1fr [column4-start] 1fr [end];
//   grid-template-rows: [top] 50px [second] auto;
// `;

const BioColumn = styled.div`
  grid-column-start: first;
  grid-column-end: column2-start;
  grid-row-start: second;

  border-right: solid lightgray 2px;
`;
