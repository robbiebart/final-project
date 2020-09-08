import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavLinks({ open }) {
  return (
    <Links open={open}>
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
  /* display: flex; */
  flex-flow: column;
  align-items: center;
  background-color: grey;
  width: 100%;
  /* position: fixed; */
  /*
not sure how to make the nav position fixed, as this messes with the mobile viewer
  */

  display: ${({ open }) => (open ? "flex" : "none")};

  li {
    color: #f86624;
    color: #fbc9b5;
    font-size: 1.5rem;

    &:hover {
      color: #f9c80e;
    }
  }

  .scrolled {
    position: fixed;
    top: 0;
    left: 0;
    background-color: lightblue;
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
