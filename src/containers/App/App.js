import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon } from '../../actions';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';


export class App extends Component {
  constructor() {
    super()

  }

  async componentDidMount() {
    const { setPokemon } = this.props;
    const initialPokemon = await getPokemon('mew');
    setPokemon(initialPokemon);
    console.log(initialPokemon)
  }

  render() {
    return (
      <main className="App">
        <Nav />
        <SearchForm />
      </main>
    )
  }
};

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPokemon }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);
