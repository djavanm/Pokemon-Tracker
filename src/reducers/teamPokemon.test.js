import { teamPokemon } from './teamPokemon';

describe('teamPokemon reducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = teamPokemon(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should add a pokemon to the team given the ADD_POKEMON action', () => {
    const mockPokemon = { name: 'bulbasaur', id: 1 };
    const expected = [mockPokemon];
    const actionObj = {
      type: 'ADD_POKEMON',
      pokemon: mockPokemon
    };
    const result = teamPokemon(undefined, actionObj);
    expect(result).toEqual(expected);
  });

  it('should add a pokemon to the team given the ADD_POKEMON action', () => {
    const mockPokemon = { name: 'bulbasaur', id: 1 };
    const expected = [];
    const actionObj = {
      type: 'REMOVE_POKEMON',
      id: 1
    };
    const result = teamPokemon([mockPokemon], actionObj);
    expect(result).toEqual(expected);
  });


});
