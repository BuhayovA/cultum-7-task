import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { StarshipsContainer } from '@md-sw-starships/index';
// queries
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { GetStarshipsResponse, GetStarshipsVariables } from '@md-queries/starships/types';
// lib
import { initializeApollo } from '../../lib/apolloClient';

const StarshipsPage = () => (
  <MainLayout>
    <StarshipsContainer />
  </MainLayout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetStarshipsResponse, GetStarshipsVariables>({
      query: GET_STARSHIPS_QUERY,
      variables: { first: 5 }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_STARSHIPS_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default StarshipsPage;
