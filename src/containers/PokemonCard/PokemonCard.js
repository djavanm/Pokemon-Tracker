import React from 'react';
import { connect } from 'react-redux';

export const PokemonCard = ({ currentPokemon }) => {
  const { name, id, types, height, weight, image, gen } = currentPokemon;
  let typeInfo = types ? types.map((type, index) => <li key={index}>{type}</li>) : null;
  return (
    <article className="card-container">
      <img className="poke-img" src={image} alt={`name's card`} data-id={id} />
      <div className="poke-info-container">
        <div className="poke-info">
          <p className="pokemon-banner">Current Pokemon:</p>
          <p className="pokemon-name"> {name} </p>
        </div>
        <div class='poke-stats'>
          <p>Type{types.length > 1 && <span>s</span>}</p>
          <ul>
          {typeInfo}
          </ul>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Gen: {gen}</p>
        </div>
      </div>
    </article>
  )
}

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon
});

export default connect(mapStateToProps)(PokemonCard);
