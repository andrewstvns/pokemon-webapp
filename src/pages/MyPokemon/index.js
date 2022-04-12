import React, { Suspense, useContext } from 'react';
import { PokemonContext } from 'context/PokemonContext';
import { 
  MyPokemonH1,
  MyPokemonH2,
  MyPokemonListWrapper,
  MyPokemonListContent,
  MyPokemonContent,
  MyPokemonListUL,
  MyPokemonListLI
} from './myPokemon.element';
import { Container, Row } from 'config/styles/globalStyles';
import { Card, Loader } from 'components';

const MyPokemon = () => {
  const {myPokemonList, dispatch} = useContext(PokemonContext);

  const handleRemove = (idx) => {
    console.log(idx);
    dispatch({type: 'REMOVE_POKEMON', payload: {id: idx}})
  };

  return (
    <MyPokemonListWrapper>
      <Container>
        <Row>
          <MyPokemonH1>My Pokemon List</MyPokemonH1>
          <MyPokemonListContent>
            <MyPokemonContent>
              <MyPokemonListUL>
                {myPokemonList.length === 0 ? (
                  <div><MyPokemonH2>You don't have any Pokemons!</MyPokemonH2></div>
                ) : (
                  <>
                    {myPokemonList.map((val, idx) => (
                      <Suspense fallback={<Loader />} key={idx}>
                        <MyPokemonListLI>
                          <Card
                            variant='details'
                            img={val.img}
                            name={val.nickname}
                            onClickRemove={(e) => handleRemove(idx)}
                          />
                        </MyPokemonListLI>
                      </Suspense>
                    ))}
                  </>
                )}
              </MyPokemonListUL>
            </MyPokemonContent>
          </MyPokemonListContent>
        </Row>
      </Container>
    </MyPokemonListWrapper>
  )
};

export default MyPokemon;