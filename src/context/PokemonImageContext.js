import React, { useEffect, useState, createContext } from 'react';

export const PokemonImageContext = createContext();

export const PokemonImageContextProvider = ({ children }) => {
  const [pokemonImg, setPokemonImg] = useState(() => {
    const getLocalPokemon = localStorage.getItem('pokemonImg');
    const init = getLocalPokemon ? JSON.parse(getLocalPokemon) : {}
    return init
  });
  
  useEffect(() => {
    localStorage.setItem('pokemonImg', JSON.stringify(pokemonImg));
  }, [pokemonImg]);

  const value = {
    pokemonImg,
    setPokemonImg
  }
  return (
    <PokemonImageContext.Provider value={value}>
      {children}
    </PokemonImageContext.Provider>
  )
};