import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Wrapper>
      <Link to="/about">
        <h3>about</h3>
      </Link>
      <Link to="/cakes">
        <h3>cakes</h3>
      </Link>
      <Link to="/quiz">
        <h3>quiz</h3>
      </Link>
      <Link to="/order">
        <h3>order</h3>
      </Link>
      <Link to="/contact">
        <h3>contact</h3>
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
`;
