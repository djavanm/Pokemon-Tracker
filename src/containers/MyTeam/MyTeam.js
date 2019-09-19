import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import { Link } from 'react-router-dom';
import MiniCard from '../../components/MiniCard/MiniCard';

export class MyTeam extends Component {

  showPokemon = async (e, newId) => {
    e.preventDefault();
    const { fetchPokemon } = this.props;
    const url = `https://pokeapi.co/api/v2/pokemon/${newId}/`;
    fetchPokemon(url);
  };

  render() {
    const { teamPokemon } = this.props;
    let teamGifs = teamPokemon.map((pokemon, index) => {
      return <MiniCard key={pokemon.id} pokemon={pokemon} showPokemon={this.showPokemon} />
    });
    return (
      <section className='my-team-container'>
      { teamPokemon.length === 0 &&
       <div className='warning-div'>
       <p>Go to myPC to add your pokemon to your team!</p>
       <Link to='/myPC'><button className="team-btn">Catch Pokemon</button></Link>
       <Link to='/myPC'><button className="team-btn">Add Pokemon to Team </button></Link>
      </div> }
      {teamGifs}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  teamPokemon: state.teamPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchPokemon}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MyTeam);
