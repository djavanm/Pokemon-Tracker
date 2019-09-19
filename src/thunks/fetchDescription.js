import { findDescription } from '../helpers';

export const fetchDescription = id => {
  return async dispatch => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    try {
      const res = await fetch(url);
      if(!res.ok) {
        throw Error(res.message);
      }
      const pokeInfo = await res.json();
      return findDescription(pokeInfo);
    } catch (error) {
      console.log(error.message)
    };
  };
};
