import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon } from '../../actions';
import { randNum } from '../../helpers';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      id: '',
      newPokemon: false
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { setPokemon } = this.props;
    const { name, id } = this.state;
    const newPokemon = name ? await getPokemon(name) : await getPokemon(id);
    this.clearInputs();
    setPokemon(newPokemon);
    console.log(newPokemon);
  }

  handleSurprise = async e => {
    e.preventDefault();
    const { setPokemon } = this.props;
    const newId = randNum();
    const newPokemon = await getPokemon(newId);
    this.clearInputs();
    setPokemon(newPokemon);
    console.log(newPokemon);
  }

  clearInputs = () => {
    this.setState({ name: '', id: '', newPokemon: true });
  }

  showNew = async (e) => {
    e.preventDefault();
    const { setPokemon, pokemon } = this.props;
    const id = pokemon.id;
    const newId = e.target.name === 'next' ? id + 1 : id - 1;
    const newPokemon = await getPokemon(newId);
    setPokemon(newPokemon);
    console.log(newPokemon)
  }

  render() {
    const { name, id, newPokemon } = this.state;
    const { pokemon } = this.props;
    const placeholderName = newPokemon ? pokemon.name : 'Enter a Name!';
    const placeholderId = newPokemon ? `#${pokemon.id}` : 'Enter a Number!';
    return (
      <form className='search-form'>
        <button className="scroll-button" onClick={(e) => this.showNew(e)} name="previous">{`<`}</button>
        <div className = 'middle-container'>
        <div className='inputs-container'>
          <input className="search-name input" type="text" placeholder={placeholderName} value={name} onChange={(e) => this.handleChan(e)} name="name"/>
          <input className="search-num input" type="number" placeholder={placeholderId} value={id} onChange={(e) => this.handleChange(e)} name="id" />
        </div>
        <div className="button-container">
          <button className="search-btn" type="submit" onClick={(e) => this.handleSubmit(e)}> Search </button>
          <button className="search-btn" type="submit" onClick={(e) => this.handleSurprise(e)}> Surprise Me! </button>
          <button className="search-btn" type="submit" disabled={true} > Track! </button>
        </div>
        </div>
        <button className="scroll-button" onClick={(e) => this.showNew(e)} name="next" >{`>`}</button>
      </form>
    )
  }
};

export const mapStateToProps = state => ({
  pokemon: state.currentPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPokemon }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
