import { setPokemon } from '../actions';
import { cleanPokemon } from '../helpers';
import { fetchDescription } from './fetchDescription';

export const fetchPokemon = url => {
  return async dispatch => {
    try {
      const res = await fetch(url);
      console.log(res);
      if(!res.ok) {
        throw Error(res.statusText);
      };
      const data =  await res.json();
      let pokemon = cleanPokemon(data);
      pokemon.description = await dispatch(fetchDescription(pokemon.id));
      console.log(pokemon);
      dispatch(setPokemon(pokemon));
    } catch (error) {
      console.log(error.message);
    };
  };
};
