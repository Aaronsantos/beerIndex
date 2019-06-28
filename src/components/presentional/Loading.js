import React from "react";
import spinner from "../../assets/img/loading.gif";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  text-align: center;
  img {
    height: 6em;
  }
`;

export default function Loading() {
  return (
    <SpinnerWrapper>
      <img src={spinner} />
    </SpinnerWrapper>
  );
}
