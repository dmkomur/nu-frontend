import styled, { keyframes } from "styled-components";
import materialPalette from "../../../styles/palette";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid ${materialPalette.secondaryVariant};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin: auto;
`;
