import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <Wrapper>
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
  </Wrapper>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 175px;
  height: 175px;
  
  & .path {
    stroke: #521751;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export default Spinner;