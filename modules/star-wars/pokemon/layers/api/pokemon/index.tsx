import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// types
import { Pokemon } from '@md-shared/types/pokemon';
import { InitialState as PokemonState } from '../../../../../../store/modules/pokemon/index';
import { RootStore } from '../../../../../../store';
// mock
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonThunkCreator } from '../../../../../../store/modules/pokemon';
//helpers
import { clientError, ClientError } from '@md-shared/services/api/helpers';

interface Context {
  pokemon?: Pokemon;
  isLoading: boolean;
  error: ClientError<string> | undefined;
}

const PokemonAPIContext = React.createContext<Context>({
  pokemon: undefined,
  isLoading: false,
  error: undefined
});

const PokemonAPIContextProvider: React.FC = ({ children }) => {
  //get url query
  const { query } = useRouter();
  const dispatch = useDispatch();
  if (!query) return null;

  const { data, loading, error } = useSelector<RootStore, PokemonState>(({ pokemon }) => pokemon);
  // make api call here
  useMemo(async () => {
    return dispatch(getPokemonThunkCreator(query.id as string));
  }, [query.id]);

  return (
    <PokemonAPIContext.Provider
      value={{
        pokemon: data ? data : undefined,
        isLoading: loading,
        error: error ? clientError(error) : undefined
      }}
    >
      {children}
    </PokemonAPIContext.Provider>
  );
};

export { PokemonAPIContextProvider, PokemonAPIContext };
