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

export const addToTeam = pokemon => ({
  type: 'ADD_POKEMON',
  pokemon
});

export const removeFromTeam = id => ({
  type: 'REMOVE_POKEMON',
  id
});
