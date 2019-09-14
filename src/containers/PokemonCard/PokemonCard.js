import React from 'react';
import { connect } from 'react-redux';

export const PokemonCard = ({ currentPokemon }) => {
  const { name, id, types, height, weight, image, gen, description } = currentPokemon;
  let typeInfo = types ? types.map((type, index) => <li className={type.toLowerCase()} key={index}>{type}</li>) : null;
  return (
    <article className="card-container">
      <img className="poke-img" src={image} alt={`name's card`} data-id={id} />
      <div className="poke-info-container">
        <div className="poke-info">
          <p className="pokemon-banner">Current Pokemon:</p>
          <p className="pokemon-name"> {name} </p>
          <p className="pokemon-description">{description}</p>
        </div>
        <div className='poke-stats'>
          <div className="box">
          <p>Type{types.length > 1 && <span className='span-type'>s</span>}:</p>
          <ul className="poke-info-list">
          {typeInfo}
          </ul>
          </div>
          <div className="box measurements">
          <p>Height: </p>
          <p>{height}ft</p>
          <p>Weight:</p>
          <p>{weight} lbs</p>
          </div>
          <div className="box">
          <p className="pokedex-number">#{id}</p>
          <p className="generation" >{gen}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon
});

export default connect(mapStateToProps)(PokemonCard);
