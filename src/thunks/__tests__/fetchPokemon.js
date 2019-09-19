import { setPokemon } from '../../actions';
import { cleanPokemon } from '../../helpers';
import { fetchPokemon } from '../fetchPokemon';
import { fetchDescription } from '../fetchDescription';

jest.mock('../fetchDescription');
jest.mock('../../helpers')
cleanPokemon.mockImplementation((data) => {
  return data
});

describe('fetchPokemon', () => {
  let mockPokemon;
  let mockUrl;
  let mockDispatch;

  beforeEach(() =>{
   mockPokemon = {
     name: 'bulbasaur',
     description: 'Bulbasaur is cool.',
     gen: 'Generation 1',
     gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
     height: 7,
     id: 1,
     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
     sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
     types: ['Grass', 'Poison']
   };

   mockUrl = `https://pokeapi.co/api/v2/pokemon/1/`;

   mockDispatch = jest.fn();

   window.fetch = jest.fn().mockImplementation(() => {
     return Promise.resolve({
       ok: true,
       json: () => Promise.resolve(mockPokemon)
     });
   });
  });

  it('calls the fetch with the given URL', () => {
    const thunk = fetchPokemon(mockUrl);
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch fetchDescription with the correct url', async () => {
    const thunk = fetchPokemon(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchDescription(1));
  });
});
