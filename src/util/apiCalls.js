import { cleanPokemon, findDescription } from '../helpers';

export const getPokemon = async indentifier => {
  const url = `https://pokeapi.co/api/v2/pokemon/${indentifier}/`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('There was an error getting your pokemon.');
  };
  let pokemon = await response.json();
  pokemon = cleanPokemon(pokemon);
  pokemon.description = await getDescription(pokemon.id);
  return pokemon;
};

export const getDescription = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('There was an error getting your pokemon.');
  };
  const speciesInfo = await response.json();
  return findDescription(speciesInfo);
}
