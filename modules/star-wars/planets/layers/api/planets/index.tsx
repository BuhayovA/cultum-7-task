import * as React from 'react';
// libs
import { useQuery } from '@apollo/client';
// utils
import * as U from '@md-utils';
// types
import { GetPlanetsResponse, GetPlanetsVariables, Planets } from '@md-shared/queries/planets/types';
import { ClientError } from '@md-utils/errors/custom';
// queries
import { GET_PLANETS_QUERY } from '@md-shared/queries/planets';

interface Context {
  planets: Planets;
  isLoading: boolean;
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetPlanetsVariables>) => Promise<ClientError<string> | Planets>;
}

const PlanetsAPIContext = React.createContext<Context>({
  planets: [],
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve([] as Planets)
});

const PlanetsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading, refetch, error } = useQuery<GetPlanetsResponse, GetPlanetsVariables>(GET_PLANETS_QUERY, {
    variables: { first: 5 }
  });

  const refetchPlanets = async (variables?: Partial<GetPlanetsVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allPlanets.planets : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  return (
    <PlanetsAPIContext.Provider
      value={{
        planets: data ? data.allPlanets.planets : [],
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        isLoading: loading,
        refetch: refetchPlanets
      }}
    >
      {children}
    </PlanetsAPIContext.Provider>
  );
};

export { PlanetsAPIContextProvider, PlanetsAPIContext };
