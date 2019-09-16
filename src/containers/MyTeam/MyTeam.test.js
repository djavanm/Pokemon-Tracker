import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { MyTeam, mapStateToProps, mapDispatchToProps } from './MyTeam';
import { getPokemon, getDescription } from '../../util/apiCalls';
import { setPokemon } from '../../actions';
import { Link } from 'react-router-dom';

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

describe('MyTeam', () => {
  let wrapper;
  const mockPokemon = {
    name: 'Bulbasaur',
    description: 'Bulbasaur is cool.',
    gen: 'Generation 1',
    gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
    height: 7,
    id: 1,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['Grass', 'Poison']
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
    wrapper = shallow(<MyTeam
      teamPokemon={mockTeamPokemon}
      />)
  });

  it('it should match the snapshot given the correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      teamPokemon: mockTeamPokemon
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('should get a new pokemon when the show Pokemon method is called', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.instance().showPokemon(mockEvent, 1);
    expect(getPokemon).toHaveBeenCalledWith(1);
    wrapper.instance().showPokemon(mockEvent, 'charizard');
    expect(getPokemon).toHaveBeenCalledWith('charizard');
  });

});
