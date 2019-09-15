const initialState = [];

export const teamPokemon = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POKEMON' :
      return [...state, action.pokemon];
    case 'REMOVE_POKEMON' :
      return state.filter(pokemon => pokemon.id !== action.id);
    default :
      return state;
  }
};
