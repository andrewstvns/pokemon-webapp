import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { desktopScreen } from "config/styles/globalStyles";

const rotateAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`

const animatedCircle = keyframes`
  0%,
  100% {
    stroke-dashoffset: 440;
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: 880;
  }
`

export const LoaderWrapper = styled.div`
  opacity: 1;
  visibility: visible;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
`

export const LoaderSVG = styled.svg`
  opacity: 1;
  visibility: visible;
  width: 150px;
  height: 150px;
  position: absolute;
  top: 35%;
  left: 35%;
  animation: ${rotateAnimation} 2s linear infinite;
  ${desktopScreen} {
    top: 45%;
    left: 45%;
  }
`

export const LoaderCircle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10;
  stroke: rgb(255, 71, 71);
  stroke-linecap: round;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  transform: translate(5px, 5px);
  animation: ${animatedCircle} 4s linear infinite;
`