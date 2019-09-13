export const getPokemon = async indentifier => {
  const url = `https://pokeapi.co/api/v2/pokemon/${indentifier}/`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('There was an error getting your pokemon.');
  };
  const pokemon = await response.json();
  return pokemon;
};
