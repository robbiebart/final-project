import React, { useState } from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavLinks open={open} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  height: 50px;
  padding: 5px;
  margin: 5px;

  div {
    width: 3rem;
    height: 0.55rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#fbc9b5")};
    border-radius: 10px;
  }

  @media (min-width: 680px) {
    display: none;
  }
`;
