import React, { useState, useEffect, Suspense, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from 'graphql/queries';
import { PokemonImageContext } from 'context/PokemonImageContext';
import {
  PokemonListH1,
  PokemonListWrapper,
  PokemonContent,
  UL,
  LI, 
  PokemonListContent
} from './pokemonList.element';

// Components
import { Card, Loader } from 'components';
import { Container, Row } from 'config/styles/globalStyles';

const PokemonList = () => {
  const {data, loading} = useQuery(GET_POKEMONS);
  const {setPokemonImg} = useContext(PokemonImageContext);
  const [pokemonList, setpokemonList] = useState();


  useEffect(() => {
    if (data) {
      setpokemonList(data.pokemons.results);
      console.log(data);
    }
  }, [data]);

  const handleGetPokemonImage = (data) => {
    console.log(data.dreamworld);
    let dreamWorld =  data.dreamworld;
    console.log(dreamWorld);
    setPokemonImg({
      dreamworld: dreamWorld
    })
  }

  return (
    <PokemonListWrapper>
      <Container>
        <Row>
          <PokemonListH1>Pokemon List</PokemonListH1>
            <PokemonListContent>
              <PokemonContent>
                <UL>
                  {loading && (
                    <Loader />
                  )}
                  {pokemonList && (
                    <>
                      {pokemonList.map((val, id) => (
                        <Suspense fallback={<Loader />} key={id}>
                          <LI>
                            <Card 
                              data={val} 
                              key={id} 
                              variant='link-list'
                              handleGetPokemonImage={(e) => handleGetPokemonImage(val)} 
                            >
                              {val.name}
                            </Card>
                          </LI>
                        </Suspense>
                      ))}
                    </>
                  )}
                </UL>
              </PokemonContent>
            </PokemonListContent>
        </Row>
      </Container>
    </PokemonListWrapper>
  )
};

export default PokemonList;