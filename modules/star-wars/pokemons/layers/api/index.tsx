import * as React from 'react';
import { Pokemon } from '@md-shared/types/kind';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsThunkCreator } from '../../../../../store/modules/pokemons';
import { RootStore } from '../../../../../store';

interface Context {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: Error | undefined;
}

const PokemonsAPIContext = React.createContext<Context>({
  pokemons: [],
  isLoading: false,
  error: undefined
});

const PokemonsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsThunkCreator());
  }, []);
  const { state, loading } = useSelector<RootStore>(({ pokemons }) => pokemons);
  return (
    <PokemonsAPIContext.Provider
      value={{
        pokemons: state.data,
        isLoading: loading,
        error: state.error
      }}
    >
      {children}
    </PokemonsAPIContext.Provider>
  );
};

export { PokemonsAPIContextProvider, PokemonsAPIContext };
