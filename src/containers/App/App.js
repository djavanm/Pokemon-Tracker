import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '../../util/apiCalls';
import { setPokemon } from '../../actions';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import PokemonCard from '../PokemonCard/PokemonCard';
import MyPC from '../MyPC/MyPC';
import { Route } from 'react-router-dom';

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
        <Route exact path='/' render={() => <SearchForm />} />
        <Route exact path='/myPC' render={() => <MyPC />} />
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
