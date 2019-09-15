const initialState = [];

export const caughtPokemon = (state = initialState, action) => {
  switch (action.type) {
    case 'CATCH_POKEMON' :
      return [...state, action.pokemon];
    case 'RELEASE_POKEMON' :
      return state.filter(pokemon => pokemon.id !== action.id);
    default :
      return state;
  }
};
