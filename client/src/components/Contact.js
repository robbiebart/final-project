import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper>
      <h1>Contact!</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-row-start: third-line;
  grid-row-end: fourth-line;
  grid-column-start: main-start;
`;
