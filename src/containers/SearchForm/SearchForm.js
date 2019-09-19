import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '../../util/apiCalls';
import { catchPokemon } from '../../actions';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import { randNum } from '../../helpers';

export class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      id: '',
      newPokemon: false
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { fetchPokemon } = this.props;
    const { id } = this.state;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    fetchPokemon(url);
    this.clearInputs();
  };

  handleSurprise = async e => {
    e.preventDefault();
    const { fetchPokemon } = this.props;
    const newId = randNum();
    const url = `https://pokeapi.co/api/v2/pokemon/${newId}/`;
    fetchPokemon(url);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', id: '', newPokemon: true });
  };

  showNew = async (e) => {
    e.preventDefault();
    const { setPokemon, pokemon } = this.props;
    const id = pokemon.id;
    const newId = e.target.name === 'next' ? id + 1 : id - 1;
    try {
      const newPokemon = await getPokemon(newId);
      setPokemon(newPokemon);
      console.log(newPokemon);
    } catch {
    }
  };

  handleCatchPokemon = (e) => {
    e.preventDefault();
    const { pokemon, catchPokemon } = this.props;
    catchPokemon(pokemon);
  };


  render() {
    let displayBool = true;
    let catchBtnText = '';
    const { name, id, newPokemon } = this.state;
    const { pokemon, caughtPokemon } = this.props;
    const placeholderName = newPokemon ? pokemon.name : 'Enter a Name!';
    const placeholderId = newPokemon ? `#${pokemon.id}` : 'Enter a Number!';
    if(pokemon) {
      displayBool = caughtPokemon.map(pokemon => pokemon.id).includes(pokemon.id);
      catchBtnText =  displayBool ? 'Caught!' : 'Catch!';
    };
    return (
      <form className='search-form'>
        <button className="scroll-button" onClick={this.showNew} name="previous">{`<`}</button>
        <div className = 'middle-container'>
        <div className='inputs-container'>
          <input className="search-name input" type="text" placeholder={placeholderName} value={name} onChange={this.handleChange} name="name"/>
          <input className="search-num input" type="number" placeholder={placeholderId} value={id} onChange={this.handleChange} name="id" />
        </div>
        <div className="button-container">
          <button className="search-btn" type="submit" onClick={this.handleSubmit}> Search </button>
          <button className="search-btn" type="submit" onClick={this.handleSurprise}> Surprise Me! </button>
          {pokemon && <button className="search-btn" disabled={displayBool} onClick={this.handleCatchPokemon}> {catchBtnText}</button>}
        </div>
        </div>
        <button className="scroll-button" onClick={(e) => this.showNew(e)} name="next" >{`>`}</button>
      </form>
    )
  }
};

export const mapStateToProps = state => ({
  pokemon: state.currentPokemon,
  caughtPokemon: state.caughtPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPokemon, catchPokemon }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
