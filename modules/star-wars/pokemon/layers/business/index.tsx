import * as React from 'react';
// libs
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// mock
import { RootStore } from '../../../../../store';
import { getPokemonThunkCreator, InitialState as PokemonState } from '../../../../../store/modules/pokemon';
// helpers
import { clientError, ClientError } from '@md-shared/services/api/helpers';
// types
import { Pokemon } from '@md-shared/types/pokemon';

interface PokemonInfo {
  label: string;
  value: string | number;
}

interface Context {
  pokemonInfo: PokemonInfo[];
  isLoading: boolean;
  error: ClientError<string> | undefined;
  pokemon: Pokemon | undefined;
}

const PokemonBLContext = React.createContext<Context>({
  pokemonInfo: [],
  isLoading: false,
  error: undefined,
  pokemon: undefined
});

const PokemonBLContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector<RootStore, PokemonState>(({ pokemon }) => pokemon);

  // make api call here
  useEffect(() => {
    dispatch(getPokemonThunkCreator(query.id as string));
  }, [query.id, dispatch]);

  const pokemonInfo = React.useMemo<PokemonInfo[]>(() => {
    if (!data) {
      return [];
    }
    return [
      { label: 'Weight', value: data.weight ?? 'N/A' },
      { label: 'Height', value: data.height ?? 'N/A' },
      { label: 'Name', value: data.name ?? 'N/A' },
      { label: 'Default pokemon?', value: `${data.is_default}` ?? 'N/A' }
    ];
  }, [data]);
  return (
    <PokemonBLContext.Provider
      value={{
        isLoading: loading,
        pokemonInfo,
        error: error ? clientError(error) : undefined,
        pokemon: data
      }}
    >
      {children}
    </PokemonBLContext.Provider>
  );
};

export { PokemonBLContextProvider, PokemonBLContext };
