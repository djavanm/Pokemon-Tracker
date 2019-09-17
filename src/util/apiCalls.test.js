import { getPokemon, getDescription } from './apiCalls';
import { cleanPokemon, findDescription } from '../helpers';


jest.mock('../helpers');

cleanPokemon.mockImplementation(() => {
  return {
    name: 'bulbasaur',
    description: 'Bulbasaur is cool.',
    gen: 'Generation 1',
    gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
    height: 7,
    id: 1,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    types: ['Grass', 'Poison']
  }
});

describe('apiCalls', () => {
  const mockPokemon = {
    name: 'bulbasaur',
    description: 'Bulbasaur is cool.',
    gen: 'Generation 1',
    gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
    height: 7,
    id: 1,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    types: ['Grass', 'Poison']
  };
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPokemon)
      });
    });
  });

  it('getPokemon should call a url with the correct user input', () => {
    const expected =`https://pokeapi.co/api/v2/pokemon/${1}/`;
    const mockSearch = '1';
    getPokemon(mockSearch);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an error message after a failed fetch', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: false
    });
  });
  expect(getPokemon(1)).rejects.toEqual(Error('There was an error getting your pokemon.'));
  });

  it('getDescription should call a url with the correct input', () => {
    const expected =`https://pokeapi.co/api/v2/pokemon-species/${1}/`;
    const mockSearch = '1';
    getDescription(mockSearch);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an error message after a failed fetch', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: false
    });
  });
  expect(getDescription(1)).rejects.toEqual(Error('There was an error getting your pokemon.'));
  });
});
