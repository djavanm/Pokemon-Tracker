export const cleanPokemon = ({ name, id, sprites, types, height, weight }) => {
  return {
    name: name[0].toUpperCase() + name.slice(1),
    id,
    sprite: sprites.front_default,
    types: types.map(typeObj => typeObj.type.name).map(name => name[0].toUpperCase() + name.slice(1)),
    height,
    weight,
    gen: generationPicker(id),
    image: imageSource(id),
    tracked: false
  }
};

export const generationPicker = id => {
  switch (true) {
    case 0 < id && id <= 151:
      return 'Generation 1'
    case 152 <= id && id <= 251 :
      return 'Generation 2'
    case 252 <= id && id <= 386 :
      return 'Generation 3'
    case 387 <= id && id <= 493 :
      return 'Generation 4'
    case 494 < id && id <= 649 :
      return 'Generation 5'
    case 650 <= id && id <= 721 :
      return 'Generation 6'
    case 722 <= id && id <= 807 :
      return 'Generation 7'
    default :
      return 'This pokemon does not exist yet!'
  }
};

export const imageSource = id => {
  switch (true) {
    case id.toString().length === 1 :
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`
    case id.toString().length === 2 :
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
    default :
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
  }
};

export const randNum = () => {
  return Math.floor(Math.random() * Math.floor(807));
}
