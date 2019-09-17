import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_POKEMON', () => {
    const mockPokemon = { name:'bulbasaur' };
    const expected = {
      type: 'SET_POKEMON',
      pokemon: { ...mockPokemon }
    };
    const result = actions.setPokemon(mockPokemon);
    expect(result).toEqual(expected);
  });

  it('should have a type of CATCH_POKEMON', () => {
    const mockPokemon = { name:'bulbasaur' };
    const expected = {
      type: 'CATCH_POKEMON',
      pokemon: { ...mockPokemon }
    };
    const result = actions.catchPokemon(mockPokemon);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_POKEMON', () => {
    const mockPokemon = { name:'bulbasaur' };
    const expected = {
      type: 'ADD_POKEMON',
      pokemon: { ...mockPokemon }
    };
    const result = actions.addToTeam(mockPokemon);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_POKEMON', () => {
    const expected = {
      type: 'REMOVE_POKEMON',
      id: 1
    };
    const result = actions.removeFromTeam(1);
    expect(result).toEqual(expected);
  });

});
