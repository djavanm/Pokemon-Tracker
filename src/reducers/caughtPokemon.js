const initialState = [151];

export const caughtPokemon = (state = initialState, action) => {
  switch (action.type) {
    case 'CATCH_POKEMON' :
      return [...state, action.id];
    case 'RELEASE_POKEMON' :
      return state.filter(id => id !== action.id);
    default :
      return state;
  }
};
