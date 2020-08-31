import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Wrapper>
      <Link to="/about">
        <h2>about</h2>
      </Link>
      <Link to="/cakes">
        <h2>cakes</h2>
      </Link>
      <Link to="/quiz">
        <h2>quiz</h2>
      </Link>
      <Link to="/order">
        <h2>order</h2>
      </Link>
      <Link to="/contact">
        <h2>contact</h2>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  margin: 1%;
  border-top: solid 2px lightgray;
  border-bottom: solid 2px lightgray;

  h2 {
    color: #f86624;

    &:hover {
      color: #f9c80e;
    }
  }
`;
