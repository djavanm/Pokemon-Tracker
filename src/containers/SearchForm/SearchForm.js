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

  render() {
    const { name, id, newPokemon } = this.state;
    const { pokemon } = this.props;
    const placeholderName = newPokemon ? pokemon.name : 'Enter a Name!';
    const placeholderId = newPokemon ? `#${pokemon.id}` : 'Enter a Number!';
    return (
      <form className='search-form' >
        <div className='inputs-container'>
          <input className="search-name input" type="text" placeholder={placeholderName} value={name} onChange={(e) => this.handleChange(e)} name="name"/>
          <input className="search-num input" type="number" placeholder={placeholderId} value={id} onChange={(e) => this.handleChange(e)} name="id" />
        </div>
        <div className="button-container">
          <button className="search-btn" type="submit" onClick={(e) => this.handleSubmit(e)}> Search </button>
          <button className="search-btn" type="submit" onClick={(e) => this.handleSurprise(e)}> Surprise Me! </button>
          <button className="search-btn" type="submit" disabled={true} > Track! </button>
        </div>
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
