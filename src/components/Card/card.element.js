import styled from "@emotion/styled";
import { desktopScreen } from "config/styles/globalStyles";

export const CardWrapper = styled.div`
  width: ${props => props.detail ? 'auto' : '100%;'};
  background-color: ${props => props.detail ? '' : '#dee0e3;'};
  position: relative;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 0 rgba(#000, 0.2);
  cursor: ${props => props.detail ? '' : 'pointer'};
  transform: translateY(0);
  transition: all .25s ease;
  margin-top: ${props => props.detail ? '82px' : ''};
  margin-left: ${props => props.detail ? '40px' : ''};
  &:hover {
    transform: ${props => props.detail ? '' : 'translateY(-10px);'};
  }
  ${desktopScreen} {
    width: ${props => props.detail ? '400px' : '100%;'};
    max-width: ${props => props.detail ? '' : '175px;'};
  }
`

export const CardText = styled.p`
  display: ${props => props.detail ? 'none;' : 'block;'};
  padding: 8px;
  text-align: center;
  background-color: red;
  color: #FFFFFF;
  text-transform: capitalize;
  font-weight: 800;
`

export const CardImage = styled.img`
  margin: 0 auto;
  width: ${props => props.detail ? '350px' : '80px;'};
  height: ${props => props.detail ? 'auto' : '200px;'};
  ${desktopScreen} {
    width: ${props => props.detail ? '500px' : '80px;'};
  }
`

export const CardButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 0;
  background: transparent;
  border: none;
`