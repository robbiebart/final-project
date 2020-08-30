import React from "react";
import styled from "styled-components";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <Banner>
        <h1>best cake scenario!</h1>
      </Banner>
      <Nav>
        <NavBar />
      </Nav>
    </>
  );
}

const Banner = styled.div`
  grid-column-start: first;
  grid-column-end: end;

  grid-row-start: row1-start;
  grid-row-end: nav-start;

  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 4em;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Nav = styled.div`
  grid-column-start: first;
  grid-column-end: end;

  grid-row-start: nav-start;
  grid-row-end: third-line;
  background: rgb(253, 245, 233);
`;
