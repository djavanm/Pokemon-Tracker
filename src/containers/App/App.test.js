import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow, mount } from 'enzyme';
import { setPokemon } from '../../actions';
import { getPokemon, getDescription } from '../../util/apiCalls';

jest.mock('../../util/apiCalls');

getDescription.mockImplementation(() => {
  return 'Bulbasaur is cool.';
});

getPokemon.mockImplementation(() => {
  return {
    name: 'Bulbasaur',
    description: 'Bulbasaur is cool.',
    gen: 'Generation 1',
    gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
    height: 7,
    id: 1,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  };
});

describe('App', () => {
  let wrapper;

  const mockPokemon = {
    name: 'Bulbasaur',
    description: 'Bulbasaur is cool.',
    gen: 'Generation 1',
    gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
    height: 7,
    id: 1,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  };

  const mockCaughtPokemon = [mockPokemon];
  const mockTeamPokemon = [mockPokemon];
  const mockCurrentPokemon =  mockPokemon;
  const mockState = {
    currentPokemon: mockPokemon,
    caughtPokemon: mockCaughtPokemon,
    teamPokemon: mockTeamPokemon
  };

  beforeEach(() => {
  wrapper = shallow(<App />)
});

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      currentPokemon: mockPokemon,
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setPokemon action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setPokemon(mockPokemon);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setPokemon(mockPokemon);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call getPokemon when mounting', () => {
  expect(getPokemon).toHaveBeenCalledWith('mew');
  });

});
