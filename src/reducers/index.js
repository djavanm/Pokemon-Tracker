import { combineReducers } from 'redux';
import { currentPokemon } from './currentPokemon';
import { caughtPokemon } from './caughtPokemon';

export const rootReducer = combineReducers({
  currentPokemon,
  caughtPokemon
});
