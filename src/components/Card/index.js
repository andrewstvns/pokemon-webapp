import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, CardText, CardImage, CardButton } from './card.element';

const Card = ({
  variant,
  img,
  children,
  detail,
  name,
  onClickRemove,
  handleGetPokemonImage,
  data
}) => {
  return (
    <CardWrapper detail={detail}>
      {variant === 'link-list' && (
        <>
          <Link 
            to={'/pokemon/detail/'+data.name} 
            key={data.name} 
            onClick={handleGetPokemonImage} 
            className='pokemon-list-link' 
          />
          <CardImage src={data.dreamworld} alt={data.dreamworld} />
          <CardText detail={detail}>{children}</CardText>
        </>
      )}
      {variant === 'details' && (
        <>
          <CardButton onClick={onClickRemove}/>
          <CardImage src={img} alt={img} detail={detail}/>
          <CardText detail={detail}>{name}</CardText>
        </>
      )}
    </CardWrapper>
  )
};

export default Card;