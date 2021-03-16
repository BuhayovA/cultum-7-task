import * as React from 'react';
// libs
import { useQuery } from '@apollo/client';
// utils
import * as U from '@md-utils';
// types
import { GetPeopleResponse, GetPeopleVariables, People } from '@md-sw-people/queries/people/types';
import { ClientError } from '@md-utils/errors/custom';
// queries
import { GET_PEOPLE_QUERY } from '@md-sw-people/queries/people';

interface Context {
  people: People;
  isLoading: boolean;
  error?: ClientError<string>;
  refetch: (variables?: Partial<GetPeopleVariables>) => Promise<ClientError<string> | People>;
}

const PeopleAPIContext = React.createContext<Context>({
  people: [],
  isLoading: false,
  error: undefined,
  refetch: () => Promise.resolve([] as People)
});

const PeopleAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading, refetch, error } = useQuery<GetPeopleResponse, GetPeopleVariables>(GET_PEOPLE_QUERY, {
    variables: { first: 5 }
  });

  const refetchPeople = async (variables?: Partial<GetPeopleVariables>) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allPeople.people : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  return (
    <PeopleAPIContext.Provider
      value={{
        people: data ? data.allPeople.people : [],
        error: error ? U.errors.parseAndCreateClientError(error) : undefined,
        isLoading: loading,
        refetch: refetchPeople
      }}
    >
      {children}
    </PeopleAPIContext.Provider>
  );
};

export { PeopleAPIContextProvider, PeopleAPIContext };
