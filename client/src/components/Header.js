import React from "react";
import styled from "styled-components";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <Banner>
        <h1>best cake scenario</h1>
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

  /* background: rgb(253, 245, 233); */
  background: #f86624;
  color: white;

  h1 {
    font-size: 3.5em;
    color: white;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Nav = styled.div`
  grid-column-start: main-start;
  grid-column-end: main-end;

  grid-row-start: nav-start;
  grid-row-end: third-line;

  /* overflow: hidden; */
`;
