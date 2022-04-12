import styled from "@emotion/styled";

export const type_colors = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

export const desktopScreen = `@media only screen and (min-width: 1280px)`;
export const tableScreen = `@media only screen and (min-width: 600px)`;
export const clearfix = `
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${clearfix};
  width: 100%;
  @media (min-width: 1025px) {
    max-width: 1025px;
    padding: 0 1.2rem;
  }
`

export const Row = styled.div`
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 1025px) {
    margin-left: -12px;
    margin-right: -12px;
  }
`