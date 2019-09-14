export const setPokemon = pokemon => ({
  type: 'SET_POKEMON',
  pokemon
});

export const catchPokemon = id => ({
  type: 'CATCH_POKEMON',
  id
});

export const releasePokemon = id => ({
  type: 'RELEASE_POKEMON',
  id
});
