import styled from "@emotion/styled";
import { clearfix, desktopScreen } from "config/styles/globalStyles";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 68px;
  background-color: rgb(255, 71, 71);
`
export const HeaderCentering = styled.div`
  display: flex;
  justify-content: center;
  ${desktopScreen} {
    padding: 8px 0;
  }
`

export const HeaderList = styled.ul`
  margin: 0;
  padding: 0;
  ${clearfix}
`

export const HeaderContent = styled.li`
  text-align: center;
  float: left;
  font-weight: 800;
  cursor: pointer;
  color: white;
  transition: all 0.25s ease;
  padding: 24px 0;
  margin-left: 12px;
  &:hover {
    opacity: 0.6;
  }
  ${desktopScreen} {
    margin-left: 4rem;
    font-size: 1.2rem;
    padding: 1.2rem 0;
  }
`