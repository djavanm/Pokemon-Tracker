import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { setPokemon } from '../../actions';
import { getPokemon, getDescription } from '../../util/apiCalls';
import { fetchPokemon } from '../../thunks/fetchPokemon';

jest.mock('../../thunks/fetchPokemon')

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
  const mockState = {
    currentPokemon: mockPokemon,
    caughtPokemon: mockCaughtPokemon,
    teamPokemon: mockTeamPokemon
  };

  beforeEach(() => {
  wrapper = shallow(<App fetchPokemon={fetchPokemon}/>)
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

  it('should call fetch Pokemon when mounting', () => {
  expect(fetchPokemon).toHaveBeenCalled();
  });
});
