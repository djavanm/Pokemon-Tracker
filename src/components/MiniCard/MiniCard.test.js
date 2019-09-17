import React from 'react';
import { shallow } from 'enzyme';
import { MiniCard } from './MiniCard';


describe('Nav', () => {
  let wrapper;
  const mockShowPokemon = jest.fn();
  const mockPokemon = {
    name: 'Bulbasaur',
    description: 'Bulbasaur is cool.',
    gen: 'Generation 1',
    gif: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
    height: 7,
    id: 1,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['Grass', 'Poison']
  };

  beforeEach(() => {
    wrapper = shallow(<MiniCard
      showPokemon={mockShowPokemon}
      pokemon={mockPokemon}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the showPokemon function when an image clicked', () => {
    wrapper.find('img').simulate('click');
    expect(mockShowPokemon).toHaveBeenCalled();
  });
});
