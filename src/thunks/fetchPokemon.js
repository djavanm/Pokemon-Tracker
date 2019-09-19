import { setPokemon } from '../actions';
import { cleanPokemon } from '../helpers';
import { fetchDescription } from './fetchDescription';

export const fetchPokemon = url => {
  return async dispatch => {
    try {
      const res = await fetch(url);
      if(!res.ok) {
        throw Error('There was an error finding your Pokemon.');
      };
      const data =  await res.json();
      let pokemon = cleanPokemon(data);
      pokemon.description = await dispatch(fetchDescription(pokemon.id));
      dispatch(setPokemon(pokemon));
    } catch (error) {
      console.log(error.message);
    };
  };
};
