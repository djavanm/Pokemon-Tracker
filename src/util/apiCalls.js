export const getPokemon = async indentifier => {
  const url = `https://pokeapi.co/api/v2/pokemon/${indentifier}/`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('There was an error getting your pokemon.');
  };
  const pokemon = await response.json();
  return cleanPokemon(pokemon);
};

export const cleanPokemon = ({ name, id, sprites, types, height, weight }) => {
  return {
    name,
    id,
    sprite: sprites.front_default,
    types: types.map(typeObj => typeObj.type.name),
    height,
    weight
  }
};
