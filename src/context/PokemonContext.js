import React, { useEffect, useReducer, createContext } from 'react';

export const PokemonContext = createContext();


function pokemonReducer(myPokemonList, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...myPokemonList, action.payload.catchPokemon];
    case 'REMOVE_POKEMON':
      return myPokemonList.filter((val, idx) => idx !== action.payload.id)
    default:
      return myPokemonList;
  }
};

export const PokemonContextProvider = ({ children }) => {
  const [myPokemonList, dispatch] = useReducer(pokemonReducer, [], () => {
    const getLocalPokemon = localStorage.getItem('myPokemonList');
    const init = getLocalPokemon ? JSON.parse(getLocalPokemon) : [];
    return init
  });

  useEffect(() => {
    localStorage.setItem('myPokemonList', JSON.stringify(myPokemonList))
  }, [myPokemonList]);

  const value = {
    myPokemonList,
    dispatch
  }
  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
};