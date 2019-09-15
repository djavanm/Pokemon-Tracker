export const setPokemon = pokemon => ({
  type: 'SET_POKEMON',
  pokemon
});

export const catchPokemon = pokemon => ({
  type: 'CATCH_POKEMON',
  pokemon
});

export const releasePokemon = id => ({
  type: 'RELEASE_POKEMON',
  id
});
