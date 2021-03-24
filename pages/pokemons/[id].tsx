import React from 'react';
import { MainLayout } from '@md-shared/layouts/main';
import PokemonContainer from '@md-star-wars/pokemon';

const PokemonPage = () => {
  return (
    <MainLayout>
      <PokemonContainer />
    </MainLayout>
  );
};

export default PokemonPage;
