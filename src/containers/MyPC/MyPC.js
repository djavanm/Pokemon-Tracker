import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaLaptop } from 'react-icons/fa';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon, addToTeam, removeFromTeam } from '../../actions';
import { Link } from 'react-router-dom';

export class MyPC extends Component {

  showPokemon = async (e, newId) => {
    e.preventDefault();
    const { setPokemon } = this.props;
    const newPokemon = await getPokemon(newId);
    setPokemon(newPokemon);
    console.log(newPokemon);
  };

  addPokemon = pokemon => {
    const { addToTeam } = this.props;
    addToTeam(pokemon);
  }

  removePokemon = pokemon => {
    const { removeFromTeam } = this.props;
    removeFromTeam(pokemon.id)
  }

  render() {
    const { caughtPokemon, teamPokemon, currentPokemon } = this.props;
    let teamSprites = teamPokemon.map((pokemon, index) => {
      return <img className='team sprite' src={`${pokemon.sprite}`} alt={`{pokemon.name}'s sprite`} key={index} onClick={(e) => this.showPokemon(e, pokemon.id)}/>
    });
    let allSprites = caughtPokemon.map((pokemon, index) => {
      let teamClass = teamPokemon.map(pokemon => pokemon.id).includes(pokemon.id) ? 'onTeam' : null;
      return <img className={`sprite ${teamClass}`} src={`${pokemon.sprite}`} alt={`${pokemon.name}'s sprite`} key={index} onClick={(e) => this.showPokemon(e, pokemon.id)}/>
    });
    const addDisabled = teamPokemon.length >= 6 || teamPokemon.map(pokemon => pokemon.id).includes(currentPokemon.id);
    const removeDisabled = !teamPokemon.map(pokemon => pokemon.id).includes(currentPokemon.id);
    return (
      <section className='my-pc-container'>
        <p className='current-team-text'>Curent Team:
        {caughtPokemon.length === 0 && <span className='catch-warning'> Catch Pokemon to add them to your team!</span>}
        {caughtPokemon.length === 0 &&<Link to='/'><button className="team-btn">Catch Pokemon</button></Link>}
        {caughtPokemon.length > 0 && teamPokemon.length === 0 && <span className='catch-warning'> Add some Pokemon to your team!</span>}
        </p>
        <div className='team-container'>{teamSprites}</div>
        {caughtPokemon.length > 0 && <h3 className='mypc-laptop-logo'><FaLaptop color='#01579E' size={30} /></h3>}
        <div className='sprites'>
        {allSprites}
        </div>
        {caughtPokemon.length > 0 && <div className="team-button-container">
        <button className="team-btn" disabled={addDisabled} onClick={() => this.addPokemon(currentPokemon)}> Add To Team </button>
        <button className="team-btn" disabled={removeDisabled} onClick={() => this.removePokemon(currentPokemon)}> Remove From Team </button>
        </div>}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon,
  caughtPokemon: state.caughtPokemon,
  teamPokemon: state.teamPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPokemon, addToTeam, removeFromTeam }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MyPC);
