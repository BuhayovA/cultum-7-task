import React from 'react';
import { MainLayout } from '@md-shared/layouts/main';
import PokemonsContainer from '@md-star-wars/pokemons';

const PokemonsPage = () => {
  return (
    <MainLayout>
      <PokemonsContainer />
    </MainLayout>
  );
};

export default PokemonsPage;
