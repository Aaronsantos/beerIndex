import styled from "styled-components";
import React from "react";

const BeerTittleWrapper = styled.div`
  & h2 {
    font-size: 1.6em;
    font-weight: normal;
    margin: 0;
  }
  & h4 {
    margin: 0;
    font-size: 1em;
    font-weight: lighter;
    color: #f7c700;
  }
`;

export default function BeerTittle(props) {
  return (
    <BeerTittleWrapper>
      <h2>{props.name}</h2>
      <h4>{props.tagline}</h4>
    </BeerTittleWrapper>
  );
}
