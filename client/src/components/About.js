import React from "react";
import styled from "styled-components";
import Holly from "../assets/Holly.png";
import { Icon } from "react-icons-kit";
import { instagram } from "react-icons-kit/icomoon/instagram";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { twitter } from "react-icons-kit/icomoon/twitter";

export default function About() {
  return (
    <Wrapper>
      <BioColumn>
        <BioImage src={Holly} alt="baker" />
        <Links>
          <>
            <Icon icon={instagram} />
            <p>instagram</p>
          </>
          <>
            <Icon icon={facebook2} />
            <p>facebook</p>
          </>
          <>
            <Icon icon={twitter} />
            <p>twitter</p>
          </>
        </Links>
      </BioColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-row-start: third-line;
  grid-row-end: fourth-line;
  grid-column-start: main-start;

  margin: 20px 0px 0px 0px;

  height: 100%;
  width: 100%;

  display: grid;

  grid-template-columns: [first] 1fr [column2-start] 1fr [column3-start] 1fr [end];
  grid-template-rows: [top] 50px [second] auto;
`;
const BioImage = styled.img`
  width: 80%;
  border-radius: 50%;
`;

const BioColumn = styled.div`
  grid-column-start: first;
  grid-column-end: column2-start;
  grid-row-start: second;

  border-right: solid lightgray 2px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Links = styled.div`
  grid-column-start: first;
  grid-column-end: column2-start;
  color: #fbc9b5;
  border-top: solid 2px lightgray;
  margin-top: 20px;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BioText = styled.div`
  grid-column-start: column2-start;
  grid-row-start: second;
`;
