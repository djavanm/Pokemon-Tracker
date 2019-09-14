import React from 'react';
import { connect } from 'react-redux';

export const MyPC = ({ caughtPokemon }) => {
  let sprites = caughtPokemon.map((pokemon, index) => {
    return <img className='sprite' src={`${pokemon.sprite}`} alt={`{pokemon.name}'s sprite`} key={index} />
  });
  return (
    <section className='my-pc-container'>
      {sprites}
    </section>
  )
};

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon,
  caughtPokemon: state.caughtPokemon
});

export default connect(mapStateToProps)(MyPC);
