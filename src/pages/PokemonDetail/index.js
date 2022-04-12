import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from 'graphql/queries';
import { PokemonContext } from 'context/PokemonContext';
import { PokemonImageContext } from 'context/PokemonImageContext';
import { type_colors, Container, Row } from 'config/styles/globalStyles';
import { 
  PokemonDetailWrapper,
  PokemonDetailContent 
} from './pokemonDetail.element';

// Components
import { Button, CardDetail, Loader, Popup, PopupInformation } from 'components';

const PokemonDetail = () => {
  const { name } = useParams();
  const gqlVar = {'name': name};
  const {loading, data} = useQuery(GET_POKEMON_DETAILS, {
    variables: gqlVar
  });

  const {myPokemonList, dispatch} = useContext(PokemonContext);
  const {pokemonImg} = useContext(PokemonImageContext);
  const [getPokemon, setGetPokemon] = useState();
  const [getPokemonImage] = useState(pokemonImg.dreamworld);
  const [getPokemonType, setGetPokemonType] = useState([]);
  const [getPokemonStats, setGetPokemonStats] = useState({
    hp: 0,
    attack: 0,
    def: 0,
    spAtt: 0,
    spDef: 0,
    speed: 0
  });
  const [getPokemonMoves, setGetPokemonMoves] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isCatdhed, setIsCatched] = useState(false);
  const [catchPokemon, setCatchPokemon] = useState({
    id: 0,
    nickname: '',
    img: pokemonImg.dreamworld
  });
  const [pokeColors, setPokeColors] = useState('');
  const [ownedPokemon, setOwnedPokemon] = useState();
  const [buttonText, setButtonText] = useState('');
  const [buttonTextInfo, setButtonTextInfo] = useState('Try Again');
  const [messagePopup, setMessagePopup] = useState('');
  const [showPopupInfo, setShowPopupInfo] = useState(false);

  useEffect(() => {
    // Variable Local
    let { hp, attack, defense, specialAttack, specialDefense, speed } = '';
    if (data) {
      setGetPokemon(data.pokemon);
      setCatchPokemon({
        id: data.pokemon.id,
        img: pokemonImg.dreamworld
      });

      // START Get Stats Pokemon
      let getStats = data.pokemon.stats;
      getStats.map((val) => {
        let statName = val.stat.name;
        switch (statName) {
          case 'hp':
            hp = val['base_stat'];
            break;
          case 'attack':
            attack = val['base_stat'];
            break;
          case 'defense':
            defense = val['base_stat'];
            break;
          case 'special-attack':
            specialAttack = val['base_stat'];
            break;
          case 'special-defense':
            specialDefense = val['base_stat'];
            break;
          case 'speed':
            speed = val['base_stat'];
            break;
          default:
            break;
        }
        return getStats;
      });
      setGetPokemonStats({
        hp: hp,
        attack: attack,
        def: defense,
        spAtt: specialAttack,
        spDef: specialDefense,
        speed: speed
      });
      // End Get Stats Pokemon

      // START Get Moves Pokemon
      let moves = data.pokemon.moves;
      setGetPokemonMoves(moves.map((val) => val.move.name))
      // END Get Moves Pokemon

      // START Get Types Pokemon
      let types = data.pokemon.types;
      setGetPokemonType(types.map((val) => val.type.name));
      // END Get Moves Pokemon

      // START Get Colors Pokemon
      setPokeColors(data.pokemon.types[0].type.name);
      // END Get Colors Pokemon
    };
  }, [data]);

  useEffect(() => {
    const getOwnedPokemon = myPokemonList.filter(val => val.nickname === catchPokemon.nickname)
    setOwnedPokemon(getOwnedPokemon.map((val) => val.nickname));
  }, [catchPokemon, myPokemonList])

  const handleShowPopup = () => {
    let rand = Math.random();
    if (rand < 0.5) {
      setIsShow(true);
      setShowPopupInfo(false);
      setIsCatched(true);
      setButtonText('Submit');
    } else {
      setShowPopupInfo(true);
      setIsShow(false);
      setIsCatched(false);
      setButtonText('Try Again');
      setMessagePopup('Failed to catch the Pokemon!');
    }
  };

  const handleChangeNewPokemon = (e) => {
    setCatchPokemon({...catchPokemon, nickname:e.target.value});
  };

  const handleSubmit = () => {
    if(ownedPokemon.indexOf(catchPokemon.nickname) > -1){
      setMessagePopup('Nickname Already Exists!');
      setShowPopupInfo(true);
    }
    if (isCatdhed === true && ownedPokemon.indexOf(catchPokemon.nickname) === -1) {
      dispatch({type: 'ADD_POKEMON', payload: {catchPokemon: catchPokemon}});
      setMessagePopup('Success add new Pokemon!');
      setShowPopupInfo(true);
      setButtonTextInfo('OK');
    };
    setIsShow(false);
  }

  return (
    <PokemonDetailWrapper>
      {loading && (
        <Loader />
      )}
      <Container>
        <Row>
          <PokemonDetailContent>
            {getPokemon && (
              <>
                <CardDetail
                  name={getPokemon.name}
                  img={getPokemonImage}
                  data={getPokemon} 
                  type={getPokemonType} 
                  moves={getPokemonMoves}
                  hp={getPokemonStats.hp}
                  attack={getPokemonStats.attack}
                  def={getPokemonStats.def}
                  spAtt={getPokemonStats.spAtt}
                  spDef={getPokemonStats.spDef}
                  speed={getPokemonStats.speed}
                  styledBgHeader={{
                    backgroundColor: `#${type_colors[pokeColors]}`
                  }}
                  styledBgHeaderMoves={{
                    backgroundColor: `#${type_colors[pokeColors]}`
                  }}
                />
                <Button onClick={handleShowPopup}>Catch</Button>
              </>
            )}
          </PokemonDetailContent>
        </Row>
      </Container>
      <Popup 
        isShow={isShow}
        isCatched={isCatdhed} 
        handleSubmit={handleSubmit}
        type='text'
        name={catchPokemon.nickname}
        value={catchPokemon.nickname}
        onChange={handleChangeNewPokemon}
        buttonText={buttonText}
        messagePopup={messagePopup}
      />
      <PopupInformation 
        isShow={showPopupInfo}
        messagePopupInformation={messagePopup}
        buttonText={buttonTextInfo}
        onClick={() => setShowPopupInfo(false)}
      />
    </PokemonDetailWrapper>
  )
};


export default PokemonDetail;