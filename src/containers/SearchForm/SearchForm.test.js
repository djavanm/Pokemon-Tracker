import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { setPokemon } from '../../actions';

describe('SearchForm', () => {
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
    wrapper = shallow(<SearchForm
      pokemon={mockCurrentPokemon}
      caughtPokemon={mockCaughtPokemon}
      />)
  });

  it('should match the snapshot given the proper information', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handle change is called', () => {
    const mockEventName = {
      target: {
        name: 'name',
        value: 'squirtle'
      }
    };
    const mockEventId= {
      target: {
        name: 'id',
        value: 4
      }
    };
    const expectedName = 'squirtle';
    const expectedId = 4;
    wrapper.instance().handleChange(mockEventName);
    wrapper.instance().handleChange(mockEventId);
    expect(wrapper.state('name')).toEqual(expectedName);
    expect(wrapper.state('id')).toEqual(expectedId);
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      pokemon: mockPokemon,
      caughtPokemon: mockCaughtPokemon
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
});
