import styled from "@emotion/styled";
import { desktopScreen } from "config/styles/globalStyles";

const Button = styled.button`
  position: ${props => props.popup ? '' : 'fixed'};
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 71, 71);;
  cursor: pointer;
  opacity: 1;
  transition: all .25s ease;
  border-radius: 8px;
  &:hover {
      opacity: 0.7;
  }
  color: #FFFFFF;
  font-size: 16px;
  margin-top: ${props => props.popup ? '24px' : ''};
  ${desktopScreen} {
    position: initial;
    width: 280px;
  }
`;

export default Button;