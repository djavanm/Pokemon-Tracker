import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaLaptop } from 'react-icons/fa';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon } from '../../actions';

export class MyPC extends Component {

  showPokemon = async (e, newId) => {
    e.preventDefault();
    const { setPokemon } = this.props;
    const newPokemon = await getPokemon(newId);
    setPokemon(newPokemon);
    console.log(newPokemon);
  }

  render() {
    const { caughtPokemon } = this.props;
    let sprites = caughtPokemon.map((pokemon, index) => {
      return <img className='sprite' src={`${pokemon.sprite}`} alt={`{pokemon.name}'s sprite`} key={index} onClick={(e) => this.showPokemon(e, pokemon.id)}/>
    });
    return (
      <section className='my-pc-container'>
        <h3 className='mypc-laptop-logo'><FaLaptop color='#01579E' size={30} /></h3>
        <div className='sprites'>
        {sprites}
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon,
  caughtPokemon: state.caughtPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPokemon }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MyPC);
