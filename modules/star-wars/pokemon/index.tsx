import React from 'react';
import { PokemonPresentation } from '@md-star-wars/pokemon/layers/presentation';
import { PokemonBLContextProvider } from '@md-star-wars/pokemon/layers/business';

const PokemonContainer = () => {
  return (
    <PokemonBLContextProvider>
      <PokemonPresentation />
    </PokemonBLContextProvider>
  );
};

export default PokemonContainer;
