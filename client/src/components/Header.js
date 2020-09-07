import React from "react";
import styled from "styled-components";

import NavBar from "./Nav/NavBar";
import Title from "../assets/title.PNG";

export default function Header() {
  return (
    <>
      <Banner>
        <Logo src={Title} alt="logo" />
      </Banner>
      <Nav>
        <NavBar />
      </Nav>
    </>
  );
}

const Banner = styled.div`
  grid-column-start: column1-start;
  grid-column-end: end;

  @media (min-width: 680px) {
    grid-column-start: first;
    grid-column-end: end;

    grid-row-start: row1-start;
    grid-row-end: nav-start;
  }

  /* background: rgb(253, 245, 233); */
  background: #fbc9b5;
  color: white;

  h1 {
    font-size: 3.5em;
    color: white;
  }

  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  height: 75%;
`;

const Nav = styled.div`
  grid-column-start: first;
  grid-column-end: end;

  grid-row-start: nav-start;
  border: solid blue 2px;

  @media (min-width: 680px) {
    grid-column-start: first;
    grid-column-end: end;

    grid-row-start: nav-start;
    grid-row-end: third-line;
  }
  /* overflow: hidden; */
`;
