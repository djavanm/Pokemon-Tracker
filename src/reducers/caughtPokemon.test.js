import { caughtPokemon } from './caughtPokemon';


describe('caughtPokemon reducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = caughtPokemon(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the new state with a caught pokemon when CATCH_POKEMON action is passed through', () => {
    const mockPokemon = { name: 'bulbasaur' };
    const expected = [mockPokemon]
    const actionObj = {
      type: 'CATCH_POKEMON',
      pokemon: mockPokemon
    };
    const result = caughtPokemon(undefined, actionObj);
    expect(result).toEqual(expected);
  });

  it('should return the new state with a caught pokemon array when RELEASE_POKEMON action is passed through', () => {
    const mockPokemon = { name: 'bulbasaur', id: 1 };
    const initialState = [mockPokemon]
    const actionObj = {
      type: 'RELEASE_POKEMON',
      id: 1
    };
    const expected = [];
    const result = caughtPokemon(initialState, actionObj);
    expect(result).toEqual(expected);
  });
});
