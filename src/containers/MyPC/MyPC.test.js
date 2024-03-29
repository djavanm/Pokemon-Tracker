import React from 'react';
import { shallow } from 'enzyme';
import { MyPC, mapStateToProps, mapDispatchToProps } from './MyPC';
import { setPokemon, addToTeam, removeFromTeam } from '../../actions';
import { getPokemon, getDescription } from '../../util/apiCalls';
// jest.mock('../../util/apiCalls');

describe('MyPC', () => {
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
    wrapper = shallow(<MyPC
      currentPokemon={mockCurrentPokemon}
      caughtPokemon={mockCaughtPokemon}
      teamPokemon={mockTeamPokemon}
      />)
  });

  it('should match the snapshot given the correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = mockState;
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the addPokemon action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addToTeam(mockPokemon);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addToTeam(mockPokemon);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the removePokemon action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeFromTeam(mockPokemon.id);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeFromTeam(mockPokemon.id);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
