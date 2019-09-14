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
    this.clearInputs();
    const newId = randNum();
    console.log(newId);
    const newPokemon = await getPokemon(newId);
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
    const placeholderId = newPokemon ? pokemon.id : 'Enter a Number!';
    return (
      <form className='search-form' >
        <input type="text" placeholder={placeholderName} value={name} onChange={(e) => this.handleChange(e)} name="name"/>
        <input type="number" placeholder={placeholderId} value={id} onChange={(e) => this.handleChange(e)} name="id" />
        <button type="submit" onClick={(e) => this.handleSubmit(e)}> Search </button>
        <button type="submit" onClick={(e) => this.handleSurprise(e)}> Surprise Me! </button>
        <button type="submit" disabled={true} > Catch! </button>
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
