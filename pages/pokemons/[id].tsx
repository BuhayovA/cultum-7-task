import React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import PokemonContainer from '@md-star-wars/pokemon';
// types
import { GetServerSideProps } from 'next';
// libs
import { createAPI } from '@md-shared/services/api';
// mock
import { initializeStore } from '../../lib/redux/initStore';
import { getPokemonDescriptionsAction, setTimeRequestPokemon } from '../../store/modules/pokemon';

const PokemonPage = () => {
  return (
    <MainLayout>
      <PokemonContainer />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const api = createAPI();
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  try {
    const { data, headers } = await api.getPokemon(context.query.id);

    dispatch(getPokemonDescriptionsAction(data));
    dispatch(setTimeRequestPokemon(Date.parse(headers.date)));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return { props: { initialReduxState: JSON.parse(JSON.stringify(reduxStore.getState())) } };
};

export default PokemonPage;
