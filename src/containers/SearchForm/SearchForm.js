import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon } from '../../actions';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      id: ''
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
    setPokemon(newPokemon);
    console.log(newPokemon);
  }

  clearInputs = () => {
    this.setState({ name: '', id: '' });
  }
  
  render() {
    const { name, id } = this.state;
    const { currentPokemon } = this.props;
    return (
      <form>
        <input type="text" placeholder={'not ready yet'} value={name} onChange={(e) => this.handleChange(e)} name="name"/>
        <input type="number" placeholder={'not ready yet'} value={id} onChange={(e) => this.handleChange(e)} name="id" />
        <button type="submit" onClick={(e) => this.handleSubmit(e)}> Search </button>
        <button type="submit" disabled={true} > Catch! </button>
      </form>
    )
  }
};

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPokemon }, dispatch)
);

export default connect(null, mapDispatchToProps)(SearchForm);
