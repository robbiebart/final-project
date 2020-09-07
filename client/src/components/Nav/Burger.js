import React from "react";
import styled from "styled-components";

export default function Burger() {
  return (
    <StyledBurger>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
}

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  height: 100%;
  width: 100%;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fbc9b5;
  }
`;
