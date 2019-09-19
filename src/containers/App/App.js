import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import PokemonCard from '../PokemonCard/PokemonCard';
import MyPC from '../MyPC/MyPC';
import MyTeam from '../MyTeam/MyTeam';
import { Route, Redirect } from 'react-router-dom';

export class App extends Component {
  async componentDidMount() {
    const { fetchPokemon } = this.props;
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/1/`);
  };

  render() {
    const  { currentPokemon } = this.props;
    return (
      <main className="App">
        <Nav />
        <Route  exact path='/' component={SearchForm} />
        <Route  exact path='/myPC' render={() => currentPokemon ? <MyPC /> : <Redirect to='/' /> } />
        <Route  exact path='/myTeam' render={() => currentPokemon ? <MyTeam /> : <Redirect to='/' /> }/>
        {currentPokemon && <PokemonCard /> }
      </main>
    )
  }
};

export const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPokemon }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
