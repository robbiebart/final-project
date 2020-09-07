import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import Burger from "./Burger";

export default function NavBar() {
  return (
    <Wrapper>
      <NavLinks />
      <Burger />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
`;
