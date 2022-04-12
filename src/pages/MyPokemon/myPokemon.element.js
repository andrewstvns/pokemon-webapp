import styled from "@emotion/styled";
import { clearfix, desktopScreen } from "config/styles/globalStyles";

export const MyPokemonH1 = styled.h1`
  margin: 24px 12px;
  ${desktopScreen} {
    margin: 24px;
    margin-left: 12px;
  }
`

export const MyPokemonH2 = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const MyPokemonListWrapper = styled.div`
  min-height: 100vh;
`
export const MyPokemonListContent = styled.div`
  display: table;
  width: 100%;
  min-height: 100vh;
`

export const MyPokemonContent = styled.div`
  text-align: center;
  ${clearfix};
`

export const MyPokemonListUL = styled.ul`
  margin: 0;
  padding: 0;
`

export const MyPokemonListLI = styled.li`
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
