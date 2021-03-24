import React from 'react';
import { PokemonAPIContextProvider } from '@md-star-wars/pokemon/layers/api/pokemon';
import { PokemonPresentation } from '@md-star-wars/pokemon/layers/presentation';
import { PokemonBLContextProvider } from '@md-star-wars/pokemon/layers/business';

const PokemonContainer = () => {
  return (
    <PokemonAPIContextProvider>
      <PokemonBLContextProvider>
        <PokemonPresentation />
      </PokemonBLContextProvider>
    </PokemonAPIContextProvider>
  );
};

export default PokemonContainer;
