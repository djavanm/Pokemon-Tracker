import { combineReducers } from 'redux';
import { currentPokemon } from './currentPokemon';

export const rootReducer = combineReducers({
  currentPokemon
});
