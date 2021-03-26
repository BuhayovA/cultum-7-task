import React from 'react';
import { MainLayout } from '@md-shared/layouts/main';
import PokemonsContainer from '@md-star-wars/pokemons';
import { GetServerSideProps } from 'next';
import { createAPI } from '@md-shared/services/api';
import { initializeStore } from '../../lib/redux/initStore';
import axios from 'axios';
import { setGetPokemonsAction } from '../../store/modules/pokemons';

const PokemonsPage = () => {
  return (
    <MainLayout>
      <PokemonsContainer />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const api = createAPI();
  const reduxStore = initializeStore();

  const { dispatch } = reduxStore;
  try {
    const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
    dispatch(setGetPokemonsAction(data.data.results));
  } catch (err) {
    console.log(err);
  }
  return { props: { initialReduxState: JSON.parse(JSON.stringify(reduxStore.getState()))}};
};

export default PokemonsPage;
