import * as React from 'react';
import { GetStaticPropsContext } from 'next';
import { MainLayout } from '@md-shared/layouts/main';
import { StarshipContainer } from '@md-sw-starship/index';
// query
import { GET_STARSHIP_QUERY } from '@md-sw-starship/queries/starship';
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { GetStarshipResponse, GetStarshipVariables } from '@md-sw-starship/queries/starship/types';
import { GetStarshipsResponse, GetStarshipsVariables } from '@md-queries/starships/types';
//
import { initializeApollo } from '../../lib/apolloClient';

const StarshipPage = () => (
  <MainLayout>
    <StarshipContainer />
  </MainLayout>
);

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetStarshipsResponse, GetStarshipsVariables>({
    query: GET_STARSHIPS_QUERY,
    variables: { first: 5 }
  });

  const paths = data?.allStarships.starships.map((starship) => ({
    params: { id: starship.id }
  }));

  return { paths: paths ?? [], fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetStarshipResponse, GetStarshipVariables>({
      variables: { id: params?.id as string },
      query: GET_STARSHIP_QUERY
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_STARSHIP_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default StarshipPage;
