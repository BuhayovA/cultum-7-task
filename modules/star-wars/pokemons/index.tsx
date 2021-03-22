import React from 'react';
import { PokemonsPresentation } from '@md-star-wars/pokemons/layers/presentation';
import { PokemonsAPIContextProvider } from '@md-star-wars/pokemons/layers/api';
import { PokemonsBLContextProvider } from '@md-star-wars/pokemons/layers/businness';

const PokemonsContainer = () => {
  return (
    <PokemonsAPIContextProvider>
      <PokemonsBLContextProvider>
        <PokemonsPresentation />
      </PokemonsBLContextProvider>
    </PokemonsAPIContextProvider>
  );
};
export default PokemonsContainer;
