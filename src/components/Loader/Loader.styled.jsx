import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderSt = styled.div`
display: inline-block;
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;


  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3f51b5;
    border-color: #3f51b5 transparent #3f51b5 transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }


`