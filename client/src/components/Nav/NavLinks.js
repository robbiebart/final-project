import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavLinks() {
  return (
    <Links>
      <Link to="/about">
        <li>about</li>
      </Link>
      <Link to="/cakes">
        <li>cakes</li>
      </Link>
      <Link to="/quiz">
        <li>quiz</li>
      </Link>
      <Link to="/order">
        <li>order</li>
      </Link>
      <Link to="/contact">
        <li>contact</li>
      </Link>
    </Links>
  );
}

const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: grey;
  display: none;

  li {
    color: #f86624;
    color: #fbc9b5;
    font-size: 1.5rem;

    &:hover {
      color: #f9c80e;
    }
  }

  @media (min-width: 680px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
    }

    height: 100%;
    margin: 1%;
    border-top: solid 2px lightgray;
    border-bottom: solid 2px lightgray;

    li {
      /* color: #f86624; */
      color: #fbc9b5;

      &:hover {
        color: #f9c80e;
      }
    }
  }
`;
