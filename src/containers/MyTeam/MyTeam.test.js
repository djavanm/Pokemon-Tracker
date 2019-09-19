import React from 'react';
import { shallow } from 'enzyme';
import { MyTeam, mapStateToProps } from './MyTeam';

// jest.mock('../../util/apiCalls');
//
// getDescription.mockImplementation(() => {
//   return 'Bulbasaur is cool.';
// });
//
// getPokemon.mockImplementation(() => {
//   return {
//     name: 'Bulbasaur',
//     description: 'Bulbasaur is cool.',
//     gen: 'Generation 1',
//     gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
//     height: 7,
//     id: 1,
//     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
//     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
//   };
// });

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

});
