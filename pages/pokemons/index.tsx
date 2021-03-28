import React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import PokemonsContainer from '@md-star-wars/pokemons';
// types
import { GetServerSideProps } from 'next';
// libs
import { createAPI } from '@md-shared/services/api';
// mock
import { initializeStore } from '../../lib/redux/initStore';
import { setGetPokemonsAction, setTimePokemonsRequest } from '../../store/modules/pokemons';

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
    const { data, headers } = await api.getAllPokemons();

    dispatch(setGetPokemonsAction(data.results));
    dispatch(setTimePokemonsRequest(Date.parse(headers.date)));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return { props: { initialReduxState: JSON.parse(JSON.stringify(reduxStore.getState())) } };
};

export default PokemonsPage;
