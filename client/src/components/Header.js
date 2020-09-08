import React from "react";
import styled from "styled-components";

import NavBar from "./Nav/NavBar";
import Title from "../assets/title.PNG";

import NavLinks from "./Nav/NavBar";
import Burger from "./Nav/Burger";

export default function Header() {
  return (
    <HeaderDiv>
      <Banner>
        <Logo src={Title} alt="logo" />
      </Banner>
      <Nav>
        <Burger />
      </Nav>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  grid-column-start: column1-start;
  grid-column-end: end;

  grid-row-start: row1-start;
  grid-row-end: nav-end;

  display: flex;
  flex-direction: column;

  @media (min-width: 680px) {
    grid-column-start: first;
    grid-column-end: end;

    grid-row-start: row1-start;
    grid-row-end: third-line;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;

  height: 250px;
  background: #fbc9b5;
  color: white;

  @media (min-width: 680px) {
    grid-column-start: first;
    grid-column-end: end;

    grid-row-start: row1-start;
    grid-row-end: nav-start;

    height: 250px;
  }
`;

const Logo = styled.img`
  height: 9.5rem;
  margin-top: 50px;
`;

const Nav = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: 680px) {
    height: 110px;
  }
`;

/* grid-column-start: column1-start;
  grid-column-end: end;

  grid-row-start: nav-start;
  grid-row-end: third-line;

  height: 100%;
  width: 100%;

  border: solid yellow 5px;

  @media (min-width: 680px) {
    grid-column-start: first;
    grid-column-end: end;

    grid-row-start: nav-start;
    grid-row-end: third-line; 
  }*/
