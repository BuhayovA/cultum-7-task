import * as React from 'react';
//mock
import { useDispatch, useSelector } from 'react-redux';
import {useMemo} from 'react';
import {getPokemonsThunkCreator, PokemonsRespons, setClientError} from '../../../../../store/modules/pokemons';
//types
import { RootStore } from '../../../../../store';
import { InitialState as PokemonsState } from '../../../../../store/modules/pokemons/index';
import {
    ClientError,
    clientError,
    getRequestErrorMessage,
    isClientError,
    RequestError
} from "@md-shared/services/api/helpers";

interface Context {
  pokemons: { name: string; url: string }[] | undefined;
  isLoading: boolean;
  error: ClientError<string> | undefined;
}

const PokemonsAPIContext = React.createContext<Context>({
  pokemons: [],
  isLoading: false,
  error: undefined
});

const PokemonsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const dispatch = useDispatch();
  useMemo(async () => {
    return dispatch(getPokemonsThunkCreator());
  }, [])
  //take data from the redux-state.
  const { data, loading, error } = useSelector<RootStore, PokemonsState>(({ pokemons }) => pokemons);
  return (
    <PokemonsAPIContext.Provider
      value={{
        pokemons: data,
        isLoading: loading,
        error: error ? clientError(error) : undefined
      }}
    >
      {children}
    </PokemonsAPIContext.Provider>
  );
};

export { PokemonsAPIContextProvider, PokemonsAPIContext };
