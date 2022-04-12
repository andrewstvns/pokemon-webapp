import styled from "@emotion/styled";
import { clearfix, desktopScreen } from "config/styles/globalStyles";

export const PokemonListH1 = styled.h1`
  margin: 24px 12px;
  ${desktopScreen} {
    margin: 24px;
    margin-left: 12px;
  }
`

export const PokemonListWrapper = styled.div`
  min-height: 100vh;
`
export const PokemonListContent = styled.div`
  display: table;
  width: 100%;
  min-height: 100vh;
`

export const PokemonContent = styled.div`
  text-align: center;
  ${clearfix};
`

export const UL = styled.ul`
  margin: 0;
  padding: 0;
`

export const LI = styled.li`
  display: inline-block;
  width: 100%;
  margin-bottom: 12px;
  padding: 0 12px;
  ${desktopScreen} {
    display: inline-block;
    width: 20%;
    margin-bottom: 12px;
    padding: 0 12px;
  }
`
