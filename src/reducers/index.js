import { combineReducers } from 'redux';
import { currentPokemon } from './currentPokemon';
import { caughtPokemon } from './caughtPokemon';
import { teamPokemon } from './teamPokemon';

export const rootReducer = combineReducers({
  currentPokemon,
  caughtPokemon,
  teamPokemon
});
