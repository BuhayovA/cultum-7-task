import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { PlanetsContainer } from '@md-sw-planets/index';
// queries
import { GET_PLANETS_QUERY } from '@md-queries/planets';
// types
import { GetPlanetsResponse, GetPlanetsVariables } from '@md-queries/planets/types';
// libs
import { initializeApollo } from '../../lib/apolloClient';

const PlanetsPage = () => (
  <MainLayout>
    <PlanetsContainer />
  </MainLayout>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetPlanetsResponse, GetPlanetsVariables>({
      query: GET_PLANETS_QUERY,
      variables: { first: 5 }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_PLANETS_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default PlanetsPage;
