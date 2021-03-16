import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@apollo/client';
import * as U from '@md-utils';
// types
import { GetStarship, GetStarshipResponse, GetStarshipVariables } from '@md-sw-starship/queries/starship/types';
import { ClientError } from '@md-utils/errors/custom';
// mock
import { GET_STARSHIP_QUERY } from '@md-sw-starship/queries/starship';

interface Context {
  starship?: GetStarship;
  isLoading: boolean;
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetStarshipVariables>) => Promise<ClientError<string> | GetStarship | undefined>;
}

const StarshipAPIContext = React.createContext<Context>({
  starship: undefined,
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve({} as GetStarship)
});

const StarshipAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading, error, refetch } = useQuery<GetStarshipResponse, GetStarshipVariables>(GET_STARSHIP_QUERY, {
    variables: { id: query.id as string },
    skip: !query.id
  });

  const refetchStarship = async (variables?: Partial<GetStarshipVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data?.starship;
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  return (
    <StarshipAPIContext.Provider
      value={{
        starship: data ? data.starship : undefined,
        isLoading: loading,
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        refetch: refetchStarship
      }}
    >
      {children}
    </StarshipAPIContext.Provider>
  );
};

export { StarshipAPIContextProvider, StarshipAPIContext };
