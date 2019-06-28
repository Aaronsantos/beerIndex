import React from "react";
import styled from "styled-components";
import BeerTittle from "./BeerTittle";

const BeerListItemWrapper = styled.div`
  padding: 0.8em 0 0.8em 0;
  :hover {
    cursor: pointer;
    padding-left: 0.3em;
    background-color: rgba(247, 199, 0, 0.1);
    box-shadow: 0px 2px #f7c700;
  }
  & h4 {
    color: #f7c700;
  }
  transition: all 0.5s;
`;

export default function BeerListItem(props) {
  return (
    <BeerListItemWrapper onClick={props.click}>
      <BeerTittle name={props.name} tagline={props.tagline} />
    </BeerListItemWrapper>
  );
}
