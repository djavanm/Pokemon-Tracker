import { currentPokemon } from './currentPokemon';

describe('currentPokemon reducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = currentPokemon(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the new current pokemon given the SET_POKEMON action', () => {
      const mockPokemon = {name: 'bulbasaur'};
      const expected = mockPokemon;
      const actionObj = {
        type: 'SET_POKEMON',
        pokemon: mockPokemon
      };
      const result = currentPokemon(undefined, actionObj);
      expect(result).toEqual(expected);
  });
});
