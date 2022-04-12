import { lazy } from "react";

const PokemonList = lazy(() => import('./PokemonList'));
const PokemonDetail = lazy(() => import('./PokemonDetail'));
const MyPokemon = lazy(() => import('./MyPokemon'));

export {
  PokemonList,
  PokemonDetail,
  MyPokemon
};