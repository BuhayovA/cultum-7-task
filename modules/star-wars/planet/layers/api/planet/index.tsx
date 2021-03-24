import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@apollo/client';
import * as U from '@md-utils';
// types
import { Planet, GetPlanetResponse, GetPlanetVariables } from '@md-sw-planet/queries/planet/types';
import { ClientError } from '@md-utils/errors/custom';
// mock
import { GET_PLANET_QUERY } from '@md-sw-planet/queries/planet';

interface Context {
  planet?: Planet;
  isLoading: boolean;
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetPlanetVariables>) => Promise<ClientError<string> | Planet | undefined>;
}

const PlanetAPIContext = React.createContext<Context>({
  planet: undefined,
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve({} as Planet)
});

const PlanetAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();
  const { data, loading, error, refetch } = useQuery<GetPlanetResponse, GetPlanetVariables>(GET_PLANET_QUERY, {
    variables: { id: query.id as string },
    skip: !query.id
  });

  const refetchPlanet = async (variables?: Partial<GetPlanetVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data?.planet;
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  return (
    <PlanetAPIContext.Provider
      value={{
        planet: data ? data.planet : undefined,
        isLoading: loading,
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        refetch: refetchPlanet
      }}
    >
      {children}
    </PlanetAPIContext.Provider>
  );
};

export { PlanetAPIContextProvider, PlanetAPIContext };
