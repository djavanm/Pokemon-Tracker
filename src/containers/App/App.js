import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon } from '../../actions';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import PokemonCard from '../PokemonCard/PokemonCard';


export class App extends Component {
  async componentDidMount() {
    const { setPokemon } = this.props;
    const initialPokemon = await getPokemon('mew');
    setPokemon(initialPokemon);
    console.log(initialPokemon);
  }

  render() {
    const  { currentPokemon } = this.props;
    return (
      <main className="App">
        <Nav />
        <SearchForm />
        {currentPokemon && <PokemonCard /> }
      </main>
    )
  }
};

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPokemon }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
