import React from 'react';

export const MiniCard = ({ pokemon, showPokemon }) => {
  const types = pokemon.types.map((type, index) => <li className={type.toLowerCase()} key={index}>{type}</li>);
  return (
    <div className='mini-card'>
    <img className='mini-gif' src={`${pokemon.gif}`} alt={`${pokemon.name}'s sprite`} onClick={(e) => showPokemon(e, pokemon.id)}/>
    <ul>
    {types}
    </ul>
    </div>
  )
};

export default MiniCard;
